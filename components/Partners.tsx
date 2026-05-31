import Image from "next/image";

interface Partner {
  name: string;
  src: string;
  /** Tailwind sizing for the logo box — tuned per logo so small artwork reads larger. */
  box: string;
}

const partners: Partner[] = [
  { name: "Insight", src: "/partners/insight-logo-red.png", box: "h-12 w-36 md:h-14 md:w-48" },
  { name: "uDroppy", src: "/partners/uDroppy.png", box: "h-24 w-32 md:h-32 md:w-44" },
  { name: "Afrentic", src: "/partners/width1600.png", box: "h-28 w-40 md:h-40 md:w-56" },
  { name: "Zipchat AI", src: "/partners/zipchat_ai_logo.png", box: "h-12 w-36 md:h-14 md:w-44" },
];

// Repeat the set enough times that half the track always overflows the viewport,
// so the -50% translate loops seamlessly with no blank gap.
const loop = [...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  return (
    <section className="bg-cream py-16 md:py-20 border-y border-[rgba(0,0,0,0.08)] overflow-hidden">
      <div className="max-w-350 mx-auto px-6 mb-10 md:mb-12">
        <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-[rgba(26,26,26,0.40)] text-center">
          Trusted By Brands We&apos;ve Worked With
        </p>
      </div>

      {/* Seamless infinite marquee */}
      <div className="marquee-group relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-linear-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-linear-to-l from-cream to-transparent" />

        <div className="animate-marquee flex w-max shrink-0 items-center">
          {loop.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className={`${partner.box} relative shrink-0 mx-8 md:mx-12 transition-all duration-500 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105`}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
