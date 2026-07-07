import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function CaseStudySection() {
  return (
    <section className="py-12 lg:py-16 bg-[#021A10] relative overflow-hidden border-t border-emerald-900/30">
      
      {/* Elegant Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#021A10] to-[#021A10] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-page max-w-5xl mx-auto relative z-10">
          
          {/* 1. Introductory Narrative */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-4"
             >
                Case Result — Summit Ridge Roofing
             </motion.div>
             <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.1]"
             >
                Same storms.<br/>
                <span className="text-emerald-300">Different booking sheet.</span>
             </motion.h2>
             <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-emerald-50/60 text-[15px] lg:text-[17px] leading-relaxed max-w-2xl mx-auto"
             >
                What changes when no call goes unanswered during the surge? A roofing company put Max on storm overflow and after-hours. The phones stopped overflowing, and the surge that used to leak jobs to competitors filled the calendar instead.
             </motion.p>
          </div>

          {/* 2. The Core Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16 border-y border-emerald-800/30 py-8 lg:py-10 relative">
             {/* Decorative dividing lines */}
             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-emerald-800/30 md:hidden" />
             <div className="hidden md:block absolute left-1/4 -translate-x-1/2 top-0 w-px h-full bg-emerald-800/30" />
             <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-emerald-800/30" />
             <div className="hidden md:block absolute left-3/4 -translate-x-1/2 top-0 w-px h-full bg-emerald-800/30" />
             
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center px-2">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">+38<span className="text-2xl text-emerald-400">%</span></div>
                <div className="text-emerald-200/70 text-[12px] lg:text-[13px] font-medium leading-snug">More inspections booked</div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center px-2">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">100<span className="text-2xl text-emerald-400">%</span></div>
                <div className="text-emerald-200/70 text-[12px] lg:text-[13px] font-medium leading-snug">Storm calls answered</div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center px-2">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">&lt; 1</div>
                <div className="text-emerald-200/70 text-[12px] lg:text-[13px] font-medium leading-snug">Ring average pickup</div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center px-2">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">$0</div>
                <div className="text-emerald-200/70 text-[12px] lg:text-[13px] font-medium leading-snug">Extra staff hired</div>
             </motion.div>
          </div>

          {/* 3. The Massive Testimonial */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="max-w-4xl mx-auto text-center relative"
          >
             <Quote className="absolute -top-10 lg:-top-12 left-1/2 -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 text-emerald-900/50" />
             <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8 relative z-10 tracking-tight">
                "After the last hailstorm we booked a full month of inspections in two days, without missing a call. We used to lose half the storm to voicemail and the other guys. Now every caller gets answered and booked, and we walk into a packed inspection schedule. It paid for itself in one storm."
             </h3>
             <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-800 to-[#021A10] flex items-center justify-center text-emerald-300 font-bold border border-emerald-700/50 shadow-xl">
                   SR
                </div>
                <div className="text-left">
                   <div className="text-white font-bold text-[14px] tracking-wide">Summit Ridge Roofing</div>
                   <div className="text-emerald-500 text-[10px] uppercase tracking-[0.15em] font-bold mt-1">Dallas, TX</div>
                </div>
             </div>
          </motion.div>

      </div>
    </section>
  );
}
