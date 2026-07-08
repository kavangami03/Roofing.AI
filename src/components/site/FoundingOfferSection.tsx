import { motion } from "framer-motion";
import { Check, Shield, Sparkles, ArrowRight } from "lucide-react";

export function FoundingOfferSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-slate-50 to-slate-50 pointer-events-none" />

      <div className="container-page max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Compact, Ultra-Premium Light Bento Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl lg:rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row"
        >
          {/* Subtle Grid inside card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Left Column: Copy */}
          <div className="flex-1 p-8 lg:p-12 xl:p-14 relative z-10 border-b md:border-b-0 md:border-r border-slate-100">
             
             <motion.div 
               animate={{ scale: [1, 1.02, 1] }} 
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08D45] shadow-sm"
             >
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               Founding Cohort, 19 of 25 left
             </motion.div>
             
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1, duration: 0.6 }}
               className="text-balance text-[44px] font-semibold leading-[0.8] tracking-[-0.03em] sm:text-[58px] text-[#111111] mb-5 max-w-5xl mx-auto"
             >
               Your first 2 months <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D45] to-accent drop-shadow-sm">are on us.</span>
             </motion.h2>
             
             <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="text-slate-600 text-[15px] lg:text-[16px] leading-relaxed mb-10 max-w-md font-medium"
             >
                Join the founding cohort and run your whole service desk free. Launch Max before the next storm and watch the inspections fill before a monthly bill starts.
             </motion.p>
             
             <div className="space-y-5">
                {[
                  "Run everything from day one",
                  "Founder-assisted tuning",
                  "Locked rate after onboarding",
                  "30-day money-back guarantee"
                ].map((item, i) => (
                  <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                     viewport={{ once: true }}
                     key={i} 
                     className="flex items-center gap-3.5 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                       <Check className="w-4 h-4 text-[#B08D45] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-slate-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Right Column: Pricing Panel */}
          <div className="w-full md:w-[380px] lg:w-[420px] shrink-0 bg-slate-50 relative z-10 p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
             
             {/* Internal Glow */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />
             
             <motion.h3 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-2.5"
             >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Sparkles className="text-accent w-6 h-6" /> 
                </motion.div>
                Founding Offer
             </motion.h3>
             
             <div className="space-y-8 mb-10 relative z-10">
                <motion.div 
                   whileHover={{ x: 6 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="flex items-center gap-5 cursor-default"
                >
                   <div className="text-4xl font-black text-[#B08D45] min-w-[90px] shrink-0">$0</div>
                   <div>
                      <div className="text-slate-900 font-bold text-[16px]">First 2 months</div>
                      <div className="text-slate-500 text-[14px] font-medium">then locked rate</div>
                   </div>
                </motion.div>
                
                <motion.div 
                   whileHover={{ x: 6 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="flex items-center gap-5 cursor-default"
                >
                   <div className="text-3xl font-black text-slate-800 min-w-[90px] shrink-0">$2.5k</div>
                   <div>
                      <div className="text-slate-900 font-bold text-[16px]">Setup included</div>
                      <div className="text-slate-500 text-[14px] font-medium">white-glove service</div>
                   </div>
                </motion.div>
                
                <motion.div 
                   whileHover={{ x: 6 }}
                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
                   className="flex items-center gap-5 cursor-default"
                >
                   <div className="text-3xl font-black text-slate-800 min-w-[90px] shrink-0">90<span className="text-[18px] text-slate-400 font-bold ml-0.5">days</span></div>
                   <div>
                      <div className="text-slate-900 font-bold text-[16px]">To prove it works</div>
                      <div className="text-slate-500 text-[14px] font-medium">cancel anytime</div>
                   </div>
                </motion.div>
             </div>
             
             <motion.button 
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.97 }}
               className="relative z-10 w-full group overflow-hidden rounded-2xl bg-slate-900 px-6 py-5 font-bold text-white shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-[#B08D45] to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
               <span className="relative flex items-center justify-center gap-2 text-[17px]">
                 Claim your spot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
             </motion.button>
             
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-6 text-center flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase tracking-widest relative z-10"
             >
                <Shield className="w-3.5 h-3.5" /> No risk, no setup fee
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
