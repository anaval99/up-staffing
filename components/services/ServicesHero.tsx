import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden min-h-140 md:min-h-160 flex items-center justify-center border-b border-[rgba(0,0,0,0.06)]">
      {/* Background image */}
      <Image
        src="/services-hero.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay — darker so text reads clearly */}
      <div className="absolute inset-0 bg-[rgba(26,26,26,0.55)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-24 md:py-36">
        <p className="font-jost text-[11px] tracking-[0.18em] uppercase text-[rgba(250,249,247,0.65)] mb-6" data-reveal>
          Our Services
        </p>
        <h1
          className="font-cormorant text-[48px] md:text-[58px] font-light text-cream leading-tight mb-6"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          Browse <em>Our</em> Services.
        </h1>
        <p
          className="max-w-xl mx-auto font-jost font-light text-[15px] text-[rgba(250,249,247,0.80)] leading-relaxed"
          data-reveal
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          Strategic design and digital support for businesses ready to grow —
          from websites and funnels to brand identity and beyond.
        </p>
      </div>
    </section>
  );
}
