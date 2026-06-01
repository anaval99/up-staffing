import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import ServicesFooterCTA from "@/components/services/ServicesFooterCTA";

export const metadata: Metadata = {
  title: "Cloud Services — UpVirtual",
  description: "Managed cloud storage, VPS hosting, and infrastructure — fully handled by UpVirtual so your team can focus on work.",
  openGraph: {
    title: "Cloud Services — UpVirtual",
    description: "Managed cloud storage, VPS hosting, and infrastructure — fully handled by UpVirtual so your team can focus on work.",
    url: "https://www.upvirtual.net/cloud-services",
    images: [{ url: "/service2v3.png", width: 1200, height: 630, alt: "UpVirtual Cloud Services" }],
  },
};

interface CloudService {
  number: string;
  label: string;
  title: string;
  body: string;
  features: string[];
  badge?: string;
  reverse: boolean;
  imageSrc: string;
}

const cloudServices: CloudService[] = [
  {
    number: "01",
    label: "Shared Storage Pool",
    title: "One Pool of Storage for Your Entire Team",
    body: "No per-user quotas. Anyone can use as much as they need — up to your plan limit. Scale as your team grows without juggling individual allocations.",
    features: [
      "No per-user quotas",
      "Shared team capacity",
      "Scale storage on demand",
      "Flexible user management",
    ],
    reverse: false,
    imageSrc: "/service1v3.png",
  },
  {
    number: "02",
    label: "Managed Infrastructure",
    title: "We Handle the Servers. You Handle the Work.",
    body: "We provision your VPS, handle OS updates, apply security patches, renew SSL certificates, and keep everything running smoothly — so you never have to think about infrastructure.",
    features: [
      "VPS provisioning",
      "Automated OS & security updates",
      "SSL certificate management",
      "Proactive monitoring",
    ],
    reverse: true,
    imageSrc: "/service2v3.png",
  },
  {
    number: "03",
    label: "Cloud Storage Experience",
    title: "Familiar Interface Your Team Will Actually Use",
    body: "Your team gets a familiar, intuitive cloud storage experience via Pydio Cells or oCIS — no learning curve, just seamless file access and collaboration.",
    features: [
      "Web file manager",
      "Desktop sync client",
      "File sharing & collaboration",
    ],
    reverse: false,
    imageSrc: "/service3v3.png",
  },
  {
    number: "04",
    label: "Website Hosting",
    title: "Personalised Website Hosting, Fully Maintained",
    body: "We host your website on a managed VPS tailored to your needs — fast, secure, and fully maintained so you never have to worry about your site going down.",
    features: [
      "Managed VPS hosting",
      "SSL certificate included",
      "Custom domain setup",
      "Performance & uptime monitoring",
    ],
    badge: "Other Services",
    reverse: true,
    imageSrc: "/service4v3.png",
  },
];

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

export default function CloudServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end pb-16 px-6">
        <Image
          src="/service2v3.png"
          alt="Cloud Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.60)]" />
        <div className="relative z-10 max-w-350 mx-auto w-full">
          <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-[rgba(250,249,247,0.60)] mb-3" data-reveal>
            Cloud Services
          </p>
          <h1
            className="font-cormorant text-[48px] md:text-[64px] font-light text-cream leading-tight max-w-2xl"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Everything Included. Nothing to Manage.
          </h1>
        </div>
      </section>

      {/* Intro strip */}
      <div className="bg-cream border-b border-[rgba(0,0,0,0.08)] px-6 py-10">
        <p className="font-jost font-light text-[15px] leading-[1.85] text-[rgba(26,26,26,0.58)] max-w-2xl mx-auto text-center" data-reveal>
          Every plan includes a fully managed VPS, open-source cloud storage software, and ongoing maintenance — so your team can focus on work, not servers.
        </p>
      </div>

      {/* Service cards */}
      <main>
        {cloudServices.map((service) => (
          <div key={service.number} className="grid md:grid-cols-2 border-b border-[rgba(0,0,0,0.08)]" data-reveal>
            {/* Image half */}
            <div
              className={`relative overflow-hidden min-h-[320px] md:min-h-[480px] ${
                service.reverse ? "bg-panel-alt md:order-last" : "bg-panel"
              }`}
            >
              <Image
                src={service.imageSrc}
                alt={service.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <p className="absolute bottom-6 w-full text-center font-cormorant text-[13px] tracking-[0.2em] uppercase text-[rgba(250,249,247,0.50)] pointer-events-none z-10">
                {service.label}
              </p>
            </div>

            {/* Content half */}
            <div className="bg-cream py-8 px-6 md:py-16 md:px-18 flex flex-col justify-center">
              {service.badge && (
                <span className="font-jost text-[10px] uppercase tracking-[0.18em] text-[rgba(26,26,26,0.45)] border border-black/15 px-3 py-1 w-fit mb-4">
                  {service.badge}
                </span>
              )}
              <p className="font-cormorant text-[64px] font-light leading-none text-[rgba(26,26,26,0.08)] select-none mb-1">
                {service.number}
              </p>
              <p className="font-jost text-[10px] uppercase tracking-[0.2em] text-[rgba(26,26,26,0.35)] mb-5">
                {service.label}
              </p>
              <h2 className="font-cormorant text-[36px] font-normal leading-tight text-ink mb-4">
                {service.title}
              </h2>
              <p className="font-jost font-light text-[14.5px] leading-[1.85] text-[rgba(26,26,26,0.58)] max-w-110 mb-6">
                {service.body}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-jost font-light text-[13.5px] text-[rgba(26,26,26,0.70)] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
        ))}
      </main>

      <ServicesFooterCTA />
    </div>
  );
}
