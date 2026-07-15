const navItems = ["Home", "Shop", "Laptop Repair", "Phone Repair", "SR Academy", "Contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="border-b border-white/10 bg-red-600/15">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 text-xs font-semibold text-zinc-200 sm:justify-between">
          <a href="tel:015556545" className="hover:text-white">Phone: 015556545</a>
          <a href="https://t.me/rasorn45" className="hover:text-white">Telegram: @rasorn45</a>
          <a href="https://web.facebook.com/srpckh168" className="hover:text-white">Facebook: srpckh168</a>
        </div>
      </div>
      <nav className="container-page flex items-center justify-between py-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-600 font-black shadow-glow transition group-hover:scale-105">SR</span>
          <span className="text-xl font-black tracking-wider">SR PC KH</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-bold text-zinc-300 transition hover:text-red-400">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
