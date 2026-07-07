import { ArrowRight, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[520px] translate-x-1/3 translate-y-1/3 rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[64px]"
          >
            Answer the next storm <span className="text-accent">before your competition does.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
            25-minute walkthrough with our roofing team. Bring your call volume. Leave with a live ROI number and a launch plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5"
            >
              Book a live demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" /> Call our AI now
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-white/60">
            <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> SOC 2 Type II</li>
            <li className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Live in under a week</li>
            <li className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4 text-accent" /> No phone port required</li>
          </ul>
        </div>
      </div>
    </section>
  );
}