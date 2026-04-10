import Image from "next/image";

interface ServiceCardProps {
  number: string;
  label: string;
  title: string;
  body: string;
  checklist: string[];
  platforms?: string[];
  reverse: boolean;
  imageSrc?: string;
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="rgba(26,26,26,0.25)" strokeWidth="1" />
      <polyline
        points="4.5,8 7,10.5 11.5,5"
        stroke="rgba(26,26,26,0.5)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCard({
  number,
  label,
  title,
  body,
  checklist,
  platforms = [],
  reverse,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className="grid md:grid-cols-2 border-b border-[rgba(0,0,0,0.08)]">
      {/* Image half */}
      <div
        className={`relative overflow-hidden min-h-[320px] md:min-h-[480px] ${
          reverse ? "bg-panel-alt md:order-last" : "bg-panel"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
        {/* Ghost label */}
        <p className="absolute bottom-6 w-full text-center font-cormorant text-[13px] tracking-[0.2em] uppercase text-[rgba(26,26,26,0.30)] pointer-events-none z-10">
          {label}
        </p>
      </div>

      {/* Content half */}
      <div className="bg-cream py-8 px-6 md:py-16 md:px-18 flex flex-col justify-center">
        <p className="font-cormorant text-[64px] font-light leading-none text-[rgba(26,26,26,0.08)] select-none mb-1">
          {number}
        </p>
        <p className="font-jost text-[10px] uppercase tracking-[0.2em] text-[rgba(26,26,26,0.35)] mb-5">
          {label}
        </p>
        <h2 className="font-cormorant text-[36px] font-normal leading-tight text-ink mb-4">
          {title}
        </h2>
        <p className="font-jost font-light text-[14.5px] leading-[1.85] text-[rgba(26,26,26,0.58)] max-w-110 mb-6">
          {body}
        </p>

        <ul className="flex flex-col gap-3 mb-6">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="font-jost font-light text-[13.5px] text-[rgba(26,26,26,0.70)] leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {platforms.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {platforms.map((p, i) => (
              <span
                key={i}
                className="font-jost text-[11px] tracking-[0.08em] text-[rgba(26,26,26,0.5)] border border-black/20 px-3 py-1"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        <a
          href="https://cal.com/clint-cena"
          target="_blank"
          rel="noopener noreferrer"
          className="font-jost font-normal text-[12px] uppercase tracking-[0.12em] text-ink border-b border-black w-fit pb-0.5 hover:opacity-60 transition-opacity"
        >
          Book a Free Discovery Call →
        </a>
      </div>
    </div>
  );
}
