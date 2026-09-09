import { Filter, Search, SlidersHorizontal, Star, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { ProductCard, Footer, SiteHeader } from "@/components/storefront";
import { categories, products } from "@/lib/store";

export default function Shop() {
  const [location] = useLocation();
  const query = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const [search, setSearch] = useState(query.get("q") ?? "");
  const [category, setCategory] = useState(query.get("category") ?? "all");
  const [sort, setSort] = useState("featured");
  const [priceCap, setPriceCap] = useState(260);
  const [minRating, setMinRating] = useState("all");
  const [dealsOnly, setDealsOnly] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    const nextQuery = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    setSearch(nextQuery.get("q") ?? "");
    setCategory(nextQuery.get("category") ?? "all");
  }, [location]);

  const filteredProducts = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesCategory = category === "all" ? true : category === "new" ? Boolean(product.isNew) : product.category === category;
      const haystack = `${product.name} ${product.description} ${product.categoryLabel}`.toLowerCase();
      const matchesRating = minRating === "all" || product.rating >= Number(minRating);
      const matchesDeal = !dealsOnly || Boolean(product.compareAt);
      return matchesCategory && matchesRating && matchesDeal && product.price <= priceCap && (!normalized || haystack.includes(normalized));
    });
    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "newest") return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [category, dealsOnly, minRating, priceCap, search, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setPriceCap(260);
    setMinRating("all");
    setDealsOnly(false);
  };

  const filterPanel = <div className="grid gap-7">
    <div><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-950">Category</p><div className="mt-4 grid gap-3 text-sm text-slate-600">{categories.map((item) => <button key={item.id} onClick={() => setCategory(item.id)} className={`flex items-center justify-between text-left transition hover:text-violet-700 ${category === item.id ? "font-bold text-violet-700" : ""}`}><span>{item.label}</span><span className="text-xs text-slate-400">{item.id === "all" ? products.length : item.id === "new" ? products.filter((product) => product.isNew).length : products.filter((product) => product.category === item.id).length}</span></button>)}</div></div>
    <div className="border-t border-slate-200 pt-6"><div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-950">Price</p><span className="text-xs font-semibold text-slate-500">$0–${priceCap}</span></div><input type="range" min="40" max="260" step="10" value={priceCap} onChange={(event) => setPriceCap(Number(event.target.value))} className="mt-4 w-full accent-violet-600" /><div className="mt-2 flex justify-between text-[11px] text-slate-400"><span>$40</span><span>$260+</span></div></div>
    <div className="border-t border-slate-200 pt-6"><p className="text-xs font-black uppercase tracking-[0.14em] text-slate-950">Customer rating</p><div className="mt-4 grid gap-3">{["all", "4.5", "4.7", "4.9"].map((rating) => <button key={rating} onClick={() => setMinRating(rating)} className={`flex items-center gap-2 text-left text-sm ${minRating === rating ? "font-bold text-violet-700" : "text-slate-600"}`}>{rating === "all" ? <span>All ratings</span> : <><span className="flex items-center gap-1">{rating} <Star size={12} className="fill-amber-400 text-amber-400" /></span><span className="text-slate-400">& up</span></>}</button>)}</div></div>
    <div className="border-t border-slate-200 pt-6"><label className="flex cursor-pointer items-center justify-between text-sm text-slate-700"><span>Deals only</span><input type="checkbox" checked={dealsOnly} onChange={(event) => setDealsOnly(event.target.checked)} className="h-4 w-4 accent-violet-600" /></label></div>
    <button onClick={resetFilters} className="text-left text-xs font-bold text-violet-700">Clear all filters</button>
  </div>;

  return <div className="min-h-screen bg-white text-slate-950"><SiteHeader /><main className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-14">
    <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-600">Marketplace edit</p><h1 className="text-4xl font-black tracking-[-0.08em] md:text-6xl">Shop all products.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Compare ratings, prices, deals, and categories in one considered catalog.</p></div><div className="text-sm text-slate-500"><strong className="text-slate-950">{filteredProducts.length}</strong> results</div></div>
    <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2"><button onClick={() => setMobileFilters(!mobileFilters)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-bold lg:hidden"><SlidersHorizontal size={14} /> Filters</button>{categories.map((item) => <button key={item.id} onClick={() => setCategory(item.id)} className={`rounded-full px-4 py-2.5 text-xs font-bold transition ${category === item.id ? "bg-slate-950 text-white" : "border border-slate-200 text-slate-600 hover:border-slate-950 hover:text-slate-950"}`}>{item.label}</button>)}</div><div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"><label className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm sm:min-w-[18rem]"><Search size={15} className="shrink-0 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search the catalog" aria-label="Search the catalog" />{search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={14} /></button>}</label><select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 outline-none"><option value="featured">Sort by: Featured</option><option value="newest">Sort by: Newest</option><option value="rating">Sort by: Top rated</option><option value="price-low">Price: Low to high</option><option value="price-high">Price: High to low</option></select></div></div>
    {mobileFilters && <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:hidden">{filterPanel}</div>}
    <div className="mt-8 grid gap-8 lg:grid-cols-[15rem_1fr]"><aside className="hidden rounded-2xl border border-slate-200 bg-white p-5 lg:block lg:h-fit lg:sticky lg:top-28">{filterPanel}</aside><section><div className="mb-4 flex items-center justify-between text-xs text-slate-500"><span>Showing {filteredProducts.length} of {products.length} products</span><span className="hidden sm:block">Secure checkout · 30-day returns</span></div>{filteredProducts.length ? <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-slate-50 text-center"><Filter className="text-violet-500" size={24} /><h2 className="mt-4 text-xl font-black tracking-[-0.04em]">Nothing quite matched.</h2><p className="mt-2 text-sm text-slate-500">Try a softer search or reset the filters.</p><button onClick={resetFilters} className="mt-5 rounded-full bg-slate-950 px-5 py-3 text-xs font-bold text-white">Reset the edit</button></div>}</section></div>
  </main><Footer /></div>;
}
