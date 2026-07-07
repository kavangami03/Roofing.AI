import { motion } from "framer-motion";
import { 
  Network, Database, 
  DatabaseZap, PhoneForwarded, Mic, Globe
} from "lucide-react";

export function SolutionSection() {
  return (
    <section className="bg-[#050505] py-12 lg:py-16 border-t border-white/5 overflow-hidden">
      <div className="container-page max-w-[1300px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
           
           {/* Left Column: Hero Text (Span 4) */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-4 lg:sticky lg:top-24"
           >
               <span className="inline-block text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                 The Solution
               </span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-[1.1]">
                 Meet Max, your AI roofing service desk.
               </h2>
               <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                  An AI answering service built for roofing call flows, not generic chat. It captures the address, the roof type and the damage, books the inspection, triages emergency leaks, and dispatches your crew.
               </p>
           </motion.div>

           {/* Right Column: Dense Feature Grids (Span 8) */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              
              {/* Panel 1: Built for Roofing (Playbook Sequence) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#111111] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                 
                 <div className="relative z-10 flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                       <Network className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                       <h3 className="text-[17px] font-bold text-white">Built for roofing</h3>
                       <p className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest">Runs your exact playbook</p>
                    </div>
                 </div>

                 {/* Playbook Sequence Line */}
                 <div className="relative z-10 pl-8 space-y-3 mt-6">
                    <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500/50 to-white/5 rounded-full" />
                    
                    {[
                      "Answers every inbound call 24/7, including storm surges and after hours",
                      "Books inspections and estimates into your real calendar",
                      "Captures address, roof type and damage so the crew arrives prepared",
                      "Triages emergency leaks as high urgency and offers the earliest slot"
                    ].map((text, i) => (
                      <div key={i} className="relative bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.04] transition-colors group">
                         <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 h-[10px] w-[10px] rounded-full bg-[#111] border-2 border-emerald-400 ring-2 ring-[#111] group-hover:scale-125 transition-transform" />
                         <span className="text-white/80 text-[12.5px] leading-snug block">{text}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>

              {/* Panel 2: No lead dropped (Data Logs) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#111111] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                 
                 <div className="relative z-10 flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                       <Database className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                       <h3 className="text-[17px] font-bold text-white">No lead dropped</h3>
                       <p className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest">Cleaner records than a notepad</p>
                    </div>
                 </div>

                 {/* CRM Logs List */}
                 <ul className="relative z-10 space-y-3 mt-6">
                    {[
                      { icon: DatabaseZap, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", text: "Writes every storm lead and inspection to your CRM" },
                      { icon: PhoneForwarded, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", text: "Warm-transfers complex jobs to your team with a full summary" },
                      { icon: Mic, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", text: "Records, transcribes and scores every call for review" },
                      { icon: Globe, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", text: "Speaks English and Spanish, auto-detecting on the call" },
                    ].map((log, i) => (
                      <li key={i} className="flex gap-3 items-center bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors hover:scale-[1.01] duration-300">
                         <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border ${log.bg} ${log.border}`}>
                            <log.icon className={`w-3.5 h-3.5 ${log.color}`} />
                         </div>
                         <span className="text-white/80 text-[12.5px] leading-snug">{log.text}</span>
                      </li>
                    ))}
                 </ul>
              </motion.div>

           </div>
        </div>
      </div>
    </section>
  );
}