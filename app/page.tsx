import Image from "next/image";
import Nav from "@/components/Nav";
import Partners from "@/components/Partners";
import ServicesFooterCTA from "@/components/services/ServicesFooterCTA";

const services = [
  {
    label: "Web Design",
    body: "Stunning, strategic websites that build trust and convert visitors into clients.",
    imageSrc: "/web-design.jpg",
  },
  {
    label: "Funnel Design",
    body: "Lead generation funnels and automations that handle the heavy lifting for you.",
    imageSrc: "/funnel-design.jpg",
  },
  {
    label: "Social Media",
    body: "Brand-aligned content that positions you as the expert in your space.",
    imageSrc: "/social-media.jpg",
  },
  {
    label: "Brand Identity",
    body: "Strategic, cohesive branding that reflects your vision and commands attention.",
    imageSrc: "/brand-identity.jpg",
  },
  {
    label: "Virtual Assistance",
    body: "Reliable behind-the-scenes support that understands your systems and goals.",
    imageSrc: "/virtual-assist.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[560px] flex items-center px-6">
        <Image
          src="/hero-bg.jpg"
          alt="UpVirtual"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.55)]" />
        <div className="relative z-10 max-w-350 mx-auto w-full">
          <p
            className="font-jost text-[11px] uppercase tracking-[0.30em] text-[rgba(250,249,247,0.60)] mb-5"
            data-reveal
          >
            UpVirtual — Digital Agency
          </p>
          <h1
            className="font-cormorant text-[52px] md:text-[76px] font-light text-cream leading-[1.05] max-w-3xl mb-8"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Elevate Your Brand. Scale Your Business.
          </h1>
          <div
            className="flex flex-wrap gap-4"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            <a
              href="/services"
              className="font-jost font-normal text-[12px] uppercase tracking-[0.14em] text-cream border border-white/40 px-8 py-4 hover:bg-cream hover:text-ink transition-all inline-block"
            >
              View Services
            </a>
            <a
              href="https://cal.com/clint-cena"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost font-normal text-[12px] uppercase tracking-[0.14em] text-ink bg-cream px-8 py-4 hover:bg-transparent hover:text-cream border border-cream transition-all inline-block"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <Partners />

      {/* Services overview */}
      <section className="py-20 px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14" data-reveal>
            <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-[rgba(26,26,26,0.40)] mb-3">
              What We Do
            </p>
            <h2 className="font-cormorant text-[40px] md:text-[52px] font-light text-ink leading-tight max-w-xl">
              Services Built Around Your Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.08)]">
            {services.map((s, i) => (
              <a
                key={s.label}
                href="/services"
                className="group relative bg-cream overflow-hidden block"
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.imageSrc}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[rgba(26,26,26,0.20)] group-hover:bg-[rgba(26,26,26,0.35)] transition-all duration-300" />
                </div>
                <div className="p-6 border-t border-[rgba(0,0,0,0.08)]">
                  <p className="font-jost text-[10px] uppercase tracking-[0.20em] text-[rgba(26,26,26,0.40)] mb-2">
                    {s.label}
                  </p>
                  <p className="font-jost font-light text-[13.5px] leading-relaxed text-[rgba(26,26,26,0.65)]">
                    {s.body}
                  </p>
                  <p className="font-jost text-[11px] uppercase tracking-[0.12em] text-ink mt-4 group-hover:opacity-60 transition-opacity">
                    Learn More →
                  </p>
                </div>
              </a>
            ))}

            {/* Cloud services tile */}
            <a
              href="/cloud-services"
              className="group relative bg-ink overflow-hidden block"
              data-reveal
              style={{ "--reveal-delay": `${services.length * 90}ms` } as React.CSSProperties}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/service2v3.png"
                  alt="Cloud Services"
                  fill
                  className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 border-t border-white/10">
                <p className="font-jost text-[10px] uppercase tracking-[0.20em] text-[rgba(250,249,247,0.45)] mb-2">
                  Cloud Services
                </p>
                <p className="font-jost font-light text-[13.5px] leading-relaxed text-[rgba(250,249,247,0.70)]">
                  Managed cloud storage, VPS hosting, and infrastructure — fully handled by us.
                </p>
                <p className="font-jost text-[11px] uppercase tracking-[0.12em] text-cream mt-4 group-hover:opacity-60 transition-opacity">
                  Explore →
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14 text-center" data-reveal>
            <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-[rgba(250,249,247,0.40)] mb-3">
              How It Works
            </p>
            <h2 className="font-cormorant text-[40px] md:text-[52px] font-light text-cream leading-tight">
              Simple. Strategic. Done.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery Call", body: "We learn about your business, goals, and what's holding you back." },
              { step: "02", title: "Strategy & Design", body: "We build a tailored plan and create assets that match your brand." },
              { step: "03", title: "Launch & Support", body: "We deliver, launch, and stay available as your business grows." },
            ].map((item, i) => (
              <div
                key={item.step}
                className="text-center"
                data-reveal
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <p className="font-cormorant text-[56px] font-light text-[rgba(250,249,247,0.08)] leading-none mb-2">
                  {item.step}
                </p>
                <h3 className="font-cormorant text-[22px] text-cream mb-3">{item.title}</h3>
                <p className="font-jost font-light text-[13px] leading-relaxed text-[rgba(250,249,247,0.50)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-panel border-t border-[#D4D0C8] py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="max-w-2xl mb-10" data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-5">
              Who We Are
            </p>
            <h2 className="font-cormorant text-[40px] md:text-[56px] font-light text-[#1A1A1A] leading-tight mb-8">
              We&apos;re Not Another Agency. We&apos;re Your Growth Team.
            </h2>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.7] text-[#2D2D2D] mb-6">
              UpVirtual was built for businesses that are done paying for pretty websites that don&apos;t convert. We&apos;re a lean, global digital agency that combines design, automation, and strategy — so every dollar you spend actually moves the needle.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.7] text-[#2D2D2D]">
              We work with coaches, consultants, and service businesses worldwide. No fluff. No 90-day &ldquo;strategies&rdquo; that go nowhere. Just sharp execution, real systems, and a team that treats your business like our own.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-[#D4D0C8] border border-[#D4D0C8] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] mb-12" data-reveal>
            {[
              { number: "Global", label: "Clients Worldwide" },
              { number: "24hr", label: "Average Response Time" },
              { number: "100%", label: "Custom — No Templates" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-10 px-4">
                <p className="font-cormorant text-[40px] md:text-[56px] font-light text-[#1A1A1A] leading-none mb-2">
                  {stat.number}
                </p>
                <p className="font-jost text-[11px] md:text-[13px] uppercase tracking-[0.12em] text-[#5A5A5A]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="font-jost font-semibold text-[13px] uppercase tracking-[0.12em] text-[#F5F5F0] bg-[#1A1A1A] px-8 py-4 rounded-lg hover:bg-[#2D2D2D] transition-colors inline-block"
            data-reveal
          >
            Meet the Team →
          </a>
        </div>
      </section>

      <ServicesFooterCTA />
    </div>
  );
}
