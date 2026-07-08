import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-white py-20 lg:py-24 relative overflow-hidden">
      {/* Super Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] pointer-events-none" />

      <div className="container-page max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Limited Availability
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Be the roofer who <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D45] to-accent">answers first.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-[17px] md:text-[19px] text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
            Book a 15-minute demo. We'll set Max up on your real services and service area so you can hear it answer a storm call and book the inspection, before the next hailstorm rolls in.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <button className="w-full sm:w-auto group relative overflow-hidden rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-[#B08D45]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B08D45] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-[16px]">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            {/* Secondary Button */}
            <button className="w-full sm:w-auto group rounded-full bg-white border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-3">
              <Play className="w-4 h-4 text-slate-400 group-hover:text-[#B08D45] transition-colors" fill="currentColor" />
              <span className="text-[16px]">Replay the live demo</span>
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-[13px] font-bold uppercase tracking-widest w-full">
            <ShieldCheck className="w-4 h-4 text-[#B08D45]" />
            First 2 months free, no setup fee, cancel anytime
          </div>

        </motion.div>
      </div>
    </section>
  );
}
