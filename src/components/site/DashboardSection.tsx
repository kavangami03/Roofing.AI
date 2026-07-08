import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, CloudLightning, DollarSign, TrendingUp, Activity, BarChart3, ChevronDown, CheckCircle2 } from "lucide-react";

const ranges = ["7 Days", "30 Days", "90 Days"] as const;
type Range = typeof ranges[number];

const data: Record<Range, { calls: number; cd: number; insp: number; id: number; leads: number; ld: number; rev: string; rd: number; hourly: number[]; types: { label: string; pct: number; color: string }[] }> = {
  "7 Days": {
    calls: 648, cd: 27, insp: 206, id: 38, leads: 154, ld: 44, rev: "$92k", rd: 29,
    hourly: [12, 28, 65, 90, 78, 55, 38, 20],
    types: [
      { label: "Storm leads", pct: 48, color: "bg-[#111111]" },
      { label: "Service & status", pct: 34, color: "bg-[#5F5F5F]" },
      { label: "Emergency leaks", pct: 18, color: "bg-[#E5E5E5]" },
    ],
  },
  "30 Days": {
    calls: 2840, cd: 31, insp: 892, id: 42, leads: 641, ld: 51, rev: "$384k", rd: 36,
    hourly: [18, 35, 72, 100, 88, 62, 45, 28],
    types: [
      { label: "Storm leads", pct: 52, color: "bg-[#111111]" },
      { label: "Service & status", pct: 30, color: "bg-[#5F5F5F]" },
      { label: "Emergency leaks", pct: 18, color: "bg-[#E5E5E5]" },
    ],
  },
  "90 Days": {
    calls: 8420, cd: 34, insp: 2650, id: 45, leads: 1890, ld: 58, rev: "$1.1M", rd: 41,
    hourly: [22, 40, 80, 100, 92, 70, 52, 32],
    types: [
      { label: "Storm leads", pct: 55, color: "bg-[#111111]" },
      { label: "Service & status", pct: 28, color: "bg-[#5F5F5F]" },
      { label: "Emergency leaks", pct: 17, color: "bg-[#E5E5E5]" },
    ],
  },
};

const hours = ["6A", "9A", "12P", "3P", "6P", "9P", "12A", "3A"];

function Counter({ value, dur = 800 }: { value: number; dur?: number }) {
  const [n, setN] = useState(0);
  const prev = useRef(value);
  useEffect(() => {
    const from = prev.current; prev.current = value;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.round(from + (value - from) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, dur]);
  return <>{n.toLocaleString()}</>;
}

export function DashboardSection() {
  const [r, setR] = useState<Range>("7 Days");
  const d = data[r];
  const max = Math.max(...d.hourly);

  const stats = [
    { label: "Calls Answered", val: d.calls, delta: d.cd, icon: Phone },
    { label: "Inspections Booked", val: d.insp, delta: d.id, icon: Calendar },
    { label: "Storm Leads", val: d.leads, delta: d.ld, icon: CloudLightning },
    { label: "Revenue Impact", val: d.rev, delta: d.rd, icon: DollarSign, str: true },
  ];

  return (
    <section id="dashboard" className="relative bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden border-t border-border">
      {/* Background elements for ultra-premium depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-[0.03] blur-[100px]" />

      <div className="container-page relative z-10 max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Editorial Header - Matched to Site Theme */}
        <div className="pb-16 container-page max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-accent shadow-sm"
          >
            Live Platform Preview
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] mb-6 max-w-5xl mx-auto"
          >
            One dashboard.<br/>
            <span className="text-accent">Total visibility.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="text-ink-muted text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto"
          >
            Track every call, lead, and booked inspection across all your crews in real-time. Interactive preview with sample data.
          </motion.p>
        </div>

        {/* Dashboard Frame - Apple Style Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl md:rounded-[24px] shadow-lift ring-1 ring-border overflow-hidden"
        >
          {/* Top Bar / Window Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#FCFCFC]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] border border-border" />
            </div>
            
            {/* Center Tab */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
               <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white">
                 <BarChart3 className="w-3 h-3" />
               </div>
               <span className="text-[13px] font-medium text-ink">SuperMIA Console</span>
            </div>

            {/* Time Toggle */}
            <div className="flex items-center bg-[#F3F2EE] rounded-md p-0.5">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => setR(range)}
                  className={`relative px-3 py-1 rounded text-[11px] font-semibold transition-colors duration-200 ${r === range ? "text-ink" : "text-ink-muted hover:text-ink"}`}
                >
                  {r === range && (
                    <motion.div layoutId="dash-toggle" className="absolute inset-0 bg-white rounded shadow-sm border border-border" transition={{ type: "spring", bounce: 0.15, duration: 0.5 }} />
                  )}
                  <span className="relative z-10">{range}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-12">
              {stats.map((s, i) => (
                <div key={s.label} className="relative group">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-border">
                        <s.icon className="w-4 h-4 text-ink-muted group-hover:text-ink transition-colors" />
                     </div>
                     <span className="text-[12px] font-medium text-ink-muted">{s.label}</span>
                  </div>
                  <div className="flex items-end gap-3">
                    <div className="text-3xl md:text-4xl font-semibold text-ink tracking-tight">
                      {s.str ? <motion.span key={String(s.val)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{s.val}</motion.span> : <Counter value={s.val as number} />}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                      <TrendingUp className="w-3 h-3" />
                      {s.delta}%
                    </div>
                    <span className="text-[11px] text-ink-muted font-medium">vs prev. period</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              
              {/* Bar Chart Section */}
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                     <h4 className="text-[15px] font-semibold text-ink">Call Volume</h4>
                     <p className="text-[13px] text-ink-muted mt-0.5">Distribution by hour of day</p>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] font-medium text-ink-muted">
                     <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-ink" /> Calls</span>
                  </div>
                </div>
                
                <div className="relative h-[200px] flex items-end justify-between gap-2 border-b border-border pb-2">
                  {/* Y-axis lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                    {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-full h-[1px] bg-border/50" />
                    ))}
                  </div>

                  {d.hourly.map((v, i) => (
                    <div key={i} className="relative flex-1 flex flex-col items-center gap-3 group z-10 h-full justify-end">
                      {/* Tooltip */}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-white text-[11px] font-medium px-2 py-1 rounded pointer-events-none transform -translate-y-2 group-hover:-translate-y-0">
                         {v} calls
                      </div>
                      <motion.div
                        className="w-full max-w-[40px] rounded-t-[4px] bg-ink/90 group-hover:bg-ink transition-colors"
                        animate={{ height: `${(v / max) * 100}%` }}
                        transition={{ duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <span className="text-[11px] font-medium text-ink-muted">{hours[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Metrics */}
              <div className="lg:col-span-4 flex flex-col gap-10">
                {/* Breakdown */}
                <div>
                  <h4 className="text-[15px] font-semibold text-ink mb-6">Call Types</h4>
                  <div className="space-y-5">
                    {d.types.map((t, i) => (
                      <div key={t.label}>
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-[13px] font-medium text-ink-muted">{t.label}</span>
                          <span className="text-[13px] font-semibold text-ink">{t.pct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full rounded-full ${t.color}`} 
                            initial={{ width: 0 }}
                            animate={{ width: `${t.pct}%` }} 
                            transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Metric */}
                <div className="p-5 rounded-[12px] bg-surface border border-border flex items-start justify-between">
                   <div>
                      <p className="text-[12px] font-medium text-ink-muted mb-1">Average Pickup Time</p>
                      <p className="text-[16px] font-semibold text-ink">&lt; 1 Ring</p>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                   </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
