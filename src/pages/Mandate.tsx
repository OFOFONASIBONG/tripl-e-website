import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { Scissors, GlobeHemisphereWest, Plant, ArrowRight, Quotes, Sparkle, ShieldCheck, ChartLineUp, GraduationCap, HandHeart } from "@phosphor-icons/react";

const Mandate = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="V. The 2026 Strategic Mandate"
        title={<>"Declutter <span className="italic text-gradient-gold">to be Free."</span></>}
        subtitle="Seven years of incorporation. Six years of unbroken operations. The mandate for 2026 is unambiguous: PUSH MORE — by removing what no longer serves the vision."
        watermark="2026"
      />

      {/* THE BIG NUMBER */}
      <section className="bg-brand-dark py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-gold/15 blob-2 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-leafdeep/40 blob-3 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-10 blob-2 border border-brand-gold/20 animate-blob" />
                  <div className="absolute -inset-20 blob-3 border border-brand-cream/5 animate-blob" style={{ animationDelay: "-3s" }} />
                  <div className="relative blob-1 bg-brand-navy aspect-square flex items-center justify-center text-center p-12">
                    <div>
                      <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold mb-4">2026 Directive</p>
                      <p className="font-serif text-7xl md:text-9xl text-gradient-gold leading-none mb-4">PUSH<br/>MORE.</p>
                      <p className="font-sans text-brand-cream/60 text-sm">All gas, no clutter.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">A Word from the Founder</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-8">A year of <span className="italic text-gradient-gold">deliberate addition</span> through subtraction.</h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-sans text-brand-cream/70 text-lg leading-relaxed mb-6 font-light">
                  Seven years in, the temptation is to add — more services, more verticals, more rooms. But growth without subtraction is just clutter. In 2026, we will be ruthless with anything — habit, contract, even relationship — that does not serve the central vision of incubating human potential.
                </p>
                <p className="font-sans text-brand-cream/65 leading-relaxed font-light">
                  This is not retreat. It is concentration. We are sharpening the spear.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-brand-sage/20 blob-3 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">The Three Mandates</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl text-brand-dark">Three commitments. <span className="italic">One direction.</span></h2></Reveal>
          </div>

          <Stagger className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Scissors, n: "01", t: "Decluttering", d: "Removing facets of life and business that do not serve the vision. Every quarter we audit, prune and refocus.", color: "bg-brand-gold text-brand-dark" },
              { Icon: GlobeHemisphereWest, n: "02", t: "Community Service", d: "Continuing to answer the call of humanity through broadcast media, student mentorship and pro-bono clinical work.", color: "bg-brand-dark text-brand-gold" },
              { Icon: Plant, n: "03", t: "Sustainability", d: "Ensuring every investment in knowledge yields a multiplier dividend for the next generation — academically, vocationally and spiritually.", color: "bg-brand-leafdeep text-brand-cream" },
            ].map(({ Icon, n, t, d, color }, i) => (
              <StaggerItem key={i}>
                <div className={`p-10 bg-white card-pea ${i === 1 ? "card-pea-alt" : ""} border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden group`}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 blob-1 bg-brand-gold/5 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative">
                    <div className={`w-16 h-16 blob-3 ${color} flex items-center justify-center mb-6`}>
                      <Icon size={28} weight="duotone" />
                    </div>
                    <p className="font-serif text-brand-gold text-4xl mb-2">{n}</p>
                    <h3 className="font-serif text-2xl text-brand-dark mb-4">{t}</h3>
                    <p className="font-sans text-brand-dark/70 font-light leading-relaxed">{d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* QUARTERLY ROADMAP */}
      <section className="bg-brand-navy py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[14vw] font-serif font-bold text-outline-cream opacity-[0.04] whitespace-nowrap pointer-events-none -translate-y-1/3 leading-none">2026</div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">Quarterly Roadmap</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl">Four quarters. <span className="italic text-gradient-gold">One ascent.</span></h2></Reveal>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { q: "Q1", t: "Audit & Realign", d: "Internal decluttering. Service line review. Client cohort recalibration.", Icon: ShieldCheck },
              { q: "Q2", t: "Publish & Teach", d: "Launch the TISPAS Research Annual. Expand Topfaith mentorship cohort.", Icon: GraduationCap },
              { q: "Q3", t: "Broadcast & Reach", d: "New media partnerships. Public mental-health series for adolescents.", Icon: HandHeart },
              { q: "Q4", t: "Multiply & Hand Off", d: "Document playbooks. Train successors. Prepare 2027 strategic outlook.", Icon: ChartLineUp },
            ].map(({ q, t, d, Icon }, i) => (
              <StaggerItem key={i}>
                <div className={`p-8 h-full bg-brand-dark border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 ${i % 2 === 0 ? "rounded-[34px_10px_34px_10px]" : "rounded-[10px_34px_10px_34px]"}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-brand-gold">{q}</span>
                    <Icon size={24} className="text-brand-gold/60" weight="duotone" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-goldlight mb-3">{t}</h3>
                  <p className="font-sans text-sm text-brand-cream/65 font-light leading-relaxed">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CLOSING SCRIPTURE */}
      <section className="bg-cream-pattern py-32 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-goldlight/30 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Sparkle size={48} className="text-brand-gold mx-auto mb-8" weight="fill" />
              <Quotes size={48} className="text-brand-gold mx-auto mb-6" weight="fill" />
              <p className="font-serif text-3xl md:text-5xl text-brand-dark leading-snug italic mb-8">
                "God is our Ebenezer — the Stone of Help who has helped us so far. We go again, for our dreaming shall not cease."
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-brand-gold mb-10">2026 Mandate, signed.</p>
              <Link to="/contact" className="btn-pea btn-pea-gold">Walk With Us in 2026 <ArrowRight weight="bold" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Mandate;
