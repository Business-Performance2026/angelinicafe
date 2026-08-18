import { useEffect, useState } from "react"
import { MapPin, Phone, Clock, Star, Menu as MenuIcon, X } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
]

const MENU: Record<
  string,
  { name: string; desc: string; price: string }[]
> = {
  "Espresso Bar": [
    { name: "Espresso", desc: "Classic, intense", price: "3.50" },
    { name: "Cappuccino", desc: "Silky foam", price: "4.75" },
    { name: "Latte", desc: "Velvety milk", price: "5.00" },
    { name: "Mocha", desc: "Dark chocolate", price: "5.50" },
  ],
  Gelato: [
    { name: "Pistachio", desc: "Sicilian pistachio", price: "6.00" },
    { name: "Madagascar Vanilla", desc: "Real vanilla bean", price: "6.00" },
    { name: "Dark Chocolate", desc: "70% cocoa", price: "6.00" },
    { name: "Sicilian Lemon", desc: "Refreshing citrus", price: "6.00" },
  ],
  Pasticceria: [
    { name: "Butter Croissant", desc: "Crisp layers", price: "4.25" },
    { name: "Sicilian Cannoli", desc: "Fresh ricotta", price: "5.75" },
    { name: "Tiramisu", desc: "Classic recipe", price: "7.00" },
  ],
}

export default function Home() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCat, setActiveCat] = useState(Object.keys(MENU)[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="bg-cream font-body text-ink">
      {/* ===== NAV ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <a href="#" className="font-display italic text-2xl tracking-tight">
            Angelini <span className="text-gold">Café</span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm uppercase tracking-widest">
                {l.label}
              </a>
            ))}
            <a
              href="tel:+15145723703"
              className="border border-gold text-xs uppercase tracking-widest px-5 py-2.5 hover:bg-espresso hover:text-cream hover:border-espresso transition-colors"
            >
              (514) 572-3703
            </a>
          </nav>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-gold/30 px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24 bg-gradient-to-b from-cream to-cream-deep">
        <div className="max-w-3xl">
          <p className="eyebrow fade-up mb-6">212 Rue Saint-Jacques · Vieux-Montréal</p>
          <h1 className="font-display italic text-6xl md:text-8xl leading-none mb-8 fade-up fade-up-1">
            Angelini <span className="text-gold">Café</span>
          </h1>
          <div className="ornament mb-8 fade-up fade-up-2">
            <span className="text-xs uppercase tracking-[0.3em]">Bar · Gelateria</span>
          </div>
          <p className="font-body text-base md:text-lg text-ink/70 max-w-xl mx-auto mb-10 fade-up fade-up-2">
            A small café behind a storefront still guarded by its signature brass
            vault door — where precisely pulled espresso meets authentic Italian
            gelato in the heart of Old Montréal.
          </p>
          <div className="flex items-center justify-center gap-4 fade-up fade-up-3">
            <a
              href="#menu"
              className="bg-espresso text-cream text-xs uppercase tracking-widest px-8 py-4 hover:bg-espresso-deep transition-colors"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="border border-espresso text-xs uppercase tracking-widest px-8 py-4 hover:bg-espresso hover:text-cream transition-colors"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <section className="border-y border-gold/30 bg-cream-deep">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
          <div className="reveal">
            <div className="flex items-center gap-2 text-gold mb-1">
              <Star size={14} fill="currentColor" />
              <span className="font-display text-lg">5.0</span>
            </div>
            <p className="text-xs text-ink/60 uppercase tracking-wider">230 reviews</p>
          </div>
          <div className="reveal">
            <p className="font-display text-lg mb-1">$1–10</p>
            <p className="text-xs text-ink/60 uppercase tracking-wider">Per person</p>
          </div>
          <div className="reveal">
            <div className="flex items-center gap-2 text-gold mb-1">
              <Clock size={14} />
              <span className="font-display text-lg">9:00 PM</span>
            </div>
            <p className="text-xs text-ink/60 uppercase tracking-wider">Closing today*</p>
          </div>
          <div className="reveal">
            <p className="font-display text-lg mb-1">Dine-in · Takeout</p>
            <p className="text-xs text-ink/60 uppercase tracking-wider">Delivery available</p>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <p className="eyebrow mb-4">The Story</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            A street once known as
            <br />
            Montréal's Wall Street
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4 max-w-md">
            For decades, Rue Saint-Jacques was the beating heart of Montréal's
            finance district, lined with grand stone bank façades. Today,
            Angelini Café channels that same grandeur — its storefront still
            bears its famous iron vault door — into a coffee and gelato
            experience worthy of the building's legacy.
          </p>
          <p className="text-ink/70 leading-relaxed max-w-md">
            Every espresso, every scoop of handmade gelato, every pastry is
            served with the care of authentic Italian craft.
          </p>
        </div>
        <div className="reveal border border-gold/40 p-10 bg-cream-deep/60">
          <p className="font-display italic text-2xl text-espresso leading-relaxed">
            "Warm and elegant atmosphere, friendly service, and gelato that
            brings back memories of Italy."
          </p>
          <p className="eyebrow mt-6">— From guest impressions</p>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section id="menu" className="border-t border-gold/30 bg-espresso text-cream">
        <div className="max-w-4xl mx-auto px-6 py-28">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-4">Menu</p>
            <h2 className="font-display italic text-4xl md:text-5xl">
              What we serve
            </h2>
          </div>

          <div className="flex justify-center gap-2 flex-wrap mb-12 reveal">
            {Object.keys(MENU).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                  activeCat === cat
                    ? "border-gold bg-gold text-espresso-deep"
                    : "border-cream/30 text-cream/70 hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="reveal">
            {MENU[activeCat].map((item) => (
              <div
                key={item.name}
                className="flex items-baseline gap-3 py-5 border-b border-cream/15"
              >
                <span className="font-display text-lg">{item.name}</span>
                <span className="dotted-leader" style={{ borderColor: "rgba(246,241,231,0.25)" }} />
                <span className="text-cream/50 text-sm italic">{item.desc}</span>
                <span className="font-body text-gold">{item.price} $</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIT / CONTACT ===== */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="eyebrow mb-4">Visit Us</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Find us in Old Montréal
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-1" size={18} />
              <span>212 Rue Saint-Jacques, Montréal, QC H2Y 1L9</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-gold shrink-0 mt-1" size={18} />
              <a href="tel:+15145723703" className="hover:text-gold transition-colors">
                (514) 572-3703
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-gold shrink-0 mt-1" size={18} />
              <div>
                <p>Mon – Fri: 8:00 AM – 9:00 PM*</p>
                <p>Sat – Sun: 9:00 AM – 9:00 PM*</p>
                <p className="text-xs text-ink/50 italic mt-1">
                  *Approximate — please call to confirm exact hours.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="reveal aspect-square border border-gold/40 bg-cream-deep flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(176,141,87,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.25) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <p className="eyebrow relative z-10">GC3R+HP · Montréal</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold/30 bg-cream-deep">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-display italic text-xl mb-2">Angelini Café</p>
            <p className="text-sm text-ink/60">212 Rue Saint-Jacques, Montréal, QC H2Y 1L9</p>
          </div>
          <div className="flex gap-8 text-sm text-ink/60">
            <a href="tel:+15145723703" className="hover:text-gold transition-colors">
              (514) 572-3703
            </a>
            <a href="#menu" className="hover:text-gold transition-colors">
              Menu
            </a>
            <a href="#visit" className="hover:text-gold transition-colors">
              Visit
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-8 text-xs text-ink/40">
          © 2026 Angelini Café — Vieux-Montréal, QC
        </div>
      </footer>
    </div>
  )
}
