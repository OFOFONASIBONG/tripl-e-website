import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Television, Microphone, GraduationCap, Megaphone, Quotes, ArrowRight, ArrowUpRight, Calendar } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import softline from "@/assets/mediasoftline.jpg";
import akbc from "@/assets/mediaakbc.jpg";

const shows = [
  {
    img: softline,
    channel: "ADBN TV",
    show: "Soft Line",
    role: "Resident Counselling Psychologist",
    desc: "A weekly conversation programme on relationships, family dynamics and emotional resilience — co-hosted with a panel of seasoned communicators.",
    topics: ["Marriage & Mediation", "Parenting under Pressure", "Adolescent Mental Health", "Faith & Identity"],
  },
  {
    img: akbc,
    channel: "AKBC TV",
    show: "Heartbeat AM 45",
    role: "Counselling & Career Psychologist",
    desc: "Morning broadcast on Akwa Ibom Broadcasting Corporation — a steady voice on career middlescence, workplace wellness and the psychology of public life.",
    topics: ["Career Stuckness", "Workplace Wellness", "Civic Psychology", "The Start Afresh Process"],
  },
];

const Media = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="A Voice on Air"
        title={<>Answering the call of <span className="italic text-gradient-gold">humanity.</span></>}
        subtitle="Across two flagship television programmes and a continuous mentorship pipeline, Triple E translates clinical insight into everyday courage for families across Akwa Ibom and beyond."
        watermark="ON AIR"
      />

      {/* SHOWS */}
      <section className="bg-brand-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 relative space-y-24">
          {shows.map((s, i) => (
            <Reveal key={s.show}>
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7">
                  <div className="relative group overflow-hidden bg-brand-navy" style={{ borderRadius: i % 2 === 0 ? "60px 14px 60px 14px" : "14px 60px 14px 60px" }}>
                    <img src={s.img} alt={`${s.show} — ${s.channel}`} className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/80 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold text-brand-dark">
                      <span className="w-2 h-2 rounded-full bg-brand-dark animate-pulse" />
                      <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold">{s.channel}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">{s.role}</p>
                  <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">{s.show}</h2>
                  <p className="font-sans text-brand-dark/70 font-light text-lg leading-relaxed mb-8">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.topics.map((t) => (
                      <span key={t} className="px-4 py-2 blob-3 bg-white border border-brand-dark/10 text-brand-dark text-xs font-medium tracking-wider">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-brand-dark/60 text-sm">
                    <Calendar size={18} className="text-brand-gold" weight="duotone" /> Scheduled appearances throughout the year.
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OTHER MEDIA WORK */}
      <section className="bg-brand-dark py-32 text-brand-cream relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-gold/15 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal><p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">Beyond Television</p></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl">A platform that <span className="italic text-gradient-gold">multiplies.</span></h2></Reveal>
          </div>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Microphone, t: "Public Speaking", d: "Keynote engagements at universities, corporate retreats and faith-based gatherings across South-South Nigeria." },
              { Icon: GraduationCap, t: "Lectures & Workshops", d: "Department of Psychology, Topfaith University Mkpatak — plus invited guest lectures at Uniuyo and AKSU." },
              { Icon: Megaphone, t: "Advocacy", d: "Lifting the silence on adolescent depression and championing the Counsellingpreneurship model among practicum students." },
            ].map(({ Icon, t, d }, i) => (
              <StaggerItem key={i}>
                <div className={`p-8 h-full bg-brand-navy border border-brand-cream/5 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1.5 ${i % 2 === 0 ? "rounded-[34px_10px_34px_10px]" : "rounded-[10px_34px_10px_34px]"}`}>
                  <div className="w-14 h-14 blob-3 bg-brand-dark flex items-center justify-center mb-6 border border-brand-gold/20">
                    <Icon size={24} className="text-brand-gold" weight="duotone" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-goldlight mb-3">{t}</h3>
                  <p className="font-sans text-sm text-brand-cream/65 font-light leading-relaxed">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BOOKING */}
      <section className="bg-cream-pattern py-28 relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-brand-sage/20 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto bg-white card-pea p-12 md:p-16 border border-brand-dark/5 shadow-xl text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 blob-1 bg-brand-gold/10" />
            <Reveal>
              <Television size={48} className="text-brand-gold mx-auto mb-6" weight="duotone" />
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6">Inviting Mr. Eshiet to your platform?</h2>
              <p className="font-sans text-brand-dark/70 max-w-xl mx-auto font-light text-lg mb-10">
                For television features, panel invitations, keynote requests and mentorship engagements — please reach out through the consultancy office.
              </p>
              <Link to="/contact" className="btn-pea btn-pea-gold">Send a Booking Inquiry <ArrowRight weight="bold" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Media;
