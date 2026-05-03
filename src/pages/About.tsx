import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem, Parallax } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { Student, Television, Users, MapPin, BriefcaseMetal, Quotes, Star, ArrowRight, GraduationCap, Buildings, FlowerLotus } from "@phosphor-icons/react";
import softline from "@/assets/mediasoftline.jpg";
import akbc from "@/assets/mediaakbc.jpg";

const milestones = [
  { year: "Pre-2019", title: "Federal Civil Service", desc: "Over a decade of meritorious public service — disciplined, structured, faithful." },
  { year: "2019", title: "The Bold Step", desc: "Transitioned out of public service to incorporate Triple E Counselling Services. A leap of faith into self-sustaining excellence." },
  { year: "2020", title: "Counsellingpreneurship Model", desc: "Pioneered a model marrying counselling psychology with entrepreneurial sustainability — mentoring Uniuyo practicum students." },
  { year: "2022", title: "Academic Anchor", desc: "Joined Topfaith University, Mkpatak as Lecturer of Psychology — formalising the bridge between practice and academy." },
  { year: "2023", title: "Media Voice", desc: "Became a consistent expert on AKBC TV's Heartbeat AM 45 and ADBN TV's Soft Line." },
  { year: "2025", title: "7 Years Strong", desc: "Celebrating 7 years of incorporation and 6 years of unbroken operations." },
  { year: "2026", title: "The Push More Mandate", desc: "Declutter to be Free — multiplying dividends for the next generation." },
];

const About = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="II. The Founder"
        title={<>The <span className="italic text-gradient-gold">Herald</span> of Uyo</>}
        subtitle="Mr. Edohoeket Emmanuel Eshiet { Ph.D. in-view } — Counselling & Career Psychologist, Psychology Lecturer, Media Consultant, and CEO of an incubator for human potential."
        watermark="ESHIET"
      />

      {/* PORTRAIT + IDENTITY */}
      <section className="bg-cream-pattern py-32 relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-brand-goldlight/30 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Parallax offset={40}>
                <div className="relative max-w-md mx-auto frame-multi" style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 55%" }}>
                  <div className="aspect-[4/5] overflow-hidden duotone-gold bg-brand-navy" style={{ borderRadius: "inherit" }}>
                    <img src={softline} alt="Mr. Edohoeket Eshiet on Soft Line" className="w-full h-full object-cover img-blend" loading="lazy" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 px-6 py-4 blob-3 bg-brand-dark text-brand-cream backdrop-blur-sm">
                    <p className="font-serif text-2xl text-brand-gold">10+ yrs</p>
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-cream/70">Civil Service</p>
                  </div>
                </div>
              </Parallax>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">A Multifaceted Leader</p>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">A "Bold Step" of Faith.</h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-sans text-brand-dark/75 text-lg leading-relaxed mb-6 font-light">
                  Mr. Edohoeket Emmanuel Eshiet's journey is the story of a man who refused to settle for the comfortable. After more than a decade of meritorious service in the Federal Civil Service, he turned the page in 2019 — not in retreat, but in obedience to a clearer call.
                </p>
                <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-6 font-light">
                  That call was to build a self-sustaining platform where psychological insight, academic rigor and divine alignment converge to lift individuals out of stuckness and into purpose. The result is Triple E Counselling Services — a consultancy, a research powerhouse, a classroom and a pulpit, all at once.
                </p>
                <p className="font-sans text-brand-dark/70 text-base leading-relaxed font-light">
                  Today he serves as a <strong className="text-brand-dark">Counselling & Career Psychologist</strong>, a <strong className="text-brand-dark">Psychology Lecturer</strong>, a <strong className="text-brand-dark">Media Consultant</strong> and a <strong className="text-brand-dark">CEO</strong> — all from the brand headquarters at IBB Avenue, Uyo.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-brand-dark py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-leafdeep/30 blob-3 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">Four Hats, One Calling</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl">A leader for the <span className="italic text-gradient-gold">whole person.</span></h2></Reveal>
          </div>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Student, eyebrow: "Academic Anchor", title: "Psychology Lecturer", desc: "Lecturer of Psychology at Topfaith University, Mkpatak. Shaping the next generation of African psychological thinkers." },
              { Icon: Users, eyebrow: "Mentorship", title: "Practicum Supervisor", desc: "Lead Supervisor for Uniuyo Practicum Students. Pioneer of the Counsellingpreneurship model." },
              { Icon: Television, eyebrow: "Media Voice", title: "Broadcast Consultant", desc: "Resident expert on Soft Line (ADBN TV) and Heartbeat AM 45 (AKBC TV). Translating science into daily wisdom." },
              { Icon: BriefcaseMetal, eyebrow: "Founder", title: "Chief Executive", desc: "CEO of Triple E Counselling Services. 7 years of incorporation, 6 years of unbroken operations." },
            ].map(({ Icon, eyebrow, title, desc }, i) => (
              <StaggerItem key={i}>
                <div className={`p-8 h-full bg-brand-navy border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 ${i % 2 === 0 ? "rounded-[40px_14px_40px_14px]" : "rounded-[14px_40px_14px_40px]"}`}>
                  <div className="w-14 h-14 blob-3 bg-brand-dark flex items-center justify-center mb-6 border border-brand-gold/20">
                    <Icon size={24} className="text-brand-gold" weight="duotone" />
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.25em] text-brand-cream/50 uppercase mb-2">{eyebrow}</p>
                  <h3 className="font-serif text-xl text-brand-goldlight mb-3">{title}</h3>
                  <p className="font-sans text-sm text-brand-cream/65 font-light leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">A Journey of Conviction</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl text-brand-dark">Milestones that shaped <span className="italic">the Herald.</span></h2></Reveal>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 -translate-x-1/2" />
            <Stagger className="space-y-12">
              {milestones.map((m, i) => (
                <StaggerItem key={i}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <span className="inline-block px-4 py-1 blob-3 bg-brand-gold text-brand-dark text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{m.year}</span>
                      <h3 className="font-serif text-2xl text-brand-dark mb-2">{m.title}</h3>
                      <p className="font-sans text-brand-dark/65 font-light leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="hidden md:block" />
                    <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-5 h-5 blob-1 bg-brand-gold ring-4 ring-brand-cream" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-brand-navy py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-gold/10 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quotes size={56} className="text-brand-gold mx-auto mb-8" weight="fill" />
              <p className="font-serif text-3xl md:text-5xl leading-snug italic mb-10">
                "Every individual is a Gift to Humanity. My calling is simply to help that gift unwrap itself — through character, through competence, through divine alignment."
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.3em] text-brand-gold">— Mr. E. E. Eshiet</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-pattern py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8">Ready to take your own bold step?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-pea btn-pea-gold">Book a Consultation <ArrowRight weight="bold" /></Link>
              <Link to="/services" className="btn-pea btn-pea-leaf">Explore Services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
