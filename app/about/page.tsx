import Nav from "@/components/Nav";

const differentiators = [
  {
    number: "01",
    title: "Custom Everything",
    body: "Every website, funnel, and brand asset is built from scratch for your business. We don't reskin templates and call it \"custom design.\" If it looks generic, we failed — and we don't fail.",
  },
  {
    number: "02",
    title: "Global Team, Local Understanding",
    body: "We serve clients across multiple markets and timezones. We understand that different audiences need different approaches — cultural tone, timezone coverage, compliance requirements — and we build for your audience, not ours.",
  },
  {
    number: "03",
    title: "Systems, Not Just Designs",
    body: "A pretty website without a CRM, email sequences, and booking system is just a digital brochure. We build the full machine — so leads come in, get nurtured, and convert without you manually chasing every one.",
  },
  {
    number: "04",
    title: "Speed Without Shortcuts",
    body: "Most agencies take 8–12 weeks to deliver a website. We move in 2–3 weeks. Not because we cut corners — because we don't waste time in endless revision loops and committee meetings.",
  },
];

const teamMembers = [
  {
    name: "Clint Cena",
    role: "Founder & Operations Manager",
    bio: "Clint founded UpVirtual to build the kind of agency he wished existed when he was on the client side — running operations, sales, and business development for fast-moving teams. He brings hands-on experience across customer success, project management, and the automation systems (CRM pipelines, GoHighLevel, email sequences, SEO) that turn marketing spend into booked calls. Based in Metro Cebu, he keeps the team lean, the communication direct, and the deliverables measurable.",
    linkedin: "https://www.linkedin.com/in/clint-cena/",
  },
  {
    name: "Arnold Gerome Naval",
    role: "CTO",
    bio: "Arnold sets the technical direction at UpVirtual with 8+ years as a fullstack and AI engineer — including Angular and React consulting work and ongoing software development at raisin Software. He shapes the architecture, tooling, and AI workflows the team builds on, and ships his own products on the side (OnePasteChat.com, experimental game prototypes) to keep the toolbox sharp. Based in Boyle, Alberta, Canada, he makes sure what we deliver is fast, scalable, and built to hold up in production.",
    linkedin: "https://www.linkedin.com/in/arnold-gerome-naval-85332311a/",
  },
  {
    name: "Cedric Tomanda",
    role: "Lead Engineer",
    bio: "Cedric is UpVirtual's lead engineer, shipping custom web builds for agencies and BPO clients across multiple industries — including Digital Solutions work at Caliber Business Resource BPO and contract builds for Executives Events and JCI Boholana Kisses. His toolkit covers what most agencies skip: clean code, SEO foundations, and CRM administration that ties the site back to revenue. Based in Tacloban, Philippines, with a BS in Information Technology from Leyte Normal University, he turns specs into production code on tight cycles.",
    linkedin: "https://www.linkedin.com/in/cedric-tomanda-8335902a7/",
  },
];

const values = [
  {
    title: "Radical Transparency",
    body: "You'll always know where your project stands. No surprises, no vague updates.",
  },
  {
    title: "Ship Over Perfect",
    body: "Done and live beats \"almost perfect\" sitting in a Google Doc. We iterate fast and improve in real-time.",
  },
  {
    title: "Ownership Mentality",
    body: "We don't treat your project like a ticket in a queue. Your business is our business until it's thriving.",
  },
  {
    title: "Direct Communication",
    body: "We say what we mean. If something won't work, we'll tell you — and offer a better solution.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-[#1A1A1A] py-28 md:py-36 px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex items-center gap-3 mb-6" data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B]">
              About UpVirtual
            </p>
            <div className="w-10 h-[2px] bg-[#B8A88A]" />
          </div>
          <h1
            className="font-cormorant text-[40px] md:text-[64px] font-light text-[#F5F5F0] leading-[1.05] max-w-3xl mb-8"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Built Different. On Purpose.
          </h1>
          <p
            className="font-jost font-light text-[16px] md:text-[20px] leading-[1.7] text-[#C8C5BC] max-w-2xl"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            We started UpVirtual because we saw too many businesses getting burned by agencies that overpromise and underdeliver. So we built something better — a team that&apos;s fast, technical, and obsessed with results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              Our Story
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight mb-8">
              Why UpVirtual Exists
            </h2>
            <div
              className="font-cormorant leading-none text-[#E8E4DC] select-none hidden md:block"
              style={{ fontSize: "200px" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
          </div>
          <div className="[border-left:3px_solid_#B8A88A] pl-8 space-y-6" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              Most agencies sell you a website and disappear. Or worse — they lock you into a 6-month retainer with nothing to show for it.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              We&apos;ve been on the other side of that. We&apos;ve seen businesses bleed money on &ldquo;brand strategies&rdquo; that never ship, funnels that never convert, and designers who ghost after the deposit clears.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              UpVirtual exists to be the opposite of that. We&apos;re a digital agency built by people who actually build things — developers, designers, and marketers who&apos;d rather show results than pitch decks.
            </p>
            <p className="font-jost font-light text-[16px] md:text-[18px] leading-[1.8] text-[#2D2D2D]">
              We keep our team lean, our communication direct, and our turnaround fast. No account managers. No layers. You talk to the people doing the work.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-panel py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14" data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              What Makes Us Different
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight">
              No Fluff. No Templates. No BS.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <div
                key={item.number}
                className="bg-white rounded-xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              >
                <p className="font-cormorant text-[56px] font-light text-[#C8C5BC] leading-none mb-4">
                  {item.number}
                </p>
                <h3 className="font-jost text-[20px] md:text-[24px] font-bold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#3D3D3D]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14" data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#6B6B6B] mb-4">
              The Team
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#1A1A1A] leading-tight">
              The People Behind the Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] [border-top:3px_solid_#B8A88A] flex flex-col"
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jost text-[22px] font-semibold text-[#1A1A1A] mb-1 hover:text-[#B8A88A] transition-colors inline-flex items-center gap-2 self-start"
                >
                  {member.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
                  </svg>
                  <span className="sr-only">LinkedIn profile</span>
                </a>
                <p className="font-jost text-[14px] uppercase tracking-[0.10em] text-[#6B6B6B] mb-5">
                  {member.role}
                </p>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#3D3D3D]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#1A1A1A] py-20 md:py-[120px] px-6">
        <div className="max-w-350 mx-auto">
          <div className="mb-14 text-center" data-reveal>
            <p className="font-jost text-[14px] font-semibold uppercase tracking-[0.15em] text-[#8A8A8A] mb-4">
              Our Values
            </p>
            <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#F5F5F0] leading-tight">
              What We Stand On
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg p-8"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B8A88A] shrink-0" />
                  <h3 className="font-jost text-[20px] font-semibold text-[#F5F5F0]">{value.title}</h3>
                </div>
                <p className="font-jost font-light text-[16px] leading-[1.6] text-[#B8B5AC] pl-5">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] border-t border-[rgba(255,255,255,0.08)] py-20 md:py-[120px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cormorant text-[32px] md:text-[48px] font-light text-[#F5F5F0] leading-tight mb-6" data-reveal>
            Ready to Work With a Team That Actually Delivers?
          </h2>
          <p
            className="font-jost font-light text-[16px] md:text-[18px] text-[#B8B5AC] mb-10 leading-relaxed"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            Book a free discovery call and let&apos;s figure out exactly what your business needs — no pitch, no pressure.
          </p>
          <a
            href="https://cal.com/clint-cena"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost font-semibold text-[14px] uppercase tracking-[0.12em] text-[#1A1A1A] bg-[#F5F5F0] px-10 py-5 rounded-lg hover:bg-white transition-colors inline-block"
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            Book a Free Discovery Call →
          </a>
        </div>
      </section>
    </div>
  );
}
