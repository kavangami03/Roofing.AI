import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Truck,
  PhoneOutgoing,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  Calendar,
  Volume2,
  AlertTriangle,
  Clock,
  Zap,
} from "lucide-react";

export function ServiceDeskJobs() {
  const [calls, setCalls] = useState(128);
  const [rev, setRev] = useState(184);

  // Live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCalls((c) => (c < 140 ? c + 1 : 120));
      setRev((r) => (r < 200 ? r + 2 : 170));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Spotlight mouse effect
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050507] py-24 lg:py-36" id="jobs">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px] mix-blend-screen" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-blue-900/10 blur-[180px] mix-blend-screen" />

      <div
        className="container-page relative z-10"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-accent backdrop-blur-md">
            <Zap className="h-4 w-4" /> One service desk, every call
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything your phones need, <br className="hidden md:block" />
            handled by one AI agent.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60 md:text-xl">
            Nine jobs Max does on every call, so no storm lead, inspection or
            follow-up slips through the cracks.
          </p>
        </motion.div>

        {/* HIGH-FIDELITY BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {/* Global Grid Spotlight (Follows Mouse on Desktop) */}
          <div
            className="pointer-events-none absolute -inset-px z-30 hidden rounded-[32px] transition-opacity duration-300 xl:block"
            style={{
              background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
            }}
          />

          {/* CARD 1: Answers every call (2x2) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-white/5 md:col-span-2 xl:col-span-2 row-span-2 shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/roofer_work.png"
                alt="Professional Roofer"
                className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/20 via-[#050507]/80 to-[#050507]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-12 p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                  Featured
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-xl backdrop-blur-md">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                  Answers every call
                </h3>
                <p className="max-w-md text-base leading-relaxed text-white/70">
                  Picks up 24/7, after hours, during storms, at overflow. Every
                  line answered in parallel, never a voicemail.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Captures storm leads (1x2) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 xl:col-span-1 row-span-2"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/storm_hail.png"
                alt="Storm Hail"
                className="h-full w-full object-cover opacity-40 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/70 to-[#050507]/20" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(248,113,113,0.1)]">
                  Featured
                </div>
              </div>
              <div className="mt-12">
                <AlertTriangle className="mb-5 h-8 w-8 text-[#F22F46]" />
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Captures storm leads
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  When the hail hits, Max takes the address and damage from
                  every caller and turns the surge into booked inspections.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Books inspections (1x2) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 xl:col-span-1 row-span-2"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/calendar_schedule.png"
                alt="Calendar Schedule"
                className="h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-[#050507]/20" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                  Featured
                </div>
              </div>
              <div className="mt-12">
                <Calendar className="mb-5 h-8 w-8 text-accent" />
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Books inspections & estimates
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  Checks crew availability, books the inspection or estimate
                  into your real calendar, and confirms by text.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Triages emergency leaks (2x1) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col items-start gap-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-center md:col-span-2 xl:col-span-2 row-span-1 hover:bg-white/10 transition-colors duration-500"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#F22F46]/20 bg-[#F22F46]/10">
              <Droplet className="h-8 w-8 text-[#F22F46]" />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                Triages emergency leaks
              </h3>
              <p className="text-sm text-white/70">
                An active leak is flagged high urgency, the address captured,
                and it's escalated to your on-call crew right away.
              </p>
            </div>
            {/* Animated pulse indicator */}
            <div className="absolute right-8 top-8 hidden items-center gap-2 rounded-full border border-[#F22F46]/20 bg-[#F22F46]/10 px-4 py-2 sm:flex">
              <span className="h-2.5 w-2.5 animate-ping rounded-full bg-[#F22F46]" />
              <span className="text-xs font-bold text-[#F22F46]">
                Active Escalation
              </span>
            </div>
          </motion.div>

          {/* CARD 5: Handles job-status calls (1x1) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 transition-colors duration-500 hover:bg-white/10 xl:col-span-1 row-span-1"
          >
            <Truck className="mb-5 h-8 w-8 text-accent" />
            <h3 className="mb-3 text-xl font-bold text-white">
              Handles job-status calls
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              When a homeowner asks "when is my crew arriving?", Max checks the
              schedule and tells them instantly.
            </p>
          </motion.div>

          {/* CARD 6: Outbound follow-up (1x1) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 transition-colors duration-500 hover:bg-white/10 xl:col-span-1 row-span-1"
          >
            <PhoneOutgoing className="mb-5 h-8 w-8 text-success" />
            <h3 className="mb-3 text-xl font-bold text-white">
              Outbound follow-up
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Missed-call text-backs, estimate reminders, and post-storm
              outreach. Max does all the busywork.
            </p>
          </motion.div>

          {/* CARD 7: Voice, SMS, Chat (2x1) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 md:col-span-2 xl:col-span-2 row-span-1 hover:bg-white/10 transition-colors duration-500"
          >
            <div className="relative z-10 max-w-sm">
              <MessageCircle className="mb-5 h-8 w-8 text-white" />
              <h3 className="mb-3 text-2xl font-bold text-white">
                Voice, SMS, Chat & WhatsApp
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                One central AI brain operating seamlessly across phone calls,
                web chats, texts, and WhatsApp.
              </p>
            </div>
            {/* Background animated graphic */}
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex w-1/2 items-center justify-end pr-10 opacity-20">
              <div className="flex gap-4">
                <div className="flex h-16 w-16 animate-[bounce_3s_infinite] items-center justify-center rounded-full border border-white/30 bg-white/5">
                  <Volume2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex h-16 w-16 animate-[bounce_3s_infinite_0.5s] items-center justify-center rounded-full border border-white/30 bg-white/5">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 8: Records & Scores (2x2) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 md:col-span-2 xl:col-span-2 row-span-2"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/audio_waveform.png"
                alt="Audio Waveform"
                className="h-full w-full object-cover opacity-30 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-[#050507]/10" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/20 backdrop-blur-md">
                  <Volume2 className="h-7 w-7 text-accent" />
                </div>
              </div>
              <div className="mt-12">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  Records and scores calls
                </h3>
                <p className="max-w-sm text-base leading-relaxed text-white/70">
                  Every call recorded and transcribed. Max scores every
                  conversation on quality, giving you an exact pulse on
                  performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 9: Shows your numbers (2x1) */}
          <motion.div
            variants={cardVariants}
            className="group relative col-span-1 flex flex-col items-center justify-between gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 sm:flex-row md:col-span-2 xl:col-span-2 row-span-1 hover:bg-white/10 transition-colors duration-500"
          >
            <div className="flex-1">
              <BarChart3 className="mb-5 h-8 w-8 text-accent" />
              <h3 className="mb-3 text-2xl font-bold text-white">
                Shows your numbers
              </h3>
              <p className="max-w-xs text-sm text-white/70 leading-relaxed">
                View answered calls, booked inspections, captured storm leads,
                and exact revenue impact.
              </p>
            </div>

            <div className="flex w-full gap-4 sm:w-auto">
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:w-36">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                  Calls Taken
                </p>
                <p className="font-mono text-4xl font-bold text-white">
                  {calls}
                </p>
              </div>
              <div className="flex-1 rounded-2xl border border-accent/20 bg-accent/10 p-5 text-center sm:w-36">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-accent">
                  Revenue
                </p>
                <p className="font-mono text-4xl font-bold text-accent">
                  ${rev}k
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
