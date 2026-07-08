import { motion } from "framer-motion";
import { 
  Check, X, Sparkles, Voicemail, Users, Bot 
} from "lucide-react";
import React from "react";

export function ComparisonSection() {
  const features = [
    { label: "Answers every call 24/7", voicemail: "—", human: "Sometimes", max: "Yes" },
    { label: "Handles a storm surge in parallel", voicemail: "—", human: "Limited lines", max: "Unlimited" },
    { label: "Books inspections into your calendar", voicemail: "—", human: "Takes a message", max: "Automatically" },
    { label: "Captures address and damage", voicemail: "—", human: "Sometimes", max: "Yes" },
    { label: "Triages emergency leaks", voicemail: "—", human: "Varies", max: "Yes" },
    { label: "Dispatches the right crew", voicemail: "—", human: "—", max: "Yes" },
    { label: "Outbound estimate follow-up", voicemail: "—", human: "—", max: "Yes" },
    { label: "Logs leads in your CRM", voicemail: "—", human: "—", max: "Automatically" },
    { label: "Voice, chat, SMS and WhatsApp", voicemail: "—", human: "Voice only", max: "All channels" },
    { label: "Cost to scale", voicemail: "Free, but loses jobs", human: "Per-minute / per-call", max: "Flat, no new hires", isFooter: true },
  ];

  return (
    <section className="bg-[#050505] py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
      {/* Immersive Dark Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="container-page max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent shadow-sm"
           >
             <Sparkles className="w-3.5 h-3.5" /> Comparison
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]"
           >
             The old way vs. <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45] drop-shadow-sm">The autonomous way.</span>
           </motion.h2>
           
           <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/50 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto"
           >
              Where an AI agent fits next to the alternatives most roofers already use.
           </motion.p>
        </div>

        {/* Column-based Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-x-auto lg:overflow-visible pb-10"
        >
           <div className="min-w-[900px] flex items-stretch justify-between relative px-4 lg:px-0">
              
              {/* 1. Capabilities Column */}
              <div className="flex-1 flex flex-col justify-end pt-28 border-r border-white/5 pr-6">
                 {features.map((f, i) => (
                    <div key={i} className={`flex items-center h-[72px] ${f.isFooter ? 'mt-6 border-t border-white/10 pt-2 h-[80px]' : ''}`}>
                       <span className={`text-[15px] ${f.isFooter ? 'font-bold uppercase tracking-[0.15em] text-white/50' : 'font-medium text-white/90'}`}>
                          {f.label}
                       </span>
                    </div>
                 ))}
              </div>

              {/* 2. Voicemail Column */}
              <div className="w-[200px] flex flex-col items-center pt-8 border-r border-white/5 px-4">
                 <div className="flex flex-col items-center justify-center h-28 mb-4 opacity-50">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                       <Voicemail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[15px] font-semibold text-white/60">Voicemail</span>
                 </div>
                 {features.map((f, i) => (
                    <div key={i} className={`flex items-center justify-center h-[72px] w-full ${f.isFooter ? 'mt-6 border-t border-white/10 pt-2 h-[80px]' : ''}`}>
                       {f.voicemail === "—" ? <X className="w-4 h-4 text-white/20" strokeWidth={2.5} /> : <span className="font-medium text-white/50 text-[14px] text-center leading-tight">{f.voicemail}</span>}
                    </div>
                 ))}
              </div>

              {/* 3. Answering Service Column */}
              <div className="w-[200px] flex flex-col items-center pt-8 px-4 lg:mr-8">
                 <div className="flex flex-col items-center justify-center h-28 mb-4 opacity-50">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                       <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[15px] font-semibold text-white/60 text-center leading-tight">Answering Service</span>
                 </div>
                 {features.map((f, i) => (
                    <div key={i} className={`flex items-center justify-center h-[72px] w-full ${f.isFooter ? 'mt-6 border-t border-white/10 pt-2 h-[80px]' : ''}`}>
                       {f.human === "—" ? <X className="w-4 h-4 text-white/20" strokeWidth={2.5} /> : <span className="font-medium text-white/50 text-[14px] text-center leading-tight">{f.human}</span>}
                    </div>
                 ))}
              </div>

              {/* 4. SuperMIA (The Premium Elevated Card) */}
              <div className="w-[300px] bg-[#0a0a0a] border border-accent/30 rounded-[2rem] shadow-[0_30px_100px_rgba(204,170,102,0.15)] flex flex-col items-center pt-8 pb-4 px-6 relative -mt-6 mb-[-20px] z-20 before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/[0.08] before:to-transparent before:rounded-[2rem] before:pointer-events-none transform transition-transform hover:-translate-y-2 duration-500">
                 <div className="absolute -top-5 bg-accent text-[#111] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-[0_0_20px_rgba(204,170,102,0.5)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Max
                 </div>
                 
                 <div className="flex flex-col items-center justify-center h-28 mb-4 mt-2 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4b46a] to-[#B08D45] shadow-[0_0_30px_rgba(204,170,102,0.4)] flex items-center justify-center mb-3 border border-[#fff]/20 text-[#111]">
                       <Bot className="w-8 h-8" />
                    </div>
                    <span className="text-[22px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4b46a] to-[#B08D45] drop-shadow-md tracking-tight">SuperMIA</span>
                 </div>
                 
                 {features.map((f, i) => (
                    <div key={i} className={`flex items-center justify-center h-[72px] w-full relative z-10 ${f.isFooter ? 'mt-6 border-t border-accent/20 pt-2 h-[80px]' : i === features.length - 2 ? 'border-none' : 'border-b border-white/5'}`}>
                       {f.max === "Yes" ? (
                          <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shadow-[0_0_15px_rgba(204,170,102,0.2)]">
                             <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                          </div>
                       ) : (
                          <span className={`text-center font-bold drop-shadow-sm ${f.isFooter ? 'text-accent text-[16px] font-black uppercase tracking-[0.1em]' : 'text-accent text-[15px]'}`}>
                             {f.max}
                          </span>
                       )}
                    </div>
                 ))}
              </div>

           </div>
        </motion.div>
      </div>
    </section>
  );
}
