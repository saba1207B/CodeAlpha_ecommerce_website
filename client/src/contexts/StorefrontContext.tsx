import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { addToCart, CartLine, getCartCount, getCartSubtotal, Product, toggleWishlist, updateCartQuantity } from "@/lib/store";

type StorefrontContextValue = {
  cart: CartLine[];
  wishlist: string[];
  cartCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  toggleSaved: (productId: string) => void;
  isSaved: (productId: string) => boolean;
};

const StorefrontContext = createContext<StorefrontContextValue | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function StorefrontProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => readStorage<CartLine[]>("atelier-cart", []));
  const [wishlist, setWishlist] = useState<string[]>(() => readStorage<string[]>("atelier-wishlist", []));

  useEffect(() => {
    window.localStorage.setItem("atelier-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("atelier-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const value = useMemo<StorefrontContextValue>(() => ({
    cart,
    wishlist,
    cartCount: getCartCount(cart),
    subtotal: getCartSubtotal(cart),
    addItem: (product, quantity = 1) => setCart((current) => addToCart(current, product, quantity)),
    updateQuantity: (productId, quantity) => setCart((current) => updateCartQuantity(current, productId, quantity)),
    removeItem: (productId) => setCart((current) => updateCartQuantity(current, productId, 0)),
    clearCart: () => setCart([]),
    toggleSaved: (productId) => setWishlist((current) => toggleWishlist(current, productId)),
    isSaved: (productId) => wishlist.includes(productId),
  }), [cart, wishlist]);

  return <StorefrontContext.Provider value={value}>{children}</StorefrontContext.Provider>;
}

export function useStorefront() {
  const context = useContext(StorefrontContext);
  if (!context) throw new Error("useStorefront must be used within StorefrontProvider");
  return context;
}
