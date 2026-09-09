export type Product = {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  art: string;
  accent: string;
  glyph: string;
  photo?: string;
  featured?: boolean;
  isNew?: boolean;
  bestseller?: boolean;
  stock: number;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export const categories = [
  { id: "all", label: "Everything", eyebrow: "The full edit", accent: "from-[#f2ecff] to-[#e4fbf8]" },
  { id: "carry", label: "Carry", eyebrow: "Daily essentials", accent: "from-[#f9e8eb] to-[#fff7ef]" },
  { id: "home", label: "Home", eyebrow: "Quiet upgrades", accent: "from-[#e6f8f3] to-[#f8f8ff]" },
  { id: "tech", label: "Tech", eyebrow: "Useful objects", accent: "from-[#eee7ff] to-[#e4f5ff]" },
  { id: "ritual", label: "Ritual", eyebrow: "Small luxuries", accent: "from-[#fff0d9] to-[#f6ebff]" },
];

export const products: Product[] = [
  {
    id: "aura-lamp",
    name: "Aura Table Lamp",
    category: "home",
    categoryLabel: "Home",
    description: "A quiet glow for slow evenings, shaped in soft aluminum and warm glass.",
    price: 118,
    compareAt: 148,
    rating: 4.9,
    reviewCount: 84,
    badge: "Best seller",
    art: "from-[#f7d7c9] via-[#fdebd1] to-[#f4f0ff]",
    accent: "#e4bba9",
    glyph: "◐",
    photo: "/manus-storage/atelier-lamp-reference_98af48dc.jpg",
    featured: true,
    bestseller: true,
    stock: 12,
  },
  {
    id: "forma-tote",
    name: "Forma Everyday Tote",
    category: "carry",
    categoryLabel: "Carry",
    description: "A structured carry-all with a considered shape for workdays and weekends.",
    price: 156,
    rating: 4.8,
    reviewCount: 41,
    badge: "New in",
    art: "from-[#c7b3ff] via-[#e7d8ff] to-[#f7f3ff]",
    accent: "#9275df",
    glyph: "⌂",
    photo: "/manus-storage/atelier-tote-v2_65aea452.jpg",
    featured: true,
    isNew: true,
    stock: 8,
  },
  {
    id: "orbit-speaker",
    name: "Orbit Mini Speaker",
    category: "tech",
    categoryLabel: "Tech",
    description: "Room-filling sound in a compact silhouette with tactile controls.",
    price: 92,
    compareAt: 120,
    rating: 4.7,
    reviewCount: 126,
    badge: "Limited",
    art: "from-[#bdece5] via-[#dff7f3] to-[#edf6ff]",
    accent: "#59b7aa",
    glyph: "◉",
    photo: "/manus-storage/atelier-speaker-v2_cc14a334.jpg",
    featured: true,
    bestseller: true,
    stock: 18,
  },
  {
    id: "muse-candle",
    name: "Muse Ceramic Candle",
    category: "ritual",
    categoryLabel: "Ritual",
    description: "Cedar, bergamot, and amber in a hand-finished ceramic vessel.",
    price: 64,
    rating: 4.9,
    reviewCount: 64,
    art: "from-[#ffe0b8] via-[#fff1d4] to-[#f8eaff]",
    accent: "#e6af6d",
    glyph: "✦",
    photo: "/manus-storage/atelier-candle-v2_501100f8.jpg",
    featured: true,
    stock: 21,
  },
  {
    id: "halo-watch",
    name: "Halo Field Watch",
    category: "carry",
    categoryLabel: "Carry",
    description: "An easy-to-read timepiece with a brushed steel case and soft leather strap.",
    price: 228,
    rating: 4.8,
    reviewCount: 31,
    art: "from-[#d8d4ff] via-[#ebe9ff] to-[#d9f6f3]",
    accent: "#7770c9",
    glyph: "◷",
    photo: "/manus-storage/atelier-watch-v2_2c81ef31.jpg",
    bestseller: true,
    stock: 5,
  },
  {
    id: "arc-vase",
    name: "Arc Stoneware Vase",
    category: "home",
    categoryLabel: "Home",
    description: "A sculptural silhouette for a single stem or an uncluttered shelf.",
    price: 74,
    rating: 4.6,
    reviewCount: 23,
    art: "from-[#e8e3d5] via-[#f7f4ee] to-[#e5eef8]",
    accent: "#a69c82",
    glyph: "◡",
    photo: "/manus-storage/atelier-vase-v2_cf0ade80.jpg",
    isNew: true,
    stock: 14,
  },
  {
    id: "linen-notebook",
    name: "Linen Notes Set",
    category: "ritual",
    categoryLabel: "Ritual",
    description: "Three cloth-bound notebooks for ideas that deserve a little room.",
    price: 38,
    rating: 4.7,
    reviewCount: 18,
    art: "from-[#f4d0df] via-[#faeaf0] to-[#eef4ff]",
    accent: "#c48ba5",
    glyph: "▤",
    photo: "/manus-storage/atelier-notebook-v2_1deac9ec.jpg",
    stock: 32,
  },
  {
    id: "cloud-headphones",
    name: "Cloud Headphones",
    category: "tech",
    categoryLabel: "Tech",
    description: "Lightweight over-ear listening with adaptive calm for focused hours.",
    price: 184,
    compareAt: 220,
    rating: 4.8,
    reviewCount: 77,
    art: "from-[#c4e8ff] via-[#e5f7ff] to-[#eee8ff]",
    accent: "#71b1d6",
    glyph: "◖",
    photo: "/manus-storage/atelier-headphones-v2_0e29c74d.jpg",
    badge: "15% off",
    stock: 11,
  },
  {
    id: "terra-backpack",
    name: "Terra Commuter Pack",
    category: "carry",
    categoryLabel: "Carry",
    description: "A compact commuter pack with considered compartments and a softly structured profile.",
    price: 174,
    compareAt: 198,
    rating: 4.8,
    reviewCount: 52,
    badge: "Top rated",
    art: "from-[#e4d6ff] via-[#f6e6f0] to-[#e6fbf7]",
    accent: "#6f54bd",
    glyph: "▱",
    photo: "/manus-storage/atelier-backpack_213ea5ad.jpg",
    bestseller: true,
    stock: 17,
  },
  {
    id: "silk-scarf",
    name: "Mosaic Silk Scarf",
    category: "carry",
    categoryLabel: "Carry",
    description: "A lightweight silk scarf in an easy palette of lilac, peach, and sea glass.",
    price: 58,
    rating: 4.7,
    reviewCount: 29,
    badge: "New in",
    art: "from-[#f3d6e4] via-[#f7e9ff] to-[#d7f4ef]",
    accent: "#bb74a8",
    glyph: "≈",
    photo: "/manus-storage/atelier-scarf-catalog_623500f1.jpg",
    isNew: true,
    stock: 24,
  },
  {
    id: "day-card-case",
    name: "Day Card Case",
    category: "carry",
    categoryLabel: "Carry",
    description: "A slim leather card case with four easy-access slots and a soft matte finish.",
    price: 46,
    rating: 4.6,
    reviewCount: 37,
    art: "from-[#f6dfcf] via-[#fff1e5] to-[#ece7ff]",
    accent: "#b98767",
    glyph: "▭",
    stock: 30,
  },
  {
    id: "cloud-throw",
    name: "Cloud Linen Throw",
    category: "home",
    categoryLabel: "Home",
    description: "A relaxed linen throw for the edge of a sofa, a reading chair, or a slow morning.",
    price: 128,
    rating: 4.8,
    reviewCount: 45,
    badge: "Soft landing",
    art: "from-[#f3e1d1] via-[#fff7ed] to-[#e2f5ee]",
    accent: "#c79572",
    glyph: "⌁",
    photo: "/manus-storage/atelier-throw_c73adec6.jpg",
    featured: true,
    stock: 16,
  },
  {
    id: "arc-catchall",
    name: "Arc Catchall Tray",
    category: "home",
    categoryLabel: "Home",
    description: "An oval stoneware tray for the small things that deserve a place to land.",
    price: 48,
    rating: 4.7,
    reviewCount: 35,
    art: "from-[#f6d9d8] via-[#fff0e7] to-[#ece5ff]",
    accent: "#c17e7e",
    glyph: "⌒",
    photo: "/manus-storage/atelier-tray_149f6b0f.jpg",
    stock: 19,
  },
  {
    id: "still-diffuser",
    name: "Still Stone Diffuser",
    category: "home",
    categoryLabel: "Home",
    description: "A calm, sculptural diffuser that adds a little atmosphere without visual noise.",
    price: 86,
    rating: 4.9,
    reviewCount: 61,
    badge: "Best seller",
    art: "from-[#d5f0e8] via-[#effaf6] to-[#e5e7ff]",
    accent: "#5aa99a",
    glyph: "◌",
    photo: "/manus-storage/atelier-diffuser_a6e4516e.jpg",
    bestseller: true,
    stock: 13,
  },
  {
    id: "linen-keyboard",
    name: "Linen Studio Keyboard",
    category: "tech",
    categoryLabel: "Tech",
    description: "A quiet wireless keyboard with a soft tactile feel for focused desk hours.",
    price: 132,
    compareAt: 158,
    rating: 4.7,
    reviewCount: 71,
    badge: "Editor pick",
    art: "from-[#dfeaff] via-[#edf6ff] to-[#efe5ff]",
    accent: "#6c8bc6",
    glyph: "⌨",
    photo: "/manus-storage/atelier-keyboard-v2_7f7c778c.jpg",
    featured: true,
    stock: 9,
  },
  {
    id: "halo-dock",
    name: "Halo Charging Dock",
    category: "tech",
    categoryLabel: "Tech",
    description: "A small wireless charging dock that makes your bedside or desk feel more intentional.",
    price: 72,
    rating: 4.6,
    reviewCount: 48,
    art: "from-[#d9ecff] via-[#eef8ff] to-[#eee5ff]",
    accent: "#7197c7",
    glyph: "◎",
    photo: "/manus-storage/atelier-dock_4ba5edb0.jpg",
    stock: 22,
  },
  {
    id: "frame-stand",
    name: "Frame Tablet Stand",
    category: "tech",
    categoryLabel: "Tech",
    description: "A weighted aluminum stand that brings a little lift and order to your screen.",
    price: 68,
    rating: 4.8,
    reviewCount: 27,
    art: "from-[#e7e4ff] via-[#f5f3ff] to-[#dcf6f2]",
    accent: "#8277c5",
    glyph: "⌑",
    isNew: true,
    stock: 15,
  },
  {
    id: "soft-hands",
    name: "Soft Hands Cream",
    category: "ritual",
    categoryLabel: "Ritual",
    description: "A nourishing hand cream with notes of cedar leaf, citrus peel, and quiet musk.",
    price: 28,
    rating: 4.8,
    reviewCount: 96,
    badge: "Everyday favorite",
    art: "from-[#ffe2c4] via-[#fff0db] to-[#f0e7ff]",
    accent: "#d99161",
    glyph: "◍",
    photo: "/manus-storage/atelier-cream-catalog_67a1dfb3.jpg",
    stock: 42,
  },
  {
    id: "quiet-tea-set",
    name: "Quiet Tea Set",
    category: "ritual",
    categoryLabel: "Ritual",
    description: "Two low cups and a small pot for the pause between one thing and the next.",
    price: 84,
    rating: 4.9,
    reviewCount: 34,
    badge: "New in",
    art: "from-[#e7dfff] via-[#f4e9ff] to-[#e0f5f0]",
    accent: "#8a67bb",
    glyph: "◒",
    photo: "/manus-storage/atelier-tea-catalog_cbd3a5c8.jpg",
    isNew: true,
    stock: 10,
  },
  {
    id: "afterglow-mist",
    name: "Afterglow Room Mist",
    category: "ritual",
    categoryLabel: "Ritual",
    description: "A clean, airy room mist with bergamot, soft woods, and a warm mineral finish.",
    price: 42,
    rating: 4.7,
    reviewCount: 51,
    art: "from-[#f5d7df] via-[#fde8ef] to-[#e0f3f0]",
    accent: "#c67d93",
    glyph: "⌇",
    stock: 26,
  },
];

export function findProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getCartSubtotal(cart: CartLine[]) {
  return cart.reduce((total, line) => total + line.product.price * line.quantity, 0);
}

export function getCartCount(cart: CartLine[]) {
  return cart.reduce((total, line) => total + line.quantity, 0);
}

export function addToCart(cart: CartLine[], product: Product, quantity = 1) {
  const existing = cart.find((line) => line.product.id === product.id);
  if (existing) {
    return cart.map((line) =>
      line.product.id === product.id
        ? { ...line, quantity: Math.min(line.quantity + quantity, line.product.stock) }
        : line,
    );
  }
  return [...cart, { product, quantity: Math.min(quantity, product.stock) }];
}

export function updateCartQuantity(cart: CartLine[], productId: string, quantity: number) {
  if (quantity <= 0) return cart.filter((line) => line.product.id !== productId);
  return cart.map((line) =>
    line.product.id === productId
      ? { ...line, quantity: Math.min(quantity, line.product.stock) }
      : line,
  );
}

export function toggleWishlist(wishlist: string[], productId: string) {
  return wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
}
