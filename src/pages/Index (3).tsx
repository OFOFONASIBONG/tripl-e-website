import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Quotes, ShieldCheck, Sparkle, Compass, Flask, Heartbeat, Television, Student, Users, GraduationCap, MapPin, Clock, Calendar } from "@phosphor-icons/react";
import SiteLayout from "@/components/site/SiteLayout";
import { Reveal, Stagger, StaggerItem, Parallax } from "@/components/site/Reveal";
import heroTree from "@/assets/herotree.jpg";
import softline from "@/assets/mediasoftline.jpg";
import akbc from "@/assets/mediaakbc.jpg";
import logo from "@/assets/tripleelogo.jpg";
import { blogPosts } from "@/data/blog-posts";

const Index = () => {
  return (
    <SiteLayout>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[100svh] flex items-center bg-aurora text-brand-cream overflow-hidden pt-32 pb-20">
        {/* Multi-layered backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-brand-gold/10 blob-2 blur-[60px] sm:blur-[100px] lg:blur-[120px]" />
          <div className="absolute bottom-0 -left-16 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-leafdeep/40 blob-3 blur-[50px] sm:blur-[80px] lg:blur-[100px] animate-blob" />
          <div className="absolute inset-0 bg-noise opacity-[0.18] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] mb-8 mt-8">
                  Move beyond <br />
                  <span className="relative italic text-gradient-gold">
                    Emotional Stuckness.
                    <svg className="absolute -bottom-3 left-0 w-full h-4 text-brand-gold/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0 10 Q 50 22 100 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-sans text-brand-cream/70 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                  Triple E Counselling Services is more than a consultancy — it is an <strong className="text-brand-cream font-medium">incubator for human potential</strong>. We believe every individual is a <em className="text-brand-goldlight">"Gift to Humanity."</em>
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-6 items-center">
                  <Link to="/services" className="btn-pea btn-pea-gold group">
                    Explore the Ecosystem
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" weight="bold" />
                  </Link>
                  <Link to="/contact" className="btn-pea btn-pea-ghost">
                    Begin Consultation
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hero image — multi-layered organic frames */}
            <div className="lg:col-span-5 relative h-[520px] lg:h-[640px] flex justify-center items-center">
              <div className="absolute inset-6 blob-2 border border-brand-gold/20 animate-blob" />
              <div className="absolute inset-12 blob-3 border border-brand-cream/5 animate-blob" style={{ animationDelay: "-3s" }} />
              <Parallax offset={50} className="relative w-full max-w-[420px] h-[520px]">
                <div className="relative w-full h-full blob-1 overflow-hidden duotone-gold shadow-2xl shadow-brand-gold/20 bg-brand-navy group">
                  <img src={logo} alt="Triple E Logo"
                    className="w-full h-full object-cover img-blend"
                    width={1080} height={1920} loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 blob-4 bg-brand-gold/90 backdrop-blur-sm flex flex-col items-center justify-center text-brand-dark animate-float">
                  <span className="font-serif text-3xl font-bold leading-none">7+</span>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase mt-1">Years</span>
                </div>
                <div className="absolute -top-4 -right-4 px-4 py-3 blob-3 bg-brand-leafdeep text-brand-cream backdrop-blur-sm flex items-center gap-2">
                  <Sparkle size={18} weight="fill" className="text-brand-leaf" />
                  <span className="font-sans text-xs tracking-wider uppercase">Since 2019</span>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ETHOS STRIP ===================== */}
      <section className="bg-brand-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Stagger className="grid md:grid-cols-3 gap-8">
            {[
              { num: "I.", t: "Manifesto", d: "An incubator built on Character & Competence — every person, a Gift to Humanity." },
              { num: "II.", t: "The Founder", d: "Edohoeket Emmanuel Eshiet — Counselling & Career Psychologist; the Herald of Uyo." },
              { num: "III.", t: "Ecosystem", d: "TISPAS, the Start Afresh Process, and Clinical & Relationship Interventions." },
            ].map((it, i) => (
              <StaggerItem key={i}>
                <div className="card-pea p-8 h-full border border-brand-dark/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5">
                  <div className="font-serif text-brand-gold text-4xl mb-4">{it.num}</div>
                  <h3 className="font-serif text-2xl text-brand-dark mb-3">{it.t}</h3>
                  <p className="font-sans text-brand-dark/70 font-light leading-relaxed">{it.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== EBENEZER CODE ===================== */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="absolute -top-16 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-sage/20 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-6 mt-4">"The Ebenezer Code"</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-sans text-brand-dark/70 text-lg font-light italic">
                Based on Habakkuk 2:2-3 — we write the vision plainly, knowing that while it may seem to tarry, it will surely speak at the appointed time.
              </p>
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
                  <h3 className="font-serif text-3xl text-brand-dark mb-6">Character</h3>
                  <ul className="space-y-3 font-sans text-brand-dark/80 text-lg font-light">
                    {["Integrity that holds when no one is watching", "Conviction that anchors decisions in purpose", "Moral rectitude as the foundation of trust"].map((x, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-3 rounded-full bg-brand-gold shrink-0" />{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-brand-dark p-12 card-pea-alt card-pea text-brand-cream border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 relative overflow-hidden group h-full">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 blob-2 bg-brand-gold/10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="w-16 h-16 blob-3 bg-brand-gold flex items-center justify-center mb-8">
                    <Sparkle size={28} className="text-brand-dark" weight="fill" />
                  </div>
                  <p className="font-sans text-xs text-brand-goldlight font-bold tracking-[0.3em] uppercase mb-3">The External Result</p>
                  <h3 className="font-serif text-3xl mb-6">Competence</h3>
                  <ul className="space-y-3 font-sans text-brand-cream/80 text-lg font-light">
                    {["Expertise honed through academic rigor", "Capacity to deliver measurable transformation", "AI-literate proficiency for the new economy"].map((x, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-3 rounded-full bg-brand-gold shrink-0" />{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <Link to="/philosophy" className="btn-pea btn-pea-leaf">
                Read the Full Code <ArrowRight weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ECOSYSTEM PREVIEW ===================== */}
      <section className="bg-brand-navy py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[15vw] font-serif font-bold text-outline-cream opacity-[0.04] whitespace-nowrap pointer-events-none -translate-y-1/4 leading-none">ECOSYSTEM</div>
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-brand-leafdeep/40 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-6xl mb-6 mt-4">Incubating Potential.</h2></Reveal>
            <Reveal delay={0.2}><p className="font-sans text-brand-cream/60 text-lg font-light">Three psychologically-rooted pillars designed for profound personal and professional transformation.</p></Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Flask, eyebrow: "Research Powerhouse", title: "TISPAS", desc: "Tertiary Institution Students & Professionals Assistance Services. Multiplying knowledge dividends through superior research outputs and AI integration.", to: "/services#tispas", radius: "rounded-[40px_14px_40px_14px]" },
              { Icon: Compass, eyebrow: "Navigating Middlescence", title: "Start Afresh", desc: "A psychological reinvention process for professionals in their 40s and 50s — transforming mid-career honesty into a fresh, fulfilling life course.", to: "/services#start-afresh", radius: "rounded-[14px_40px_14px_40px] mt-0 md:mt-12" },
              { Icon: Heartbeat, eyebrow: "Healing The Unit", title: "Clinical & Relationship", desc: "Emotional resilience programs and the Relationship Matrix — building healthy marriages, families and lifting the silence on child & teen depression.", to: "/services#clinical", radius: "rounded-[40px_14px_40px_14px]" },
            ].map(({ Icon, eyebrow, title, desc, to, radius }, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <Link to={to} className={`group relative bg-brand-dark p-10 ${radius} border border-brand-cream/5 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 block h-full overflow-hidden`}>
                  <div className="absolute -top-20 -right-20 w-48 h-48 blob-1 bg-brand-gold/0 group-hover:bg-brand-gold/10 blur-2xl transition-all duration-700" />
                  <div className="w-16 h-16 blob-3 bg-brand-navy flex items-center justify-center mb-8 border border-brand-gold/20 relative">
                    <Icon size={26} className="text-brand-gold" weight="duotone" />
                  </div>
                  <h3 className="font-sans text-[11px] tracking-[0.25em] text-brand-cream/50 mb-2 uppercase">{eyebrow}</h3>
                  <h4 className="font-serif text-3xl mb-4 text-brand-goldlight">{title}</h4>
                  <p className="font-sans text-sm text-brand-cream/65 leading-relaxed mb-8 font-light">{desc}</p>
                  <span className="inline-flex items-center gap-2 text-brand-gold text-sm font-medium tracking-wide">
                    Learn more <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" weight="bold" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FOUNDER STRIP ===================== */}
      <section className="py-32 bg-cream-pattern relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-goldlight/30 blob-2 blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative w-full max-w-md mx-auto frame-multi" style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 55%" }}>
                  <div className="aspect-[4/5] overflow-hidden duotone-gold bg-brand-navy" style={{ borderRadius: "inherit" }}>
                    <img src={softline} alt="Mr. Edohoeket Eshiet on Soft Line, ADBN TV" className="w-full h-full object-cover img-blend" loading="lazy" width={1600} height={2000} />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-3 mt-6">Mr. Edohoeket<br/>Emmanuel <span className="italic text-gradient-gold">Eshiet</span></h2>
                <span className="text-brand-dark/60 text-lg font-sans font-light italic">{"{ Ph.D. in-view }"} • The Herald of Uyo</span>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-sans text-brand-dark/75 text-lg leading-relaxed mt-8 mb-10 font-light border-l-4 border-brand-gold pl-6">
                  A multifaceted leader whose journey represents a <strong>"Bold Step"</strong> of faith. After over a decade of meritorious service in the Federal Civil Service, he transitioned in 2019 to build a self-sustaining platform for psychological and academic excellence.
                </p>
              </Reveal>
              <Stagger className="grid sm:grid-cols-2 gap-5">
                {[
                  { Icon: Student, t: "Academic Anchor", d: "Lecturer of Psychology, Topfaith University, Mkpatak." },
                  { Icon: Television, t: "Media Presence", d: "Soft Line (ADBN TV) & Heartbeat AM 45 (AKBC TV)." },
                  { Icon: Users, t: "Mentorship", d: "Lead Supervisor, Uniuyo Practicum — Counsellingpreneurship model." },
                  { Icon: MapPin, t: "Geographic Hub", d: "IBB Avenue, Uyo, Akwa Ibom State." },
                ].map(({ Icon, t, d }, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-white/80 backdrop-blur p-6 card-pea border border-brand-dark/5 hover:border-brand-gold/40 transition-all duration-500 h-full">
                      <Icon size={28} className="text-brand-gold mb-4" weight="duotone" />
                      <h4 className="font-serif text-lg text-brand-dark mb-2">{t}</h4>
                      <p className="font-sans text-sm text-brand-dark/65 font-light leading-relaxed">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.4}>
                <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-brand-dark border-b-2 border-brand-gold pb-1 font-medium hover:text-brand-gold transition-colors">
                  Read his full story <ArrowUpRight size={18} weight="bold" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MEDIA STRIP ===================== */}
      <section className="bg-brand-dark py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-6xl mt-4">Answering the call of <span className="italic text-gradient-gold">humanity.</span></h2></Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <p className="font-sans text-brand-cream/65 font-light text-lg leading-relaxed">
                  Through broadcast media and student mentorship, Triple E maintains a consistent expert voice — translating clinical insight into everyday courage for families across Akwa Ibom and beyond.
                </p>
              </Reveal>
            </div>
          </div>
          <Stagger className="grid md:grid-cols-2 gap-8">
            {[
              { img: softline, channel: "ADBN TV", show: "Soft Line", role: "Resident Counselling Psychologist" },
              { img: akbc, channel: "AKBC TV", show: "Heartbeat AM 45", role: "Counselling & Career Psychologist" },
            ].map((m, i) => (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden bg-brand-navy" style={{ borderRadius: i === 0 ? "40px 14px 40px 14px" : "14px 40px 14px 40px" }}>
                  <img src={m.img} alt={`${m.show} on ${m.channel}`} className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-dark text-[10px] font-bold tracking-[0.2em] uppercase mb-3">{m.channel}</span>
                    <h3 className="font-serif text-3xl mb-1">{m.show}</h3>
                    <p className="font-sans text-brand-cream/70 text-sm">{m.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <Link to="/media" className="btn-pea btn-pea-ghost">View Media Presence <ArrowRight weight="bold" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== 2026 MANDATE TEASER ===================== */}
      <section className="py-32 bg-cream-pattern relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto bg-brand-dark text-brand-cream p-12 md:p-20 relative overflow-hidden" style={{ borderRadius: "60px 14px 60px 14px" }}>
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-gold/15 blob-2 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-leafdeep/40 blob-3 blur-3xl pointer-events-none" />
            <div className="absolute top-8 right-8 font-serif text-[120px] md:text-[180px] text-brand-gold/10 leading-none select-none pointer-events-none">2026</div>

            <div className="relative">
              <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">V. The 2026 Mandate</p></Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-5xl md:text-7xl mb-6">"Declutter <br/><span className="italic text-gradient-gold">to be Free."</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-sans text-brand-cream/70 text-lg max-w-xl mb-8 font-light leading-relaxed">
                  As we celebrate 7 years of incorporation and 6 years of unbroken operations, the mandate for 2026 is clear: <span className="text-brand-gold font-semibold">PUSH MORE.</span> Remove what does not serve the vision, multiply what does.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link to="/mandate" className="btn-pea btn-pea-gold">
                  Read the Strategic Mandate <ArrowRight weight="bold" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BLOG POSTS TEASERS ===================== */}
      <section className="bg-brand-navy py-24 text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[12vw] font-serif font-bold text-outline-cream opacity-[0.03] whitespace-nowrap pointer-events-none -translate-y-1/4 leading-none">INSIGHTS</div>
        <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-brand-gold/8 blob-3 blur-[40px] sm:blur-[60px] lg:blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">VI. Latest Insights</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl mb-5">Perspectives on <span className="italic text-gradient-gold">Human Potential.</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-sans text-brand-cream/60 text-lg font-light">
                Thought leadership on psychology, research, career reinvention, and family healing.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.id} delay={index * 0.12}>
                <article className="group cursor-pointer" onClick={() => window.location.href = `/ecosystem?post=${post.slug}`}>
                  <div 
                    className={`
                      relative overflow-hidden bg-brand-navy-2 rounded-[36px_14px_36px_14px] 
                      transition-all duration-700 hover:rounded-[20px_20px_20px_20px]
                      border border-brand-cream/5 hover:border-brand-gold/40
                      ${index % 2 === 0 ? 'rounded-[36px_14px_36px_14px]' : 'rounded-[14px_36px_14px_36px]'}
                    `}
                  >
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img 
                        src={post.heroImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-2 via-transparent to-transparent" />
                      
                      {/* Layered images */}
                      {post.images.slice(0, 2).map((img, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className={`
                            absolute transition-all duration-700 ease-out hidden md:block
                            ${imgIndex === 0 
                              ? 'bottom-2 right-2 w-20 h-14 opacity-60 group-hover:bottom-4 group-hover:right-4' 
                              : 'bottom-5 right-5 w-16 h-12 opacity-40 group-hover:bottom-8 group-hover:right-8'
                            }
                          `}
                          style={{ 
                            zIndex: imgIndex + 1,
                            borderRadius: imgIndex === 0 ? '14px 5px 14px 5px' : '8px 16px 8px 16px'
                          }}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                      
                      {/* Category */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 bg-brand-gold/90 backdrop-blur-sm rounded-full text-brand-dark text-[9px] font-sans font-bold tracking-wider uppercase">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-brand-cream/45 text-[10px] font-sans mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} weight="duotone" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} weight="duotone" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-lg text-brand-cream mb-2 group-hover:text-brand-goldlight transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="font-sans text-brand-cream/45 text-xs leading-relaxed mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-1 text-brand-gold text-xs font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} weight="bold" />
                      </span>
                    </div>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-gold/8 blur-[40px]" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="text-center">
              <Link to="/ecosystem" className="btn-pea btn-pea-gold">
                Explore All Insights <ArrowRight weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CLOSING QUOTE ===================== */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Quotes size={56} className="text-brand-gold mx-auto mb-8" weight="fill" />
              <p className="font-serif text-3xl md:text-5xl text-brand-dark leading-snug italic mb-8">
                "God is our Ebenezer — the Stone of Help who has helped us so far. We go again, for our dreaming shall not cease."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 blob-1 overflow-hidden bg-brand-dark">
                  <img src={logo} alt="Triple E" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="text-left">
                  <p className="font-serif text-brand-dark text-lg">Mr. E. E. Eshiet</p>
                  <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold">Founder, Triple E</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
