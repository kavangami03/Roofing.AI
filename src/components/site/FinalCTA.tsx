import { ArrowRight, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-background py-24 text-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[520px] translate-x-1/3 translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] max-w-5xl mx-auto"
          >
            Answer the next storm <span className="text-accent">before your competition does.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[#5F5F5F]">
            25-minute walkthrough with our roofing team. Bring your call volume. Leave with a live ROI number and a launch plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#book"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-primary px-6 h-[56px] text-[15px] font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-primary transition-colors duration-300">
                Book a live demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <a
              href="tel:+18005551234"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[14px] border border-primary bg-transparent px-6 h-[56px] text-[15px] font-semibold text-primary transition-all hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 text-primary transition-colors duration-300">
                <PhoneCall className="h-4 w-4 text-primary group-hover:text-primary transition-colors duration-300" /> Call our AI now
              </span>
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-ink-muted">
            <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> SOC 2 Type II</li>
            <li className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Live in under a week</li>
            <li className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4 text-accent" /> No phone port required</li>
          </ul>
        </div>
      </div>
    </section>
  );
}