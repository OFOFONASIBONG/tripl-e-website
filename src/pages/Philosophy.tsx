import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { Compass, Sparkle, BookOpen, Quotes, ArrowRight, ShieldCheck, Lightning, Brain, Heart, Cpu, Scales } from "@phosphor-icons/react";

const Philosophy = () => {
  return (
    <SiteLayout>
      <PageHero
        title={<>"The Ebenezer <span className="italic text-gradient-gold">Code."</span></>}
        subtitle="A character-and-competence matrix governed by the visionary directive of Habakkuk 2:2-3 — write the vision plainly; though it tarry, it will surely speak."
        watermark="EBENEZER"
      />

      {/* THE VERSE */}
      <section className="bg-brand-cream py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto bg-white card-pea p-12 md:p-16 border border-brand-dark/5 shadow-xl relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 blob-1 bg-brand-gold/10" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 blob-2 bg-brand-sage/20" />
            <Reveal>
              <BookOpen size={48} className="text-brand-gold mb-6" weight="duotone" />
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold font-bold mb-4">The Visionary Directive</p>
              <p className="font-serif text-2xl md:text-4xl text-brand-dark italic leading-snug mb-6">
                "Write the vision, and make it plain upon tables, that he may run that readeth it. For the vision is yet for an appointed time… though it tarry, wait for it; because it will surely come, it will not tarry."
              </p>
              <p className="font-sans text-brand-dark/60">— Habakkuk 2:2-3</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE MATRIX */}
      <section className="bg-brand-cream py-28 relative">
        <div className="absolute -top-10 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-sage/20 blob-3 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">The Matrix</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-6">Character <span className="text-gradient-gold">+</span> Competence.</h2>
              <p className="font-sans text-brand-dark/70 text-lg font-light">Two pillars, one operating system. Neither alone is sufficient; together they form the Triple E standard.</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Reveal>
              <div className="bg-white p-12 card-pea border border-brand-dark/5 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full">
                <div className="absolute -top-10 -right-10 w-40 h-40 blob-1 bg-brand-gold/10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 blob-3 bg-brand-dark flex items-center justify-center mb-8">
                    <Compass size={28} className="text-brand-gold" weight="duotone" />
                  </div>
                  <p className="font-sans text-xs text-brand-gold font-bold tracking-[0.3em] uppercase mb-3">The Internal Compass</p>
                  <h3 className="font-serif text-4xl text-brand-dark mb-6">Character</h3>
                  <p className="font-sans text-brand-dark/70 font-light mb-6 leading-relaxed">
                    Character is what remains when titles, salaries and audiences are removed. It is the quiet substance of a person — the part of you that decides who you will be when no one is watching.
                  </p>
                  <ul className="space-y-5 font-sans">
                    {[
                      { Icon: ShieldCheck, t: "Integrity", d: "Word and deed in unbroken alignment." },
                      { Icon: Heart, t: "Conviction", d: "Decisions rooted in purpose, not pressure." },
                      { Icon: Scales, t: "Moral Rectitude", d: "An ethical centre that informs every relationship." },
                    ].map(({ Icon, t, d }, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 blob-1 bg-brand-gold/15 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-brand-gold" weight="duotone" />
                        </div>
                        <div>
                          <p className="text-brand-dark font-semibold">{t}</p>
                          <p className="text-brand-dark/60 text-sm font-light">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-brand-dark p-12 card-pea card-pea-alt text-brand-cream border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 relative overflow-hidden group h-full">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 blob-2 bg-brand-gold/10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 blob-3 bg-brand-gold flex items-center justify-center mb-8">
                    <Sparkle size={28} className="text-brand-dark" weight="fill" />
                  </div>
                  <p className="font-sans text-xs text-brand-goldlight font-bold tracking-[0.3em] uppercase mb-3">The External Result</p>
                  <h3 className="font-serif text-4xl mb-6">Competence</h3>
                  <p className="font-sans text-brand-cream/70 font-light mb-6 leading-relaxed">
                    Competence is what character looks like when it shows up to work. It is the disciplined craftsmanship that turns good intentions into measurable transformation for clients.
                  </p>
                  <ul className="space-y-5 font-sans">
                    {[
                      { Icon: Brain, t: "Expertise", d: "Domain mastery built on continuous study." },
                      { Icon: Lightning, t: "Capacity", d: "Operational systems that scale without dilution." },
                      { Icon: Cpu, t: "AI-literate Proficiency", d: "Strategic use of AI for research and reach." },
                    ].map(({ Icon, t, d }, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 blob-1 bg-brand-gold/20 flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-brand-gold" weight="duotone" />
                        </div>
                        <div>
                          <p className="text-brand-cream font-semibold">{t}</p>
                          <p className="text-brand-cream/60 text-sm font-light">{d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-brand-navy py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[14vw] font-serif font-bold text-outline-cream opacity-[0.04] whitespace-nowrap pointer-events-none -translate-y-1/3 leading-none">PRINCIPLES</div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">Operating Principles</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl">How we show up — <span className="italic text-gradient-gold">always.</span></h2></Reveal>
          </div>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Plain-Vision Doctrine", d: "Every brief begins with a written, unambiguous vision. We refuse vague mandates." },
              { n: "02", t: "Patience of the Appointed Time", d: "We build for the long arc. Quick wins are tested against generational dividends." },
              { n: "03", t: "Non-Bias in Mediation", d: "Whether between spouses, generations or institutions, our role is the honest broker — never the partisan." },
              { n: "04", t: "Knowledge as Inheritance", d: "Every research output, every client engagement, becomes a teaching artifact for the next student." },
              { n: "05", t: "Divine Alignment", d: "Career, calling and conscience are not separate categories. Triple E aligns all three." },
              { n: "06", t: "Decluttered Sustainability", d: "We routinely remove activities that do not multiply the mission. Less surface, more substance." },
            ].map((p, i) => (
              <StaggerItem key={i}>
                <div className={`p-8 bg-brand-dark border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 h-full ${i % 2 === 0 ? "rounded-[34px_10px_34px_10px]" : "rounded-[10px_34px_10px_34px]"}`}>
                  <div className="font-serif text-brand-gold text-4xl mb-4">{p.n}</div>
                  <h3 className="font-serif text-xl text-brand-goldlight mb-3">{p.t}</h3>
                  <p className="font-sans text-sm text-brand-cream/65 font-light leading-relaxed">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="bg-cream-pattern py-32 relative overflow-hidden">
        <div className="absolute -top-16 -right-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-goldlight/30 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quotes size={56} className="text-brand-gold mx-auto mb-8" weight="fill" />
              <p className="font-serif text-3xl md:text-5xl text-brand-dark leading-snug italic mb-8">
                "The vision is the contract. Character is the signature. Competence is the delivery."
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-brand-gold mb-10">The Ebenezer Code, abridged</p>
              <Link to="/services" className="btn-pea btn-pea-gold">See it in Practice <ArrowRight weight="bold" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Philosophy;
