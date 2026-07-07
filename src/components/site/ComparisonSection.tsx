import { motion } from "framer-motion";
import { ArrowDown, X, CheckCircle2 } from "lucide-react";

export function ComparisonSection() {
  const pairs = [
    {
      colSpan: "md:col-span-7",
      oldText: "Storm calls overflow and ring out",
      newText: "Every storm call answered in parallel, 24/7",
      delay: 0.1
    },
    {
      colSpan: "md:col-span-5",
      oldText: "After-hours leaks go to voicemail",
      newText: "Emergency leaks triaged and escalated",
      delay: 0.2
    },
    {
      colSpan: "md:col-span-4",
      oldText: "When's my crew coming? Calls jam the line",
      newText: "Job-status calls handled without your team",
      delay: 0.3
    },
    {
      colSpan: "md:col-span-4",
      oldText: "Open estimates never get a follow-up",
      newText: "Open estimates followed up automatically",
      delay: 0.4
    },
    {
      colSpan: "md:col-span-4",
      oldText: "Leads scattered across calls and texts",
      newText: "Every lead logged in your CRM",
      delay: 0.5
    }
  ];

  return (
    <section className="bg-[#FBFBFA] py-20 lg:py-32 border-t border-border overflow-hidden">
      <div className="container-page max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-border shadow-sm mb-6"
           >
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-ink-muted text-[10px] font-bold uppercase tracking-widest">Night and day</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl lg:text-5xl font-bold text-ink mb-5 leading-[1.1]"
           >
             Your phones today, vs.<br/>
             <span className="text-emerald-600">with Max.</span>
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-ink-muted text-[16px] leading-relaxed"
           >
              Same storms. Same crews. None of the missed calls.
           </motion.p>
        </div>

        {/* Transformation Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
           {pairs.map((pair, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: pair.delay }}
                 className={`bg-white border border-border rounded-[28px] p-6 lg:p-8 shadow-sm hover:shadow-elegant transition-all duration-300 group flex flex-col relative overflow-hidden ${pair.colSpan}`}
              >
                 {/* Subtle ambient gradient on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                 <div className="flex flex-col relative h-full z-10">
                    {/* The Old Way (Eliminated) */}
                    <div className="flex items-center gap-4 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                       <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 relative z-10">
                          <X className="w-4 h-4 text-ink-muted" />
                       </div>
                       <p className="text-[14px] lg:text-[15px] text-ink-muted line-through decoration-ink-muted/50 font-medium">{pair.oldText}</p>
                    </div>

                    {/* Mathematically Centered Vertical Connecting Line */}
                    <div className="absolute left-[19px] top-[40px] bottom-[40px] w-[2px] bg-border z-0" />

                    {/* Transformation Arrow Node */}
                    <div className="py-6 relative z-10 flex items-center">
                       <div className="w-10 h-10 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
                             <ArrowDown className="w-3 h-3 text-ink-muted" />
                          </div>
                       </div>
                    </div>

                    {/* The New Way (Max) */}
                    <div className="flex items-center gap-4 mt-auto relative z-10">
                       <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                       </div>
                       <p className="text-[18px] lg:text-[20px] font-bold text-ink leading-snug tracking-tight">{pair.newText}</p>
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
