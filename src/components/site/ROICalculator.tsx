import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./Section";
import { TrendingUp, PhoneMissed, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [calls, setCalls] = useState(1200);
  const [missedPct, setMissedPct] = useState(35);
  const [jobValue, setJobValue] = useState(8500);
  const [closeRate, setCloseRate] = useState(28);

  const { lost, recovered, additional } = useMemo(() => {
    const missed = calls * (missedPct / 100);
    const closable = missed * (closeRate / 100);
    const lostRev = closable * jobValue;
    const recoveredRev = lostRev * 0.82;
    return {
      lost: Math.round(lostRev),
      recovered: Math.round(recoveredRev),
      additional: Math.round(recoveredRev * 12),
    };
  }, [calls, missedPct, jobValue, closeRate]);

  return (
    <section id="roi" className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="ROI Calculator"
          title={<>See what silent phones <span className="text-accent">are costing you</span>.</>}
          description="Drag the sliders. The math updates instantly. No forms, no salespeople."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
            <Slider label="Monthly inbound calls" value={calls} min={200} max={5000} step={50} onChange={setCalls} format={(v) => v.toLocaleString()} />
            <Slider label="Missed call rate" value={missedPct} min={5} max={80} step={1} onChange={setMissedPct} format={(v) => `${v}%`} />
            <Slider label="Average job value" value={jobValue} min={2000} max={30000} step={250} onChange={setJobValue} format={(v) => `$${v.toLocaleString()}`} />
            <Slider label="Close rate on answered calls" value={closeRate} min={10} max={60} step={1} onChange={setCloseRate} format={(v) => `${v}%`} />
          </div>

          <div className="flex flex-col gap-4">
            <ResultCard tone="danger" icon={PhoneMissed} label="Revenue lost / month" value={lost} note="What silent phones cost today" />
            <ResultCard tone="accent" icon={TrendingUp} label="Recovered with SuperMIA" value={recovered} note="Based on 82% of missed-call revenue captured" highlight />
            <ResultCard tone="ink" icon={DollarSign} label="Additional revenue / year" value={additional} note="Compounded across 12 months" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, min, max, step, onChange, format,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="py-4">
      <div className="flex items-baseline justify-between">
        <label className="text-[13px] font-medium text-ink-muted">{label}</label>
        <span className="text-[18px] font-semibold text-ink">{format(value)}</span>
      </div>
      <div className="relative mt-3 h-2 rounded-full bg-border">
        <div className="absolute inset-y-0 left-0 rounded-full bg-accent" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full cursor-pointer appearance-none bg-transparent"
          style={{ WebkitAppearance: "none" }}
          aria-label={label}
        />
        <div
          className="pointer-events-none absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-accent shadow-card"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ResultCard({
  tone, icon: Icon, label, value, note, highlight,
}: {
  tone: "danger" | "accent" | "ink";
  icon: typeof PhoneMissed;
  label: string; value: number; note: string; highlight?: boolean;
}) {
  const toneCls =
    tone === "danger" ? "bg-white border-border text-ink" :
    tone === "accent" ? "bg-accent text-primary border-accent" :
    "bg-primary text-white border-primary";
  const chipCls =
    tone === "danger" ? "bg-danger/10 text-danger" :
    tone === "accent" ? "bg-primary/10 text-primary" :
    "bg-white/10 text-white";
  const noteCls = tone === "danger" ? "text-ink-muted" : tone === "accent" ? "text-primary/70" : "text-white/70";
  const labelCls = tone === "danger" ? "text-ink-muted" : tone === "accent" ? "text-primary/80" : "text-white/80";

  return (
    <motion.div
      layout
      className={`flex items-start gap-4 rounded-2xl border p-6 shadow-card ${toneCls} ${highlight ? "shadow-lift" : ""}`}
    >
      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${chipCls}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className={`text-[12px] font-semibold uppercase tracking-wider ${labelCls}`}>{label}</p>
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`mt-1 text-[30px] font-semibold tracking-tight ${tone === "danger" ? "text-ink" : tone === "accent" ? "text-primary" : "text-white"}`}
        >
          ${value.toLocaleString()}
        </motion.p>
        <p className={`mt-1 text-[12.5px] ${noteCls}`}>{note}</p>
      </div>
    </motion.div>
  );
}