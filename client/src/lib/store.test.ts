import { describe, expect, it } from "vitest";
import { addToCart, getCartCount, getCartSubtotal, products, toggleWishlist, updateCartQuantity } from "./store";

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

describe("storefront wishlist helpers", () => {
  it("toggles a product id in and out of the wishlist", () => {
    const added = toggleWishlist([], products[0].id);
    expect(added).toEqual([products[0].id]);
    expect(toggleWishlist(added, products[0].id)).toEqual([]);
  });
});
