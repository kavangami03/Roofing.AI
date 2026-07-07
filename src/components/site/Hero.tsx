import { motion } from "framer-motion";
import {
  PhoneCall,
  ArrowRight,
  Play,
  CheckCircle2,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Zap,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const trust = [
  { icon: Zap, label: "Answers in under 2 seconds" },
  { icon: ShieldCheck, label: "24/7 storm coverage" },
  { icon: Globe2, label: "Bilingual EN / ES" },
  { icon: Users, label: "Unlimited simultaneous calls" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* soft radial light */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

      <div className="container-page grid gap-14 pb-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pb-32">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            href="#solution"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[13px] font-medium text-ink shadow-card"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/10 text-accent">
              <Sparkles className="h-3 w-3" />
            </span>
            Meet Max — your AI service desk
            <ArrowRight className="h-3.5 w-3.5 text-ink-muted" />
          </motion.a>

          <h1 className="text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[56px] lg:text-[68px]">
            <RevealWord delay={0.05}>Every roofing call,</RevealWord>{" "}
            <RevealWord delay={0.15}>answered.</RevealWord>
            <br />
            <RevealWord delay={0.28}>
              <span className="text-ink-muted">Every inspection,</span>
            </RevealWord>{" "}
            <RevealWord delay={0.38}>
              <span className="relative text-accent">
                booked
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full text-accent/40"
                  viewBox="0 0 100 8"
                  fill="none"
                >
                  <path d="M2 6 Q 50 -2 98 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </RevealWord>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl text-[18px] leading-[1.6] text-ink-muted"
          >
            SuperMIA is the AI service desk built for roofing operators. It picks up
            every storm lead in under two seconds, books the inspection, syncs your
            CRM, and dispatches the right crew — while your team stays on the roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[15px] font-semibold text-accent-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Book a live demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#workflow"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-[15px] font-semibold text-ink shadow-card transition-all hover:-translate-y-0.5"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white">
                <Play className="h-3 w-3 translate-x-[1px] fill-current" />
              </span>
              Watch a real call
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-2 flex flex-wrap gap-2"
          >
            {trust.map((t) => (
              <li
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-[13px] font-medium text-ink-muted shadow-card"
              >
                <t.icon className="h-3.5 w-3.5 text-accent" />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: living product */}
        <HeroProduct />
      </div>
    </section>
  );
}

function RevealWord({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

function HeroProduct() {
  return (
    <div className="relative isolate h-[560px] w-full sm:h-[600px] lg:h-[640px]">
      {/* backdrop card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 rounded-[28px] border border-border bg-gradient-to-br from-white via-white to-secondary shadow-elegant"
      />

      {/* Main call console */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 top-6 z-20 w-[86%] max-w-[440px] rounded-2xl border border-border bg-white p-5 shadow-lift"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-success/10 text-success">
                <PhoneCall className="h-4 w-4" />
              </div>
              <span className="absolute inset-0 rounded-full bg-success/40 animate-pulse-ring" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Incoming call · Live</p>
              <p className="text-[12px] text-ink-muted">Sarah M. · (813) 555 · 0129</p>
            </div>
          </div>
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
            AI answering
          </span>
        </div>

        <div className="mt-4 flex items-end gap-[3px] h-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-1 origin-bottom rounded-full bg-gradient-to-t from-accent/40 to-accent animate-[wave_1.2s_ease-in-out_infinite]"
              style={{
                height: `${20 + ((i * 37) % 80)}%`,
                animationDelay: `${(i % 12) * 0.08}s`,
              }}
            />
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <Bubble side="ai">
            Hi Sarah, this is Max with Peak Roofing. I hear last night’s storm hit
            hard — can I book you a free inspection?
          </Bubble>
          <Bubble side="user">
            Yes please, there are shingles in the yard.
          </Bubble>
          <Bubble side="ai" typing>
            Got it. Confirming address 4213 Cypress Ln…
          </Bubble>
        </div>
      </motion.div>

      {/* Inspection booked card */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-6 right-2 z-30 w-[78%] max-w-[340px] rounded-2xl border border-border bg-white p-4 shadow-lift"
      >
        <div className="flex items-center justify-between text-[12px] font-medium text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            Inspection scheduled
          </span>
          <span className="text-success">Synced to CRM</span>
        </div>
        <p className="mt-2 text-[15px] font-semibold text-ink">Tomorrow · 9:30 AM</p>
        <p className="mt-0.5 flex items-center gap-1 text-[12px] text-ink-muted">
          <MapPin className="h-3 w-3" /> 4213 Cypress Ln, Tampa FL
        </p>
        <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-ink text-[10px] font-semibold text-white">
            JD
          </div>
          <div className="text-[12px]">
            <p className="font-medium text-ink">Crew Delta assigned</p>
            <p className="text-ink-muted">ETA 22 min · Route optimized</p>
          </div>
        </div>
      </motion.div>

      {/* Floating stat pills */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute -right-2 top-16 z-30 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-card sm:block"
      >
        <p className="text-[11px] uppercase tracking-wider text-ink-muted">Today</p>
        <p className="mt-1 text-[22px] font-semibold text-ink">
          128 <span className="text-[13px] font-medium text-success">calls answered</span>
        </p>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-ink-muted">
          <CheckCircle2 className="h-3 w-3 text-success" />0 missed
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute -left-3 bottom-32 z-30 hidden rounded-2xl border border-border bg-ink px-4 py-3 text-white shadow-lift md:block"
      >
        <p className="text-[11px] uppercase tracking-wider text-white/60">Revenue recovered</p>
        <p className="mt-1 text-[22px] font-semibold">
          $184,220 <span className="text-[12px] font-medium text-accent">▲ 32%</span>
        </p>
      </motion.div>
    </div>
  );
}

function Bubble({
  children,
  side,
  typing,
}: {
  children: React.ReactNode;
  side: "ai" | "user";
  typing?: boolean;
}) {
  const isAi = side === "ai";
  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug ${
          isAi
            ? "rounded-tl-sm bg-secondary text-ink"
            : "rounded-tr-sm bg-ink text-white"
        }`}
      >
        {children}
        {typing && (
          <span className="ml-1 inline-flex items-center gap-0.5 align-middle">
            <Dot delay={0} />
            <Dot delay={0.15} />
            <Dot delay={0.3} />
          </span>
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="inline-block h-1 w-1 rounded-full bg-ink-muted"
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 1.1, repeat: Infinity, delay }}
    />
  );
}