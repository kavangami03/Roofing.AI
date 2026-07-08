import { motion } from "framer-motion";
import { 
  CalendarClock, MessageSquareReply, Send, 
  Check, PhoneMissed, FileText, Clock, CheckCircle2,
  Zap
} from "lucide-react";

export function AutomationSection() {
  return (
    <section className="bg-white py-12 lg:py-16 border-t border-border overflow-hidden">
      <div className="container-page">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-10 mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border shadow-sm text-ink-muted text-[11px] font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3 h-3 text-accent fill-accent" /> Automation
          </div>
          
          <h2 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] mb-4 mx-auto">
            No missed surge.<br/>
            <span className="text-ink-muted">No lost leads. No phone tag.</span>
          </h2>
          
          <p className="text-[15px] text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Max doesn't help your team work harder, it removes the busywork entirely. Every incoming call is handled, missed calls are instantly recovered, and open estimates are followed up on automatically.
          </p>
        </div>

        {/* 3-Column Feature Cards Array */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           
           {/* Card 1: Inspection Booked */}
           <motion.div 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
           >
              {/* Visualizer Header */}
              <div className="bg-[#FBFBFA] h-[200px] p-4 border-b border-border flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                 <CalendarVisualizer />
              </div>
              
              {/* Text Body */}
              <div className="p-5 flex flex-col flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CalendarClock className="w-4 h-4" />
                   </div>
                   <h3 className="text-[17px] font-bold text-ink">Inspection booked</h3>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 bg-accent/10 w-fit px-2 py-1 rounded border border-accent/20">While your crew works</p>
                 <p className="text-[13px] text-ink-muted leading-relaxed mt-auto">Captured, qualified and booked into your real calendar, no callback, no message slip, no double entry.</p>
              </div>
           </motion.div>

           {/* Card 2: Lead Recovered */}
           <motion.div 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ delay: 0.1 }}
             className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
           >
              {/* Visualizer Header */}
              <div className="bg-[#FBFBFA] h-[200px] p-4 border-b border-border flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                 <TextBackVisualizer />
              </div>
              
              {/* Text Body */}
              <div className="p-5 flex flex-col flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquareReply className="w-4 h-4" />
                   </div>
                   <h3 className="text-[17px] font-bold text-ink">Lead recovered</h3>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 bg-accent/10 w-fit px-2 py-1 rounded border border-accent/20">Instant missed-call text-back</p>
                 <p className="text-[13px] text-ink-muted leading-relaxed mt-auto">Missed a call mid-job? Max texts back instantly so the storm lead never goes cold and calls a competitor.</p>
              </div>
           </motion.div>

           {/* Card 3: Estimate Followed Up */}
           <motion.div 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ delay: 0.2 }}
             className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
           >
              {/* Visualizer Header */}
              <div className="bg-[#FBFBFA] h-[200px] p-4 border-b border-border flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                 <FollowUpVisualizer />
              </div>
              
              {/* Text Body */}
              <div className="p-5 flex flex-col flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Send className="w-4 h-4" />
                   </div>
                   <h3 className="text-[17px] font-bold text-ink">Estimate followed up</h3>
                 </div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 bg-accent/10 w-fit px-2 py-1 rounded border border-accent/20">Follow-up on autopilot</p>
                 <p className="text-[13px] text-ink-muted leading-relaxed mt-auto">Outbound reminders nudge open estimates and post-storm leads to a decision, automatically.</p>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}

/* =========================================
   Standalone Interactive Visualizers (COMPRESSED)
   ========================================= */

function CalendarVisualizer() {
  return (
    <div className="w-full flex flex-col gap-2 max-w-[260px] relative z-10 scale-[0.9]">
      <div className="flex justify-between items-center text-ink-muted text-[10px] font-bold uppercase tracking-widest mb-1 px-1">
        <span>Today</span>
        <span>Oct 24</span>
      </div>
      <div className="flex gap-2.5 items-center">
        <span className="text-[10px] font-medium text-ink-muted w-11 text-right">8:00 AM</span>
        <div className="flex-1 h-9 rounded-lg border border-border bg-white shadow-sm" />
      </div>
      <div className="flex gap-2.5 items-center">
        <span className="text-[10px] font-bold text-accent w-11 text-right">9:00 AM</span>
        <div className="flex-1 h-9 rounded-lg border border-accent/30 bg-accent/10 relative overflow-hidden shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "100%" }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
            className="absolute inset-y-0 left-0 bg-accent/20" 
          />
          <div className="relative z-10 flex items-center h-full px-2.5 gap-2">
            <Check className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold text-accent">Insp: D. Foster</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        <span className="text-[10px] font-medium text-ink-muted w-11 text-right">10:00 AM</span>
        <div className="flex-1 h-9 rounded-lg border border-border bg-white shadow-sm" />
      </div>
    </div>
  );
}

function TextBackVisualizer() {
  return (
    <div className="w-full flex flex-col gap-3 max-w-[260px] relative z-10 scale-[0.95]">
      {/* Incoming Call */}
      <div className="bg-white border border-danger/20 shadow-sm rounded-xl p-2.5 flex items-center gap-3 w-[85%] self-start">
        <div className="w-6 h-6 rounded-full bg-danger/10 flex items-center justify-center shrink-0">
          <PhoneMissed className="w-3 h-3 text-danger" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-danger uppercase tracking-widest mb-0.5">Missed Call</p>
          <p className="text-[11px] font-bold text-ink">From: (555) 019-2834</p>
        </div>
      </div>
      
      {/* Instant Text Back */}
      <motion.div 
        initial={{ y: 15, opacity: 0, scale: 0.95 }} 
        whileInView={{ y: 0, opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 25 }}
        className="bg-accent text-[#111] rounded-xl rounded-tr-sm p-3 w-[90%] self-end shadow-md relative group-hover:-translate-y-1 transition-transform duration-300"
      >
        <p className="text-[11px] leading-relaxed font-semibold">Sorry we missed you! We're on a roof right now. Are you calling about storm damage?</p>
        <div className="mt-2 flex items-center justify-end gap-1.5 opacity-90">
          <Zap className="w-2.5 h-2.5 fill-[#111] text-[#111]" />
          <p className="text-[8px] font-bold uppercase tracking-widest text-[#111]">Sent instantly</p>
        </div>
      </motion.div>
    </div>
  );
}

function FollowUpVisualizer() {
  return (
    <div className="w-full flex flex-col items-center max-w-[260px] relative z-10 pt-1 scale-[0.95]">
      <div className="bg-white border border-border shadow-sm rounded-xl p-2 w-full flex items-center gap-3 z-10 relative">
        <div className="w-6 h-6 rounded-full bg-surface-alt flex items-center justify-center shrink-0 border border-border">
          <FileText className="w-3 h-3 text-ink-muted" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-ink-muted uppercase tracking-widest mb-0.5">Step 1</p>
          <span className="text-[11px] font-bold text-ink">Estimate Sent</span>
        </div>
      </div>
      
      <div className="w-px h-3.5 bg-border relative">
        <motion.div 
          initial={{ scaleY: 0 }} 
          whileInView={{ scaleY: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }} 
          className="absolute inset-0 bg-accent origin-top" 
        />
      </div>
      
      <div className="bg-accent/10 border border-accent/20 shadow-sm rounded-xl p-2 w-full flex items-center gap-3 z-10 relative">
        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
          <Clock className="w-3 h-3 text-accent" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-accent uppercase tracking-widest mb-0.5">Day 2</p>
          <span className="text-[11px] font-bold text-ink">Auto Follow-up Text</span>
        </div>
      </div>

      <div className="w-px h-3.5 bg-border relative">
        <motion.div 
          initial={{ scaleY: 0 }} 
          whileInView={{ scaleY: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }} 
          className="absolute inset-0 bg-accent origin-top" 
        />
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        whileInView={{ scale: 1, opacity: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }} 
        className="bg-accent shadow-md rounded-xl p-2 w-full flex items-center gap-3 z-10 relative group-hover:scale-[1.03] transition-transform duration-300"
      >
        <div className="w-6 h-6 rounded-full bg-[#111]/20 flex items-center justify-center shrink-0 border border-[#111]/20">
          <CheckCircle2 className="w-3 h-3 text-[#111]" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-[#111]/80 uppercase tracking-widest mb-0.5">Result</p>
          <span className="text-[11px] font-bold text-[#111]">Estimate Approved</span>
        </div>
      </motion.div>
    </div>
  );
}
