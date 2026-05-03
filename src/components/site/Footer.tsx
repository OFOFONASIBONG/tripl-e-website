import { Link } from "react-router-dom";
import { FacebookLogo, LinkedinLogo, TwitterLogo, MapPin, EnvelopeSimple, Buildings, GraduationCap, ArrowUpRight } from "@phosphor-icons/react";
import logo from "@/assets/tripleelogo.jpg";

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-brand-cream pt-24 pb-10 overflow-hidden">
      {/* Backdrop pattern */}
      <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-gold/10 blob-2 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-leafdeep/30 blob-3 blur-3xl pointer-events-none" />

      <div className="absolute bottom-2 left-0 right-0 text-[14vw] font-serif font-bold text-outline-cream whitespace-nowrap pointer-events-none leading-none translate-y-1/3 select-none">
        TRIPLE&nbsp;E&nbsp;COUNSELLING
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 blob-1 bg-brand-gold overflow-hidden">
                <img src={logo} alt="Triple E logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-3xl">Triple E.</span>
            </Link>
            <p className="font-sans text-brand-cream/70 font-light max-w-sm mb-8 leading-relaxed">
              Founded on Character & Competence. Moving humanity from accidental
              choices to maximum output through psychology, mentorship and divine alignment.
            </p>
            <div className="flex gap-3">
              {[FacebookLogo, TwitterLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 blob-3 bg-brand-dark border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all duration-500"
                  aria-label="social"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-10">
            <div>
              <h4 className="font-sans text-brand-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-6">VI. Contact & Hub</h4>
              <ul className="space-y-5 text-sm text-brand-cream/80 font-light">
                <li className="flex gap-3 items-start">
                  <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong className="text-brand-cream">Office of Practice</strong><br/>IBB Avenue, Uyo,<br/>Akwa Ibom State, Nigeria.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Buildings size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong className="text-brand-cream">Consultancy Wing</strong><br/>Triple E Counselling Services.</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-brand-gold uppercase tracking-[0.25em] text-[11px] font-bold mb-6">Academic Liaison</h4>
              <ul className="space-y-5 text-sm text-brand-cream/80 font-light">
                <li className="flex gap-3 items-start">
                  <GraduationCap size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>Topfaith University,<br/>Mkpatak, Akwa Ibom.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <EnvelopeSimple size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <a href="mailto:contact@tripleecounselling.com" className="hover:text-brand-gold transition-colors">
                    contact@tripleecounselling.com
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-cream transition-colors border-b border-brand-gold/40 pb-1">
                    Send an Inquiry <ArrowUpRight size={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-brand-cream/50 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Triple E Counselling Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-brand-cream/50 tracking-wider">
            <a href="#" className="hover:text-brand-gold">Privacy</a>
            <a href="#" className="hover:text-brand-gold">Terms</a>
            <a href="#" className="hover:text-brand-gold">Ethics Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
