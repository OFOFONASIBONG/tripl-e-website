import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import logo from "@/assets/tripleelogo.jpg";

const navItems = [
  { to: "/", label: "Manifesto" },
  { to: "/about", label: "The Founder" },
  { to: "/philosophy", label: "Ebenezer Code" },
  { to: "/services", label: "Ecosystem" },
  { to: "/ecosystem", label: "Insights" },
  { to: "/mandate", label: "2026 Mandate" },
  { to: "/media", label: "Media" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-xl border-b border-brand-gold/10" />
        <div className="container mx-auto px-6 relative flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 blob-1 overflow-hidden bg-brand-gold animate-blob">
              <img src={logo} alt="Triple E" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-brand-cream text-lg tracking-wide group-hover:text-brand-gold transition-colors">Triple E.</div>
              <div className="font-sans text-[10px] tracking-[0.25em] text-brand-gold/70 uppercase">Counselling Services</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7 font-sans text-[13px] tracking-wide text-brand-cream/80">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `relative py-1 hover:text-brand-gold transition-colors ${isActive ? "text-brand-gold" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-pea btn-pea-gold !px-6 !py-2.5 text-sm">
              Begin Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-brand-cream relative z-50"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center gap-6 font-serif text-3xl text-brand-cream">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => `hover:text-brand-gold transition-colors ${isActive ? "text-brand-gold italic" : ""}`}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-pea btn-pea-gold mt-4 text-base">Begin Consultation</Link>
        </div>
      </div>
    </>
  );
}
