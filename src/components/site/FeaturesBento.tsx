import { motion } from "framer-motion";
import { Languages, ShieldCheck, MessagesSquare, Zap, Radar, LineChart } from "lucide-react";
import { SectionHeading } from "./Section";

export function FeaturesBento() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Built for Roofing"
          title={<>Not a chatbot. <span className="text-ink-muted">A roofing operator.</span></>}
          description="Every feature was shaped alongside real roofing GMs, dispatchers, and estimators."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[repeat(3,minmax(0,180px))]">
          {/* Big card */}
          <Card className="md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-center gap-2">
                <IconChip icon={Radar} />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted">Storm-aware routing</span>
              </div>
              <div>
                <h3 className="text-[26px] font-semibold leading-tight text-ink sm:text-[30px]">
                  Knows the storm hit before your phones do.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
                  SuperMIA ingests NOAA hail + wind data by ZIP, primes the AI with local damage patterns, and pre-loads the right scripts before the first ring.
                </p>
              </div>
              <StormMap />
            </div>
          </Card>

          <Card className="md:col-span-2 md:row-span-1">
            <IconChip icon={Zap} />
            <h3 className="mt-4 text-[19px] font-semibold text-ink">Under 2s pickup</h3>
            <p className="mt-1 text-[14px] text-ink-muted">The first roofer to answer wins the job. Every time.</p>
          </Card>

          <Card className="md:col-span-2 md:row-span-1">
            <IconChip icon={Languages} />
            <h3 className="mt-4 text-[19px] font-semibold text-ink">Bilingual by default</h3>
            <p className="mt-1 text-[14px] text-ink-muted">Natural English & Spanish, code-switches mid-call.</p>
          </Card>

          <Card className="md:col-span-3 md:row-span-1">
            <div className="flex items-center gap-2">
              <IconChip icon={MessagesSquare} />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted">Live transcripts</span>
            </div>
            <h3 className="mt-3 text-[19px] font-semibold text-ink">Every call, searchable.</h3>
            <p className="mt-1 text-[14px] text-ink-muted">Full transcripts, sentiment tags, and objection log attached to the CRM lead.</p>
          </Card>

          <Card className="md:col-span-3 md:row-span-1">
            <div className="flex items-center gap-2">
              <IconChip icon={ShieldCheck} />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted">Enterprise-grade</span>
            </div>
            <h3 className="mt-3 text-[19px] font-semibold text-ink">SOC 2 · TCPA · Recording consent</h3>
            <p className="mt-1 text-[14px] text-ink-muted">Compliance and audit trails your ops team will actually respect.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift ${className}`}
    >
      {children}
    </motion.div>
  );
}

function IconChip({ icon: Icon }: { icon: typeof Languages }) {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
      <Icon className="h-4 w-4" />
    </div>
  );
}

function StormMap() {
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl border border-border bg-surface-alt">
      <svg viewBox="0 0 400 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="storm" x1="0" x2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1={i * 22} y1="0" x2={i * 22} y2="100" stroke="var(--border)" strokeWidth="1" />
        ))}
        <path d="M0 60 Q 60 20 130 55 T 260 45 T 400 40 L 400 100 L 0 100 Z" fill="url(#storm)" />
      </svg>
      {[
        { l: "Tampa", x: "22%", ping: true },
        { l: "Orlando", x: "44%", ping: false },
        { l: "Jacksonville", x: "68%", ping: true },
        { l: "Miami", x: "88%", ping: false },
      ].map((c) => (
        <div key={c.l} className="absolute top-1/2 -translate-y-1/2" style={{ left: c.x }}>
          <div className="relative">
            <span className={`block h-2.5 w-2.5 rounded-full ${c.ping ? "bg-accent" : "bg-ink/40"}`} />
            {c.ping && <span className="absolute -inset-1 rounded-full bg-accent/40 animate-pulse-ring" />}
          </div>
          <span className="mt-1 block whitespace-nowrap text-[10px] font-medium text-ink-muted">{c.l}</span>
        </div>
      ))}
    </div>
  );
}

// Silence unused-import warning for LineChart (kept for future use)
void LineChart;