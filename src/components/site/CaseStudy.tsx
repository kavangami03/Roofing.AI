import { ArrowUpRight } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-background py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Case Study"
          title={<>How Peak Roofing recovered <span className="text-accent">$1.4M in one storm season.</span></>}
          description="A 32-crew Florida contractor stopped losing storm leads to slower competitors — without hiring a single new dispatcher."
        />

        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-[16px] border border-border bg-white shadow-elegant transition-all hover:border-accent hover:shadow-lift lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-[13px] font-bold text-white">PR</div>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">Peak Roofing</p>
                    <p className="text-[12px] text-ink-muted">Tampa, FL · 32 crews · Residential + Commercial</p>
                  </div>
                </div>
                <h3 className="mt-8 text-[24px] font-semibold leading-snug text-ink sm:text-[28px]">
                  “We used to lose the roof to whoever picked up first. Now we <span className="text-accent">are</span> whoever picks up first — 24 hours a day.”
                </h3>
                <p className="mt-4 text-[14px] font-medium text-ink-muted">Marcus Delaney · Owner, Peak Roofing</p>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-6">
                <Row label="Challenge" value="Missed 40% of after-hours storm calls" />
                <Row label="Rollout" value="Live in 6 days · JobNimbus + CompanyCam" />
                <Row label="Result" value="0% missed calls · 3.4x inspection volume" />
              </div>

              <a href="#demo" className="group inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-ink hover:text-accent">
                Read the full story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-2">
              {[
                { k: "3.4x", v: "inspections booked", n: "vs. prior storm season" },
                { k: "0%", v: "missed calls", n: "since going live in April" },
                { k: "$1.4M", v: "revenue recovered", n: "over one storm season" },
                { k: "6 days", v: "time to launch", n: "from kickoff to first live call" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col justify-between gap-3 bg-surface-alt p-6 sm:p-8">
                  <p className="text-[38px] font-semibold leading-none text-ink sm:text-[46px]">{s.k}</p>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{s.v}</p>
                    <p className="mt-0.5 text-[12px] text-ink-muted">{s.n}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,7rem)_minmax(0,1fr)] gap-3 text-[13.5px]">
      <span className="font-medium uppercase tracking-wider text-ink-muted">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}