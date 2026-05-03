import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem, Parallax } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { Flask, Compass, Heartbeat, ArrowRight, ChartLineUp, Cpu, BookOpen, MapTrifold, Briefcase, ChatsCircle, UsersFour, HandHeart, FlowerLotus, ShieldCheck, GraduationCap, Quotes, ArrowUpRight } from "@phosphor-icons/react";
import researchImg from "@/assets/researchdesk.jpg";
import journeyImg from "@/assets/journeypath.jpg";
import roomImg from "@/assets/servicesroom.jpg";

const services = [
  {
    id: "tispas",
    eyebrow: "1. The Research Powerhouse",
    title: "TISPAS",
    long: "Tertiary Institution Students & Professionals Assistance Services",
    img: researchImg,
    Icon: Flask,
    vision: "Multiplying the dividends of knowledge through superior research outputs.",
    desc: "TISPAS is the academic engine of Triple E. We accompany undergraduate students, postgraduate researchers and working professionals through every stage of credible research — from problem framing to defended manuscript.",
    items: [
      { Icon: BookOpen, t: "Research Design & Review", d: "Hypothesis sharpening, literature mapping, methodology selection and pre-defence review." },
      { Icon: ChartLineUp, t: "Statistical Analysis", d: "SPSS, R, Jamovi and JASP — descriptive, inferential and structural-equation modelling." },
      { Icon: Cpu, t: "AI Integration", d: "Strategic deployment of AI for literature synthesis, drafting support and productivity multiplication." },
      { Icon: GraduationCap, t: "Defence Preparation", d: "Mock defences, slide engineering and viva-voce coaching for postgraduate candidates." },
    ],
    cta: "Book a Research Clinic",
  },
  {
    id: "start-afresh",
    eyebrow: "2. Navigating Career Middlescence",
    title: "The Start Afresh Process",
    long: "A psychological reinvention process for the second half of life",
    img: journeyImg,
    Icon: Compass,
    vision: "Transforming mid-career honesty into a fresh, fulfilling life course.",
    desc: "Designed for professionals in their 40s and 50s feeling the quiet weight of unmet milestones. Start Afresh is not a pep talk — it is a clinically-guided reinvention sequence that turns 'stuckness' into a deliberately authored next chapter.",
    items: [
      { Icon: MapTrifold, t: "Mid-Career Honesty Mapping", d: "An evidence-based audit of where you are, what you've outgrown, and what still calls you." },
      { Icon: Briefcase, t: "Vocational Re-Architecture", d: "Repositioning skills and relationships for a vocation that fits the person you've become." },
      { Icon: FlowerLotus, t: "Identity & Meaning Work", d: "Resolving the inner conflict between earlier ambition and present-day truth." },
      { Icon: ShieldCheck, t: "Sustained Accountability", d: "12-week structured follow-through with weekly review and progress instrumentation." },
    ],
    cta: "Begin the Start Afresh Process",
  },
  {
    id: "clinical",
    eyebrow: "3. Healing the Unit of Society",
    title: "Clinical & Relationship Interventions",
    long: "Emotional resilience and the Triple E Relationship Matrix",
    img: roomImg,
    Icon: Heartbeat,
    vision: "Healing the unit of society — one person, one couple, one family at a time.",
    desc: "When the family heals, the community heals. Our clinical wing addresses emotional injury, relational rupture and the silent epidemic of child and teen depression — with non-biased, professionally-mediated processes.",
    items: [
      { Icon: HandHeart, t: "Emotional Resilience Programs", d: "Grief, anxiety, burnout and the recovery of emotional range after prolonged hardship." },
      { Icon: UsersFour, t: "The Relationship Matrix", d: "Pre-marital, marital and post-conflict mediation — building healthy, accountable marriages." },
      { Icon: ChatsCircle, t: "Child & Teen Depression Care", d: "Lifting the silence around adolescent mental health with culturally-aware, clinically-sound care." },
      { Icon: FlowerLotus, t: "Family Communication Strategies", d: "Practical communication blueprints to replace inherited patterns with chosen ones." },
    ],
    cta: "Request a Clinical Session",
  },
];

const Services = () => {
  return (
    <SiteLayout>
      <PageHero
        title={<>Incubating <span className="italic text-gradient-gold">potential.</span></>}
        subtitle="Three psychologically-rooted pillars — research, reinvention and restoration — designed to move people from accidental choices into Maximum Output."
        watermark="ECOSYSTEM"
      />

      {/* OVERVIEW */}
      <section className="bg-brand-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Stagger className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <StaggerItem key={s.id}>
                <a href={`#${s.id}`} className={`block p-8 h-full bg-white border border-brand-dark/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 group ${i % 2 === 0 ? "rounded-[40px_14px_40px_14px]" : "rounded-[14px_40px_14px_40px]"}`}>
                  <div className="w-14 h-14 blob-3 bg-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-500">
                    <s.Icon size={24} className="text-brand-gold group-hover:text-brand-dark transition-colors duration-500" weight="duotone" />
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-gold mb-2">{s.eyebrow}</p>
                  <h3 className="font-serif text-2xl text-brand-dark mb-3">{s.title}</h3>
                  <p className="font-sans text-sm text-brand-dark/65 font-light leading-relaxed mb-4">{s.long}.</p>
                  <span className="inline-flex items-center gap-2 text-brand-dark text-sm font-medium border-b border-brand-gold pb-1 group-hover:text-brand-gold">
                    Jump to section <ArrowUpRight size={14} weight="bold" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-32 relative overflow-hidden scroll-mt-24 ${idx % 2 === 0 ? "bg-brand-dark text-brand-cream" : "bg-cream-pattern text-brand-dark"}`}
        >
          {idx % 2 === 0 && (
            <>
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-gold/10 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-leafdeep/40 blob-3 blur-2xl sm:blur-3xl pointer-events-none" />
            </>
          )}
          {idx % 2 !== 0 && (
            <div className="absolute -top-16 -right-16 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-goldlight/30 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
          )}

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className={`grid lg:grid-cols-12 gap-16 items-center ${idx % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <div className="lg:col-span-5">
                <Parallax offset={50}>
                  <div className="relative max-w-md mx-auto frame-multi" style={{ borderRadius: idx % 2 === 0 ? "60% 40% 55% 45% / 50% 60% 40% 55%" : "40% 60% 45% 55% / 60% 50% 60% 40%" }}>
                    <div className="aspect-[4/5] overflow-hidden duotone-gold bg-brand-navy" style={{ borderRadius: "inherit" }}>
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover img-blend" loading="lazy" />
                    </div>
                    <div className={`absolute -bottom-6 px-5 py-3 blob-3 backdrop-blur-sm flex items-center gap-2 ${idx % 2 === 0 ? "-right-6 bg-brand-gold text-brand-dark" : "-left-6 bg-brand-dark text-brand-cream"}`}>
                      <s.Icon size={20} weight="fill" />
                      <span className="font-sans text-xs tracking-wider uppercase">{idx + 1} of 3</span>
                    </div>
                  </div>
                </Parallax>
              </div>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className={`font-sans text-xs tracking-[0.3em] uppercase font-bold mb-4 ${idx % 2 === 0 ? "text-brand-gold" : "text-brand-gold"}`}>{s.eyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-6xl mb-6">{s.title}</h2>
                  <p className={`font-sans text-lg italic mb-6 font-light ${idx % 2 === 0 ? "text-brand-goldlight" : "text-brand-navy"}`}>{s.vision}</p>
                  <p className={`font-sans text-base leading-relaxed mb-10 font-light ${idx % 2 === 0 ? "text-brand-cream/70" : "text-brand-dark/70"}`}>{s.desc}</p>
                </Reveal>

                <Stagger className="grid sm:grid-cols-2 gap-5 mb-10">
                  {s.items.map((it, i) => (
                    <StaggerItem key={i}>
                      <div className={`p-6 h-full transition-all duration-500 hover:-translate-y-1 ${idx % 2 === 0 ? "bg-brand-navy border border-brand-cream/5 hover:border-brand-gold/40" : "bg-white border border-brand-dark/5 hover:border-brand-gold/40"} ${i % 2 === 0 ? "rounded-[28px_10px_28px_10px]" : "rounded-[10px_28px_10px_28px]"}`}>
                        <div className="w-11 h-11 blob-3 bg-brand-gold/15 flex items-center justify-center mb-4">
                          <it.Icon size={20} className="text-brand-gold" weight="duotone" />
                        </div>
                        <h4 className={`font-serif text-lg mb-2 ${idx % 2 === 0 ? "text-brand-goldlight" : "text-brand-dark"}`}>{it.t}</h4>
                        <p className={`font-sans text-sm font-light leading-relaxed ${idx % 2 === 0 ? "text-brand-cream/65" : "text-brand-dark/65"}`}>{it.d}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <Reveal>
                  <Link to="/contact" className={idx % 2 === 0 ? "btn-pea btn-pea-gold" : "btn-pea btn-pea-leaf"}>
                    {s.cta} <ArrowRight weight="bold" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS BAND */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">The Engagement Arc</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl text-brand-dark">From first conversation to <span className="italic">measurable change.</span></h2></Reveal>
          </div>
          <Stagger className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discovery", d: "A confidential conversation to map your current reality and define what success looks like." },
              { n: "02", t: "Diagnosis", d: "Evidence-based assessment using validated psychological instruments — never guesswork." },
              { n: "03", t: "Design", d: "A written, time-boxed intervention plan you can read, approve and refer back to." },
              { n: "04", t: "Delivery", d: "Structured sessions with milestones, accountability and post-engagement follow-through." },
            ].map((p, i) => (
              <StaggerItem key={i}>
                <div className="p-8 h-full bg-white card-pea border border-brand-dark/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 relative">
                  <span className="absolute top-4 right-4 font-serif text-5xl text-brand-gold/15">{p.n}</span>
                  <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold font-bold mb-3">Phase {p.n}</p>
                  <h3 className="font-serif text-xl text-brand-dark mb-3">{p.t}</h3>
                  <p className="font-sans text-sm text-brand-dark/65 font-light leading-relaxed">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIAL CARD */}
      <section className="bg-brand-navy py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-gold/10 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quotes size={56} className="text-brand-gold mx-auto mb-8" weight="fill" />
              <p className="font-serif text-3xl md:text-4xl leading-snug italic mb-10">
                "I came to Triple E with a defended dissertation that nobody believed in — including me. Six weeks later I had a publishable manuscript and the language to defend my own conviction."
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-brand-gold">— TISPAS Postgraduate Client</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Services;
