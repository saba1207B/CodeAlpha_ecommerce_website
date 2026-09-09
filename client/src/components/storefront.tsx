import { Heart, Search, ShoppingBag, UserRound, ArrowUpRight, Star, Menu, X, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { Product } from "@/lib/store";
import { useStorefront } from "@/contexts/StorefrontContext";
import { useState } from "react";

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

export function ProductArtwork({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${product.art} ${large ? "min-h-[27rem] md:min-h-[34rem]" : "aspect-[0.92]"}`}>
      {product.photo && <img src={product.photo} alt={product.name} loading={large ? "eager" : "lazy"} decoding="async" fetchPriority={large ? "high" : "low"} draggable={false} onError={(event) => { event.currentTarget.style.display = "none"; }} className="absolute inset-0 z-10 h-full w-full object-cover" />}
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/50 bg-white/20 blur-[1px]" />
      <div className="absolute -bottom-14 -left-8 h-40 w-40 rounded-full border border-white/60 bg-white/30" />
      <div className="absolute left-[18%] top-[16%] h-20 w-20 rounded-full bg-white/25 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative flex items-center justify-center rounded-[2.2rem] border border-white/55 bg-white/35 shadow-[0_24px_60px_rgba(42,30,75,0.15)] backdrop-blur-md ${large ? "h-56 w-56 md:h-72 md:w-72" : "h-36 w-36 sm:h-44 sm:w-44"}`}>
          <div className="absolute inset-4 rounded-[1.8rem] border border-white/50" />
          <span className={`relative bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text font-black text-transparent drop-shadow-sm ${large ? "text-[9rem] md:text-[11rem]" : "text-[6rem]"}`} style={{ color: product.accent }}>
            {product.glyph}
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-800/55">
        <span>ATELIER / {product.categoryLabel}</span>
        <span>NO. {product.id.split("-")[0].toUpperCase()}</span>
      </div>
    </div>
  );
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { isSaved, toggleSaved, addItem } = useStorefront();
  const saved = isSaved(product.id);
  const savings = product.compareAt ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100) : 0;

  return (
    <article className={`group product-card ${compact ? "max-w-[15rem]" : ""}`}>
      <div className="relative">
        <Link href={`/products/${product.id}`} className="block">
          <ProductArtwork product={product} />
        </Link>
        <button
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          onClick={() => toggleSaved(product.id)}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white ${saved ? "text-violet-700" : ""}`}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>
        {product.badge && <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-700 backdrop-blur">{product.badge}</span>}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-4 right-4 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-xl transition-colors hover:bg-violet-700"
        >
          Quick add
        </button>
      </div>
      <div className="mt-4">
        <Link href={`/products/${product.id}`} className="text-[15px] font-bold tracking-[-0.02em] text-slate-950 transition hover:text-violet-700">{product.name}</Link>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500"><span className="inline-flex items-center gap-1 rounded-md bg-teal-700 px-1.5 py-1 font-bold text-white">{product.rating.toFixed(1)} <Star size={10} className="fill-white text-white" /></span><span>{product.reviewCount} ratings</span><span>·</span><span>{product.categoryLabel}</span></div>
        <div className="mt-2 flex items-baseline gap-2"><span className="text-lg font-black text-slate-950">{formatPrice(product.price)}</span>{product.compareAt && <><span className="text-xs text-slate-400 line-through">{formatPrice(product.compareAt)}</span><span className="text-xs font-bold text-teal-700">{savings}% off</span></>}</div>
        <p className="mt-1 text-[11px] text-slate-500">Free delivery · In stock</p>
      </div>
    </article>
  );
}

export function SiteHeader() {
  const { cartCount, wishlist } = useStorefront();
  const { user, isAuthenticated, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="hidden bg-slate-950 py-2 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-white sm:block">
        Complimentary delivery on orders over $100 <span className="mx-2 text-violet-300">✳</span> Made for your everyday
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[4.6rem] max-w-7xl items-center gap-3 px-5 py-3 md:gap-5 md:px-8">
          <button aria-label="Open navigation" onClick={() => setOpen(true)} className="rounded-full p-2 text-slate-700 hover:bg-slate-100 lg:hidden"><Menu size={20} /></button>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]">A</span>
            <span className="text-[15px] font-black tracking-[-0.05em] text-slate-950">ATELIER<span className="text-violet-600">.</span></span>
          </Link>
          <label className="hidden min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 transition focus-within:border-violet-400 focus-within:bg-white md:flex md:max-w-2xl">
            <Search size={17} className="shrink-0 text-slate-400" />
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") window.location.href = searchQuery ? `/shop?q=${encodeURIComponent(searchQuery)}` : "/shop"; }} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="Search Atelier products, categories, and more" aria-label="Search Atelier products" />
          </label>
          <div className="flex items-center gap-1.5 text-slate-800">
            <Link href="/shop" aria-label="Search products" className="hidden rounded-full p-2.5 transition hover:bg-slate-100 sm:block"><Search size={18} /></Link>
            {isAuthenticated ? <Link href="/account" aria-label={`Account for ${user?.name ?? "you"}`} title={user?.name ?? "Account"} className="rounded-full p-2.5 transition hover:bg-slate-100"><span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-violet-100 text-[9px] font-black text-violet-700">{(user?.name ?? "A").slice(0, 1).toUpperCase()}</span></Link> : <button disabled={loading} onClick={() => startLogin()} aria-label="Sign in" title="Sign in" className="rounded-full p-2.5 transition hover:bg-slate-100 disabled:opacity-50"><UserRound size={18} /></button>}
            <Link href="/wishlist" aria-label={`${wishlist.length} saved items`} className="relative rounded-full p-2.5 transition hover:bg-slate-100"><Heart size={18} /><span className="absolute right-1 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-violet-600 px-1 text-[8px] font-black text-white">{wishlist.length}</span></Link>
            <Link href="/cart" aria-label={`${cartCount} cart items`} className="relative rounded-full p-2.5 transition hover:bg-slate-100"><ShoppingBag size={18} /><span className="absolute right-1 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-slate-950 px-1 text-[8px] font-black text-white">{cartCount}</span></Link>
          </div>
        </div>
        <nav className="hidden border-t border-slate-100 bg-white sm:block">
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-2.5 text-xs font-semibold text-slate-600 md:px-8">
            <Link href="/shop" className="font-bold text-slate-950">☰ All</Link>
            <Link href="/shop?category=tech" className="hover:text-violet-700">Electronics</Link>
            <Link href="/shop?category=home" className="hover:text-violet-700">Home & living</Link>
            <Link href="/shop?category=carry" className="hover:text-violet-700">Carry</Link>
            <Link href="/shop?category=ritual" className="hover:text-violet-700">Ritual</Link>
            <Link href="/shop?category=new" className="ml-auto font-bold text-violet-700">New arrivals</Link>
            <Link href="/shop?sort=price-low" className="font-bold text-teal-700">Deals</Link>
          </div>
        </nav>
      </header>
      {open && <div className="fixed inset-0 z-50 bg-slate-950/20 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
        <div className="h-full w-[82%] max-w-sm bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="text-lg font-black tracking-[-0.05em]">ATELIER<span className="text-violet-600">.</span></Link>
            <button aria-label="Close navigation" onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-slate-100"><X size={18} /></button>
          </div>
          <nav className="mt-16 grid gap-6 text-2xl font-bold tracking-[-0.04em] text-slate-950">
            <Link href="/shop" onClick={() => setOpen(false)}>Shop <ArrowUpRight className="inline" size={18} /></Link>
            <a href="/#collections" onClick={() => setOpen(false)}>Collections</a>
            <a href="/#about" onClick={() => setOpen(false)}>The journal</a>
            <a href="/#about" onClick={() => setOpen(false)}>About</a>
          </nav>
          <div className="mt-16 rounded-[1.5rem] bg-gradient-to-br from-violet-100 to-teal-50 p-5">
            <Sparkles className="text-violet-600" size={18} />
            <p className="mt-3 text-sm font-semibold text-slate-800">A considered edit of things you’ll keep reaching for.</p>
          </div>
        </div>
      </div>}
    </>
  );
}

export function Footer() {
  return <footer id="about" className="mt-24 border-t border-slate-200 bg-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:px-8">
      <div>
        <Link href="/" className="text-lg font-black tracking-[-0.05em] text-slate-950">ATELIER<span className="text-violet-600">.</span></Link>
        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">Objects with a point of view. Thoughtful design for the everyday rituals that make a life.</p>
      </div>
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Explore</p><div className="mt-5 grid gap-3 text-sm text-slate-600"><Link href="/shop">All products</Link><Link href="/shop?category=new">New arrivals</Link><Link href="/wishlist">Saved items</Link></div></div>
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Service</p><div className="mt-5 grid gap-3 text-sm text-slate-600"><a href="/#about">Shipping & returns</a><a href="/#about">Care guide</a><a href="/#about">Contact studio</a></div></div>
      <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Stay in the loop</p><p className="mt-4 text-sm leading-6 text-slate-500">Seasonal edits, studio notes, and occasional good news.</p><div className="mt-4 flex border-b border-slate-300 pb-2"><input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Your email address" aria-label="Your email address" /><button className="text-xs font-bold text-violet-700">Join</button></div></div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-slate-100 px-5 py-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between md:px-8"><span>© 2026 Atelier Studio</span><span>Designed for the everyday, made to last.</span></div>
  </footer>;
}

export function SectionHeader({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-600">{eyebrow}</p><h2 className="max-w-2xl text-3xl font-black tracking-[-0.06em] text-slate-950 sm:text-4xl">{title}</h2></div>{action}</div>;
}
