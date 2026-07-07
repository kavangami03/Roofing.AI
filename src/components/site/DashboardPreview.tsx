import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bell, PhoneCall, Calendar, Users, DollarSign, Clock, Cloud, ChevronRight,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { SectionHeading, Reveal } from "./Section";

const data = [
  { d: "Mon", v: 40 }, { d: "Tue", v: 62 }, { d: "Wed", v: 51 }, { d: "Thu", v: 78 },
  { d: "Fri", v: 92 }, { d: "Sat", v: 118 }, { d: "Sun", v: 128 },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-background py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Live Ops Console"
          title={<>Watch the front office run itself.</>}
          description="A single command center for every call, inspection, crew, and dollar of storm revenue moving through your shop."
        />

        <Reveal delay={0.05} className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-elegant">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-border bg-surface-alt/60 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                <span className="ml-4 text-[12px] font-medium text-ink-muted">supermia.app · Ops Console</span>
              </div>
              <div className="hidden items-center gap-2 text-[11px] text-ink-muted sm:flex">
                <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-success" /> All systems live</span>
              </div>
            </div>

            <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-6">
              <StatCard title="Calls answered" value={128} suffix=" today" icon={PhoneCall} trend="+18%" />
              <StatCard title="Inspections booked" value={41} suffix="" icon={Calendar} trend="+22%" />
              <StatCard title="Revenue impact" value={184220} prefix="$" icon={DollarSign} trend="+32%" />
              <StatCard title="Avg response" value={1.8} suffix="s" icon={Clock} trend="-0.4s" positive />
              <StatCard title="Crews on route" value={7} icon={Users} suffix="/9" />
              <StatCard title="Storm zones" value={3} icon={Cloud} suffix=" active" />

              {/* Chart card */}
              <div className="md:col-span-4 rounded-2xl border border-border bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-ink">Calls answered · last 7 days</p>
                    <p className="text-[12px] text-ink-muted">Peak Thursday 6pm, storm zone 33612</p>
                  </div>
                  <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">+38%</span>
                </div>
                <div className="mt-4 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 8, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="d" tickLine={false} axisLine={false} stroke="var(--muted-foreground)" tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: 12,
                          border: "1px solid var(--border)",
                          fontSize: 12,
                        }}
                      />
                      <Area type="monotone" dataKey="v" stroke="var(--accent)" strokeWidth={2} fill="url(#chartFill)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Live activity */}
              <div className="md:col-span-2 rounded-2xl border border-border bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-ink">Live activity</p>
                  <Bell className="h-4 w-4 text-ink-muted" />
                </div>
                <ul className="mt-3 space-y-3">
                  {[
                    { t: "New storm lead · 33612", d: "12s ago", tone: "accent" as const },
                    { t: "Inspection booked · Crew Delta", d: "38s ago", tone: "success" as const },
                    { t: "CRM synced · JobNimbus", d: "1m ago", tone: "ink" as const },
                    { t: "SMS delivered to homeowner", d: "2m ago", tone: "ink" as const },
                    { t: "Crew Bravo dispatched · ETA 22m", d: "3m ago", tone: "success" as const },
                  ].map((e, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px]">
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                        e.tone === "accent" ? "bg-accent" : e.tone === "success" ? "bg-success" : "bg-ink/40"
                      }`} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-ink">{e.t}</p>
                        <p className="text-[11px] text-ink-muted">{e.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dispatch board */}
              <div className="md:col-span-6 rounded-2xl border border-border bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-ink">Dispatch board</p>
                  <button className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-muted hover:text-ink">
                    Open board <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {[
                    { c: "Crew Delta", s: "En route · ETA 22m", p: "Priority", stage: 85, tone: "accent" as const },
                    { c: "Crew Bravo", s: "On site · Tampa 33612", p: "Active", stage: 60, tone: "success" as const },
                    { c: "Crew Echo", s: "Wrapping · 33613", p: "Closing", stage: 92, tone: "ink" as const },
                  ].map((c) => (
                    <div key={c.c} className="rounded-xl border border-border bg-surface-alt/50 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] font-semibold text-ink">{c.c}</p>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          c.tone === "accent" ? "bg-accent/10 text-accent"
                            : c.tone === "success" ? "bg-success/10 text-success"
                            : "bg-ink/10 text-ink"
                        }`}>{c.p}</span>
                      </div>
                      <p className="mt-1 text-[12px] text-ink-muted">{c.s}</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.stage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({
  title, value, prefix = "", suffix = "", icon: Icon, trend, positive,
}: {
  title: string; value: number; prefix?: string; suffix?: string;
  icon: typeof PhoneCall; trend?: string; positive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const isFloat = value % 1 !== 0;
  const shown = isFloat ? display.toFixed(1) : Math.round(display).toLocaleString();

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-medium text-ink-muted">{title}</p>
        <Icon className="h-4 w-4 text-ink-muted" />
      </div>
      <p className="mt-2 text-[24px] font-semibold tracking-tight text-ink">
        {prefix}{shown}{suffix}
      </p>
      {trend && (
        <p className={`mt-0.5 text-[11px] font-semibold ${positive || trend.startsWith("+") ? "text-success" : "text-ink-muted"}`}>
          {trend}
        </p>
      )}
    </div>
  );
}