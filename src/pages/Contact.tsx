import { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { MapPin, EnvelopeSimple, Phone, Buildings, GraduationCap, Clock, ArrowRight, CheckCircle, FacebookLogo, LinkedinLogo, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Inquiry received. The Triple E office will be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="VI. Contact & Office"
        title={<>Begin the <span className="italic text-gradient-gold">conversation.</span></>}
        subtitle="Whether you need research support, career reinvention, family mediation or a media booking — the office of Triple E Counselling Services is open to you."
        watermark="UYO"
      />

      {/* INFO + FORM */}
      <section className="bg-brand-cream py-28 relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-brand-goldlight/30 blob-2 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* INFO */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">The Office</p>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8">From IBB Avenue, <span className="italic">Uyo.</span></h2>
              </Reveal>

              <Stagger className="space-y-5">
                {[
                  { Icon: MapPin, t: "Office of Practice", d: "IBB Avenue, Uyo, Akwa Ibom State, Nigeria." },
                  { Icon: Buildings, t: "Consultancy Wing", d: "Triple E Counselling Services HQ." },
                  { Icon: GraduationCap, t: "Academic Liaison", d: "Topfaith University, Mkpatak." },
                  { Icon: Phone, t: "Phone", d: "+234 (0) 800 000 0000" },
                  { Icon: EnvelopeSimple, t: "Email", d: "contact@tripleecounselling.com" },
                  { Icon: Clock, t: "Office Hours", d: "Mon – Fri • 9:00 AM – 5:00 PM (WAT)" },
                ].map(({ Icon, t, d }, i) => (
                  <StaggerItem key={i}>
                    <div className={`flex gap-5 items-start p-5 bg-white border border-brand-dark/5 hover:border-brand-gold/40 transition-all duration-500 ${i % 2 === 0 ? "rounded-[24px_8px_24px_8px]" : "rounded-[8px_24px_8px_24px]"}`}>
                      <div className="w-12 h-12 blob-3 bg-brand-gold/15 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-brand-gold" weight="duotone" />
                      </div>
                      <div>
                        <p className="font-serif text-lg text-brand-dark">{t}</p>
                        <p className="font-sans text-sm text-brand-dark/65 font-light">{d}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.3}>
                <div className="mt-8 flex gap-3">
                  {[FacebookLogo, TwitterLogo, LinkedinLogo, WhatsappLogo].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 blob-3 bg-brand-dark text-brand-cream flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all duration-500" aria-label="Social link">
                      <Icon size={18} weight="fill" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-brand-dark text-brand-cream p-10 md:p-14 relative overflow-hidden" style={{ borderRadius: "50px 14px 50px 14px" }}>
                  <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-gold/10 blob-2 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-leafdeep/30 blob-3 blur-3xl pointer-events-none" />

                  <div className="relative">
                    <p className="font-sans text-brand-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">Send an Inquiry</p>
                    <h3 className="font-serif text-3xl md:text-4xl mb-2">Tell us where you are.</h3>
                    <p className="font-sans text-brand-cream/60 mb-8 font-light">We respond within two business days.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/60 mb-2 block">Full name</label>
                          <input required type="text" name="name" className="w-full px-5 py-3.5 bg-brand-navy/60 border border-brand-cream/10 rounded-2xl text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/60 mb-2 block">Email</label>
                          <input required type="email" name="email" className="w-full px-5 py-3.5 bg-brand-navy/60 border border-brand-cream/10 rounded-2xl text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none transition-colors" placeholder="you@email.com" />
                        </div>
                      </div>

                      <div>
                        <label className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/60 mb-2 block">I am here for</label>
                        <select name="interest" className="w-full px-5 py-3.5 bg-brand-navy/60 border border-brand-cream/10 rounded-2xl text-brand-cream focus:border-brand-gold focus:outline-none transition-colors">
                          <option className="bg-brand-dark">TISPAS — Research support</option>
                          <option className="bg-brand-dark">The Start Afresh Process</option>
                          <option className="bg-brand-dark">Clinical & Relationship Intervention</option>
                          <option className="bg-brand-dark">Media booking / Speaking engagement</option>
                          <option className="bg-brand-dark">General inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/60 mb-2 block">Your message</label>
                        <textarea required rows={5} name="message" className="w-full px-5 py-3.5 bg-brand-navy/60 border border-brand-cream/10 rounded-2xl text-brand-cream placeholder:text-brand-cream/30 focus:border-brand-gold focus:outline-none transition-colors resize-none" placeholder="Tell us what you'd like to talk about..." />
                      </div>

                      <button type="submit" disabled={submitted} className="btn-pea btn-pea-gold w-full sm:w-auto justify-center disabled:opacity-60">
                        {submitted ? (<><CheckCircle weight="fill" /> Sent. We'll be in touch.</>) : (<>Send Inquiry <ArrowRight weight="bold" /></>)}
                      </button>
                    </form>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MAP CTA */}
      <section className="bg-brand-navy py-24 text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Visit us in <span className="italic text-gradient-gold">Uyo.</span></h2>
            <p className="font-sans text-brand-cream/65 max-w-2xl mx-auto mb-10 font-light text-lg">
              The Triple E Counselling Services office is located at IBB Avenue, Uyo — at the heart of Akwa Ibom State.
              Walk-in consultations are by appointment only.
            </p>
            <a href="https://maps.google.com/?q=IBB+Avenue+Uyo+Akwa+Ibom" target="_blank" rel="noopener noreferrer" className="btn-pea btn-pea-leaf">
              Open in Google Maps <ArrowRight weight="bold" />
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
