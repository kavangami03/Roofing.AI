import { motion } from "framer-motion";
import { 
  Check, X, Sparkles, Voicemail, Users, Bot, 
  PhoneCall, Zap, Calendar, MapPin, AlertCircle, 
  Truck, RefreshCcw, Database, MessageSquare 
} from "lucide-react";
import React from "react";

export function ComparisonSection() {
  const features = [
    { label: "Answers every call 24/7", icon: PhoneCall, voicemail: "—", human: "Sometimes (extra fees)", max: "Yes" },
    { label: "Handles a storm surge in parallel", icon: Zap, voicemail: "—", human: "Limited lines", max: "Unlimited" },
    { label: "Books inspections into your calendar", icon: Calendar, voicemail: "—", human: "Takes a message", max: "Automatically" },
    { label: "Captures address and damage", icon: MapPin, voicemail: "—", human: "Sometimes", max: "Yes" },
    { label: "Triages emergency leaks", icon: AlertCircle, voicemail: "—", human: "Varies", max: "Yes" },
    { label: "Dispatches the right crew", icon: Truck, voicemail: "—", human: "—", max: "Yes" },
    { label: "Outbound estimate follow-up", icon: RefreshCcw, voicemail: "—", human: "—", max: "Yes" },
    { label: "Logs leads in your CRM", icon: Database, voicemail: "—", human: "—", max: "Automatically" },
    { label: "Voice, chat, SMS and WhatsApp", icon: MessageSquare, voicemail: "—", human: "Voice only", max: "All channels" },
  ];

  const renderValue = (val: string, type: 'voicemail' | 'human' | 'max') => {
    if (val === "—") {
      return <X className="w-4 h-4 mx-auto text-white/20" strokeWidth={2.5} />;
    }
    
    if (type === 'max') {
      return (
        <div className="flex items-center justify-center gap-2">
          {val === "Yes" ? (
            <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center shadow-[0_0_15px_rgba(204,170,102,0.15)]">
               <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
            </div>
          ) : (
            <span className="text-[14px] font-bold text-accent drop-shadow-sm">{val}</span>
          )}
        </div>
      );
    }

    return <span className="font-medium text-white/50 text-[14px]">{val}</span>;
  };

  return (
    <section className="bg-[#111111] py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
      {/* Immersive Dark Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

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
             <span className="text-accent drop-shadow-sm">The autonomous way.</span>
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

        {/* Ultra-Premium Glassmorphic Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[2rem] lg:rounded-[3rem] bg-[#1A1A1A]/60 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-x-auto lg:overflow-visible p-6 lg:p-10"
        >
           {/* Desktop Grid Layout */}
           <div className="min-w-[900px] grid grid-cols-[1.5fr_1fr_1fr_1.2fr] relative">
              
              {/* Header Row */}
              <div className="pb-8 flex items-end">
                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 ml-4">Capabilities</span>
              </div>
              
              <div className="pb-8 flex flex-col items-center justify-end gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center opacity-50">
                    <Voicemail className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-[15px] font-semibold text-white/60">Voicemail</span>
              </div>
              
              <div className="pb-8 flex flex-col items-center justify-end gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center opacity-50">
                    <Users className="w-5 h-5 text-white" />
                 </div>
                 <span className="text-[15px] font-semibold text-white/60">Answering Service</span>
              </div>
              
              <div className="pb-8 flex flex-col items-center justify-end gap-4 relative">
                 {/* Highlight Column Backdrop (Header part) */}
                 <div className="absolute inset-x-0 -top-6 lg:-top-10 bottom-0 bg-accent/[0.04] border-x border-t border-accent/20 rounded-t-3xl shadow-[inset_0_20px_40px_rgba(204,170,102,0.05)]" />
                 <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="absolute -top-5 bg-accent text-[#111] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(204,170,102,0.4)] flex items-center gap-1.5">
                       <Sparkles className="w-3 h-3" /> Max
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 shadow-[0_0_30px_rgba(204,170,102,0.3)] flex items-center justify-center mt-2 border border-accent/50 text-[#111]">
                       <Bot className="w-7 h-7" />
                    </div>
                    <span className="text-[18px] font-bold text-accent drop-shadow-md tracking-tight">SuperMIA</span>
                 </div>
              </div>

              {/* Data Rows */}
              {features.map((feature, i) => (
                <React.Fragment key={i}>
                  <div className={`py-5 flex items-center gap-4 border-b border-white/5 ml-4 relative z-10 group-hover:bg-white/[0.02] ${i === features.length - 1 ? 'border-none' : ''}`}>
                     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <feature.icon className="w-4 h-4 text-white/40" />
                     </div>
                     <span className="text-[15px] font-medium text-white/90">{feature.label}</span>
                  </div>
                  
                  <div className={`py-5 flex items-center justify-center border-b border-white/5 relative z-10 ${i === features.length - 1 ? 'border-none' : ''}`}>
                    {renderValue(feature.voicemail, 'voicemail')}
                  </div>
                  
                  <div className={`py-5 flex items-center justify-center border-b border-white/5 relative z-10 ${i === features.length - 1 ? 'border-none' : ''}`}>
                    {renderValue(feature.human, 'human')}
                  </div>
                  
                  <div className={`py-5 flex items-center justify-center relative ${i === features.length - 1 ? '' : 'border-b border-accent/10'}`}>
                    {/* Highlight Column Backdrop (Row part) */}
                    <div className="absolute inset-0 bg-accent/[0.04] border-x border-accent/20" />
                    <div className="relative z-10 w-full flex justify-center">
                       {renderValue(feature.max, 'max')}
                    </div>
                  </div>
                </React.Fragment>
              ))}

              {/* Bottom Cost Row */}
              <div className="col-span-4 mt-6">
                 <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] rounded-2xl bg-[#111] border border-white/10 shadow-lg overflow-hidden relative">
                    <div className="py-6 px-6 lg:px-8 flex items-center border-r border-white/5">
                       <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-white/50">Cost to scale</span>
                    </div>
                    
                    <div className="py-6 px-4 flex items-center justify-center border-r border-white/5">
                       <span className="font-medium text-white/40 text-[14px]">Free, but loses jobs</span>
                    </div>
                    
                    <div className="py-6 px-4 flex items-center justify-center border-r border-accent/20">
                       <span className="font-medium text-white/40 text-[14px]">Per-minute / per-call</span>
                    </div>
                    
                    <div className="py-6 px-4 flex items-center justify-center relative">
                       {/* Highlight Column Backdrop (Footer part) */}
                       <div className="absolute inset-0 bg-accent/[0.08]" />
                       <div className="absolute top-0 inset-x-0 h-px bg-accent/20" />
                       <div className="relative z-10 flex items-center justify-center w-full">
                          <span className="text-[15px] font-black text-accent drop-shadow-sm uppercase tracking-[0.1em]">Flat, no new hires</span>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </motion.div>
      </div>
    </section>
  );
}
