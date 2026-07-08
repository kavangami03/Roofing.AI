import { motion } from "framer-motion";
import DotField from "../ui/DotField";
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
    <section id="top" className="relative isolate overflow-hidden pt-28 md:pt-36 bg-background">
      {/* Background video related to roofing */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-[0.16] transition-opacity duration-1000">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1a2d5926ec00dc6b0e8b159f&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:from-background/95 lg:via-background/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      {/* soft radial light */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white blur-3xl" />

      {/* Interactive Dot Field */}
      <div className="absolute inset-0 -z-10 pointer-events-auto">
        <DotField
          dotRadius={2}
          dotSpacing={22}
          bulgeStrength={80}
          glowRadius={300}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(0, 0, 0, 0.9)"
          gradientTo="rgba(0, 0, 0, 0.4)"
          glowColor="transparent"
        />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center">
        {/* Centered Editorial Header */}
        <div className="flex max-w-4xl flex-col items-center text-center gap-6">
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            href="#solution"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[13px] font-medium text-ink shadow-card hover:border-accent transition-colors"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/10 text-accent">
              <Sparkles className="h-3 w-3" />
            </span>
            Meet Max — your AI service desk
            <ArrowRight className="h-3.5 w-3.5 text-ink-muted" />
          </motion.a>

          <h1 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-[58px] lg:text-[72px]">
            <RevealWord delay={0.05}>Stop losing</RevealWord>{" "}
            <span className="relative text-accent inline-block">
              storm leads
              <svg
                className="absolute -bottom-2 left-0 h-2 w-full text-accent/40"
                viewBox="0 0 100 8"
                fill="none"
              >
                <path d="M2 6 Q 50 -2 98 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <RevealWord delay={0.2}>to voicemail.</RevealWord>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-3xl text-[18px] leading-[1.65] text-[#5F5F5F]"
          >
            When hail hits, homeowners don't wait. They call the roofer who picks up first.
            Max answers every call in parallel, captures the address and damage, books the
            inspection, and triages emergency leaks before the lead goes cold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            <a
              href="#demo"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-primary px-7 h-[56px] text-[15px] font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-primary transition-colors duration-300">
                Book a live demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <a
              href="#workflow"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[14px] border border-primary bg-transparent px-7 h-[56px] text-[15px] font-semibold text-primary transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 text-primary transition-colors duration-300">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-white transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Play className="h-3 w-3 translate-x-[1px] fill-current" />
                </span>
                Listen to a real call
              </span>
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-4 flex flex-wrap justify-center gap-2.5"
          >
            {trust.map((t) => (
              <li
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-3.5 py-1.5 text-[13px] font-medium text-secondary shadow-card hover:border-accent transition-colors"
              >
                <t.icon className="h-3.5 w-3.5 text-accent" />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Unique Operations Deck (3-Column Staggered Layout) */}
        <div className="relative mt-20 w-full max-w-7xl rounded-[24px] border border-border bg-[#F3F2EE]/40 p-4 sm:p-6 shadow-elegant backdrop-blur-sm">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3 lg:items-stretch">
            
            {/* Column 1: Intake (Live AI Receptionist) */}
            <div className="flex flex-col rounded-[16px] border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
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
                    <p className="text-[11px] text-ink-muted">Sarah M. · (813) 555 · 0129</p>
                  </div>
                </div>
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
                  AI answering
                </span>
              </div>

              {/* Waveform graphic */}
              <div className="mt-5 flex items-end gap-[3px] h-10 px-1 bg-surface-alt/40 rounded-lg py-1.5">
                {Array.from({ length: 32 }).map((_, i) => (
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

              {/* Chat dialogue bubbles */}
              <div className="mt-5 flex-1 space-y-3">
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
            </div>

            {/* Column 2: Operations (CRM & Dispatch with Tampa Road Map) */}
            <div className="flex flex-col rounded-[16px] border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center justify-between text-[12px] font-medium text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  Inspection scheduled
                </span>
                <span className="text-success font-semibold">Synced to CRM</span>
              </div>
              <p className="mt-2.5 text-[17px] font-semibold text-ink">Tomorrow · 9:30 AM</p>
              <p className="mt-0.5 flex items-center gap-1 text-[12.5px] text-ink-muted">
                <MapPin className="h-3.5 w-3.5 text-accent" /> 4213 Cypress Ln, Tampa FL
              </p>

              {/* CUSTOM INLINE MAP */}
              <div className="relative mt-4 h-32 w-full overflow-hidden rounded-xl border border-border bg-[#F5F5F2]">
                {/* Map Grid */}
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />
                
                {/* SVG Roads */}
                <svg className="absolute inset-0 h-full w-full stroke-zinc-300/60" fill="none" strokeWidth="2.5">
                  <path d="M-10,30 H400 M-10,90 H400 M100,-10 V150 M250,-10 V150 M10,120 L300,10" />
                </svg>
                
                {/* Route Line */}
                <svg className="absolute inset-0 h-full w-full stroke-accent" fill="none" strokeWidth="3" strokeLinecap="round">
                  <path d="M 100,90 Q 150,50 250,30" className="animate-[dash_3s_linear_infinite]" strokeDasharray="6,4" />
                </svg>

                {/* Pin 1 (Office) */}
                <div className="absolute left-[100px] top-[90px] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-2 border-white shadow" />
                
                {/* Pin 2 (Job Site) */}
                <div className="absolute left-[250px] top-[30px] h-4.5 w-4.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent border-2 border-white shadow flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                </div>

                {/* Tampa label */}
                <span className="absolute bottom-2 right-2 rounded bg-white/95 px-2 py-0.5 text-[9px] font-semibold text-primary border border-border shadow-sm">
                  Tampa, FL
                </span>
              </div>

              {/* Crew assignment info */}
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4 mt-auto">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[11px] font-semibold text-white">
                  JD
                </div>
                <div className="text-[12px] min-w-0 flex-1">
                  <p className="font-semibold text-ink truncate">Crew Delta assigned</p>
                  <p className="text-ink-muted truncate">ETA 22 min · Route optimized</p>
                </div>
              </div>
            </div>

            {/* Column 3: Insights (Intake & Financial Metrics) */}
            <div className="flex flex-col gap-5 rounded-[16px] border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300 justify-between">
              
              {/* Daily Intake Stats */}
              <div className="rounded-xl border border-border bg-[#FBFBFA] p-4 flex-1 flex flex-col justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Intake performance</p>
                <p className="mt-2 text-[26px] font-semibold text-[#111111]">
                  128 <span className="text-[13px] font-medium text-success">calls answered</span>
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[11.5px] text-ink-muted">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> 0 missed calls today
                </div>
              </div>

              {/* Financial Performance Stat */}
              <div className="rounded-xl bg-primary p-4 text-white flex-1 flex flex-col justify-center shadow-lift border border-primary">
                <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">Revenue recovered</p>
                <p className="mt-2 text-[26px] font-semibold text-white">
                  $184,220 <span className="text-[13px] font-medium text-accent">▲ 32%</span>
                </p>
                <p className="mt-1 text-[11.5px] text-white/70">
                  Rescued from missed phone calls
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Founding Member Ribbon Section */}
      <div className="mt-20 w-full border-y border-accent/20 bg-primary py-6 sm:py-8 animate-shine relative overflow-hidden">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left Column: Heading and description */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              First 2 months free for founding roofers.
            </h3>
            <p className="text-sm text-[#A3A3A3]">
              Claim your founding member spot before we open to the public.
            </p>
          </div>

          {/* Center Column: Visual spots remaining indicator */}
          <div className="flex flex-col gap-2 min-w-[200px] lg:min-w-[280px]">
            <div className="flex items-center justify-between text-xs font-semibold text-accent tracking-wider uppercase">
              <span>Spots remaining</span>
              <span className="text-white">19 of 25 left</span>
            </div>
            {/* Visual Progress Bar */}
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "76%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-accent/80 to-accent"
              />
            </div>
          </div>

          {/* Right Column: CTA */}
          <div>
            <a
              href="#demo"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[12px] bg-accent px-6 h-[48px] text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 text-primary transition-colors duration-300 flex items-center gap-2">
                Claim yours
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
      </div>
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
        className={`max-w-[90%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug ${
          isAi
            ? "rounded-tl-sm bg-surface-alt text-ink"
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