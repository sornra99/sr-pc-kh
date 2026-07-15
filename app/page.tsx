import { Header } from "@/components/Header";

const products = [
  { name: "Redline RTX Beast", spec: "RTX graphics • Liquid cooled • RGB build", price: "From $899" },
  { name: "Creator Pro Laptop", spec: "Fast SSD • Color display • Work ready", price: "From $549" },
  { name: "Gaming Accessories", spec: "Keyboards • Mice • Headsets • Chairs", price: "New arrivals" },
];

const services = [
  { id: "laptop-repair", title: "Laptop Repair", text: "Diagnostics, SSD upgrades, display replacement, keyboard repair, cleaning, and performance tuning." },
  { id: "phone-repair", title: "Phone Repair", text: "Screen replacement, battery service, charging issues, software recovery, and quick inspections." },
  { id: "sr-academy", title: "SR Academy", text: "Practical computer skills, PC building, repair fundamentals, and gaming setup guidance." },
];

function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square max-w-lg animate-float rounded-[2rem] border border-red-500/30 bg-gradient-to-br from-red-600/30 via-zinc-950 to-black p-6 shadow-glow">
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-red-600 blur-3xl" />
      <div className="absolute bottom-6 left-6 right-6 top-6 rounded-[1.5rem] border border-white/10 bg-black/50 p-6 backdrop-blur">
        <div className="mb-6 h-8 w-36 rounded-full bg-red-500/80" />
        <div className="grid h-56 place-items-center rounded-3xl border border-white/10 bg-[radial-gradient(circle,rgba(239,27,45,.45),transparent_55%)]">
          <div className="h-36 w-28 rounded-2xl border-2 border-red-400 bg-zinc-950 shadow-glow">
            <div className="mx-auto mt-5 h-16 w-16 rounded-full border border-red-500/60 bg-red-500/20 animate-pulseGlow" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <span className="h-3 rounded bg-white/20" />
          <span className="h-3 rounded bg-red-500/70" />
          <span className="h-3 rounded bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home" className="container-page grid min-h-[calc(100vh-104px)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="section-kicker">Gaming • Repair • Academy</span>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Build Your <span className="text-red-500">Dream PC</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-300">
            Gaming PC<br />Laptop Repair<br />Phone Repair
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#shop" className="rounded-full bg-red-600 px-8 py-4 text-center font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-red-500">Shop Now</a>
            <a href="#contact" className="rounded-full border border-white/20 px-8 py-4 text-center font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-red-400 hover:text-red-300">Book Repair</a>
          </div>
        </div>
        <HeroGraphic />
      </section>

      <section id="shop" className="container-page py-20">
        <span className="section-kicker">Shop</span>
        <h2 className="section-title">Featured gaming setups and products.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="glass-card group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-red-500/50">
              <div className="mb-6 grid h-52 place-items-center rounded-2xl bg-gradient-to-br from-red-600/30 via-zinc-900 to-black">
                <div className="h-24 w-24 rounded-3xl border border-red-400/60 bg-black/70 shadow-glow transition group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-black">{product.name}</h3>
              <p className="mt-3 text-zinc-400">{product.spec}</p>
              <p className="mt-5 font-black text-red-400">{product.price}</p>
            </article>
          ))}
        </div>
      </section>

      {services.map((service) => (
        <section key={service.id} id={service.id} className="container-page py-16">
          <div className="glass-card overflow-hidden rounded-[2rem] p-8 md:p-12">
            <span className="section-kicker">Service</span>
            <h2 className="section-title">{service.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{service.text}</p>
          </div>
        </section>
      ))}

      <section id="contact" className="container-page py-20">
        <div className="rounded-[2rem] bg-red-600 p-8 text-black shadow-glow md:p-12">
          <span className="font-black uppercase tracking-[0.28em] text-black/70">Contact</span>
          <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Ready to upgrade or repair?</h2>
          <div className="mt-8 grid gap-4 text-lg font-bold md:grid-cols-3">
            <a href="tel:015556545" className="rounded-2xl bg-black/90 p-5 text-white">Phone: 015556545</a>
            <a href="https://t.me/rasorn45" className="rounded-2xl bg-black/90 p-5 text-white">Telegram: rasorn45</a>
            <a href="https://web.facebook.com/srpckh168" className="rounded-2xl bg-black/90 p-5 text-white">Facebook: SR PC KH</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
          <p className="font-black text-white">SR PC KH</p>
          <p>© 2026 SR PC KH. Gaming PCs, repairs, and academy services.</p>
        </div>
      </footer>
    </main>
  );
}
