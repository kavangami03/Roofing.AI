import { motion } from "framer-motion";
import { PhoneMissed, Voicemail, Clock, TrendingDown } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

const pains = [
  { icon: PhoneMissed, title: "62% of storm calls go unanswered", note: "After hours, during dispatch, on the roof — every silent ring is a lost job." },
  { icon: Voicemail, title: "Voicemail is a dead lead", note: "Homeowners call the next roofer in 47 seconds. They rarely wait for a callback." },
  { icon: Clock, title: "Callbacks take 6+ hours", note: "Your competition already inspected the roof, quoted, and closed the deal." },
  { icon: TrendingDown, title: "$180K+ in missed revenue / yr", note: "The average mid-market roofer leaves this on the table every single storm season." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-background py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              A storm hits. The phones ring.
              <br />
              <span className="text-ink-muted">Then… silence.</span>
            </>
          }
          description="The moment weather turns, every roofer in the region is fighting for the same window. The one who answers first, wins. The rest fight for scraps."
        />

        <div className="relative">
          {/* connection line */}
          <svg className="absolute left-6 top-6 -z-0 h-[calc(100%-3rem)] w-px" viewBox="0 0 2 100" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100" stroke="var(--border)" strokeDasharray="4 4" />
          </svg>
          <ul className="relative z-10 flex flex-col gap-3">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <li className="flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-danger/10 text-danger">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[17px] font-semibold text-ink">{p.title}</p>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-muted">{p.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}