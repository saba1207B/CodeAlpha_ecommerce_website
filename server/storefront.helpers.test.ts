import { describe, expect, it } from "vitest";
import { addToCart, categories, getCartCount, getCartSubtotal, products, toggleWishlist, updateCartQuantity } from "../client/src/lib/store";

describe("storefront cart helpers", () => {
  it("adds a product and calculates count and subtotal", () => {
    const cart = addToCart([], products[0], 2);
    expect(getCartCount(cart)).toBe(2);
    expect(getCartSubtotal(cart)).toBe(products[0].price * 2);
  });

  it("increments an existing line without exceeding stock", () => {
    const first = addToCart([], products[0], products[0].stock);
    const capped = addToCart(first, products[0], 2);
    expect(capped[0]?.quantity).toBe(products[0].stock);
  });

  it("removes a line when the quantity reaches zero", () => {
    const cart = addToCart([], products[1], 1);
    expect(updateCartQuantity(cart, products[1].id, 0)).toEqual([]);
  });
});

describe("expanded catalog", () => {
  it("has a healthy assortment in every category with valid price and stock metadata", () => {
    for (const category of categories.filter((item) => item.id !== "all")) {
      const categoryProducts = products.filter((product) => product.category === category.id);
      expect(categoryProducts.length).toBeGreaterThanOrEqual(5);
      expect(categoryProducts.every((product) => product.price > 0 && product.stock > 0)).toBe(true);
    }
  });
});

describe("storefront wishlist helpers", () => {
  it("toggles a product id in and out of the wishlist", () => {
    const added = toggleWishlist([], products[0].id);
    expect(added).toEqual([products[0].id]);
    expect(toggleWishlist(added, products[0].id)).toEqual([]);
  });
});
