import { ArrowRight, ArrowUpRight, Check, ChevronRight, CircleCheck, MoveUpRight, Sparkles, Truck } from "lucide-react";
import { Link } from "wouter";
import { Footer, ProductArtwork, ProductCard, SectionHeader, SiteHeader } from "@/components/storefront";
import { categories, products } from "@/lib/store";

function Home() {
  const featured = products.filter((product) => product.featured);
  const newArrivals = products.filter((product) => product.isNew);

  return <div className="min-h-screen overflow-hidden bg-white text-slate-950">
    <SiteHeader />
    <main>
      <section className="relative isolate overflow-hidden bg-[#fbfbfd]">
        <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-8 h-80 w-80 rounded-full bg-teal-100/65 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-44 h-px w-[120vw] -translate-x-1/2 rotate-[-7deg] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-64 h-px w-[110vw] -translate-x-1/2 rotate-[5deg] bg-gradient-to-r from-transparent via-teal-300/35 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8 md:pb-28 md:pt-24">
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm backdrop-blur"><Sparkles size={13} className="text-violet-600" /> The new everyday edit</div>
            <h1 className="max-w-2xl text-[3.8rem] font-black leading-[0.93] tracking-[-0.085em] text-gradient md:text-[6.8rem]">Objects with a point of view.</h1>
            <p className="mt-7 max-w-md text-base leading-7 text-slate-600 md:text-lg">Thoughtfully chosen pieces for living, working, carrying, and making space for what matters.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3"><Link href="/shop" className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700">Shop the edit <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link><a href="#collections" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-slate-950">Explore collections <ArrowUpRight size={16} /></a></div>
            <div className="mt-11 flex items-center gap-5 text-xs text-slate-500"><div className="flex -space-x-2"><span className="h-8 w-8 rounded-full border-2 border-[#fbfbfd] bg-[#c9b9ff]" /><span className="h-8 w-8 rounded-full border-2 border-[#fbfbfd] bg-[#b9e9df]" /><span className="h-8 w-8 rounded-full border-2 border-[#fbfbfd] bg-[#f2d0ac]" /></div><span><strong className="text-slate-800">2,400+</strong> objects sent out with care</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[38rem]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-100/60 via-transparent to-teal-100/70 blur-2xl" />
            <div className="relative rotate-[2deg] rounded-[2.5rem] border border-white bg-white/70 p-3 shadow-[0_30px_90px_rgba(73,51,131,0.16)] backdrop-blur">
              <ProductArtwork product={products[0]} large />
              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Featured object</p><p className="mt-1 text-sm font-bold text-slate-900">Aura Table Lamp</p></div>
              <div className="absolute right-7 top-7 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-center text-[9px] font-bold uppercase leading-3 tracking-[0.12em] text-white">New<br />season</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader eyebrow="A considered edit" title="Good design, in the places you live." action={<Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition hover:text-violet-700">View all products <ArrowRight size={15} /></Link>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeader eyebrow="More to explore" title="A fuller edit for every part of your day." action={<Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition hover:text-violet-700">See the full catalog <ArrowRight size={15} /></Link>} />
          <div className="grid gap-12">
            {categories.slice(1).map((category) => {
              const shelf = products.filter((product) => product.category === category.id).slice(0, 4);
              return <div key={category.id}>
                <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{category.eyebrow}</p><h3 className="mt-1 text-xl font-black tracking-[-0.05em] text-slate-950">{category.label}</h3></div><Link href={`/shop?category=${category.id}`} className="text-xs font-bold text-violet-700">View all →</Link></div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{shelf.map((product) => <ProductCard key={product.id} product={product} />)}</div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section id="collections" className="border-y border-slate-200 bg-[#fbfbfd]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeader eyebrow="Shop by feeling" title="Find your next favorite corner of the day." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.slice(1).map((category, index) => <Link href={`/shop?category=${category.id}`} key={category.id} className={`group relative min-h-48 overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${category.accent} p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${index === 0 ? "md:min-h-64" : ""}`}><div className="absolute -bottom-10 -right-8 h-36 w-36 rounded-full border border-white/70 bg-white/30 transition duration-300 group-hover:scale-125" /><div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/45 text-slate-700 transition group-hover:rotate-45"><ArrowUpRight size={15} /></div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{category.eyebrow}</p><h3 className="mt-3 text-2xl font-black tracking-[-0.06em] text-slate-900">{category.label}</h3><p className="absolute bottom-6 left-6 text-xs font-semibold text-slate-600">Explore collection <span className="ml-1">→</span></p></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-600">The studio note</p><h2 className="max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.075em] text-slate-950 md:text-6xl">Less, but better.<br /><span className="text-slate-400">That’s the whole idea.</span></h2></div>
          <div className="max-w-md md:pb-2"><p className="text-base leading-7 text-slate-600">We look for the honest detail, the useful shape, and the quiet material that gets better with time. Then we put it all in one place.</p><Link href="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 underline decoration-violet-300 decoration-2 underline-offset-4 transition hover:text-violet-700">Meet the full edit <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e9e2ff] via-[#f4edff] to-[#dcf7f0] p-8 md:min-h-[32rem]"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/70 bg-white/30" /><div className="absolute bottom-8 left-8 max-w-xs"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Spring / summer 2026</p><p className="mt-3 text-3xl font-black leading-none tracking-[-0.06em] text-slate-900">A softer way to start again.</p></div><div className="absolute bottom-10 right-12 h-36 w-36 rotate-12 rounded-[2rem] border border-white/70 bg-white/30 shadow-2xl backdrop-blur md:h-52 md:w-52"><div className="absolute inset-5 rounded-[1.5rem] border border-white/60" /></div></div>
          <div className="grid gap-5"><Link href={`/products/${newArrivals[0]?.id ?? products[1].id}`} className="group relative flex min-h-48 flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-600/60 blur-2xl" /><div className="relative flex items-start justify-between"><span className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">New arrival</span><MoveUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} /></div><div className="relative"><p className="text-2xl font-black tracking-[-0.06em]">New shapes,<br />same good feeling.</p><p className="mt-2 text-xs text-white/55">Discover the latest arrivals →</p></div></Link><div className="flex min-h-48 flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-7"><div className="flex items-center gap-2 text-teal-700"><CircleCheck size={18} /><span className="text-[10px] font-bold uppercase tracking-[0.18em]">Our promise</span></div><p className="max-w-xs text-2xl font-black leading-tight tracking-[-0.06em] text-slate-900">Useful, beautiful, never overdone.</p></div></div>
        </div>
      </section>

      <section className="bg-slate-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8"><div className="flex gap-4"><Truck className="mt-1 text-teal-300" size={21} /><div><p className="font-bold">Easy, thoughtful delivery</p><p className="mt-1 text-sm leading-6 text-white/55">Free delivery on orders over $100, always packed with care.</p></div></div><div className="flex gap-4"><Check className="mt-1 text-violet-300" size={21} /><div><p className="font-bold">30-day returns</p><p className="mt-1 text-sm leading-6 text-white/55">Changed your mind? We make it easy to send things back.</p></div></div><div className="flex gap-4"><Sparkles className="mt-1 text-amber-200" size={21} /><div><p className="font-bold">A little more considered</p><p className="mt-1 text-sm leading-6 text-white/55">Every piece is selected for its point of view and staying power.</p></div></div></div></section>
    </main>
    <Footer />
  </div>;
}

export default Home;
