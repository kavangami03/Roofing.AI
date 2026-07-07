import { motion } from "framer-motion";
import { 
  CloudLightning, CalendarCheck, AlertTriangle, Truck, 
  RefreshCcw, Phone, CheckCircle2, Zap 
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Storm call",
    subtitle: "Hail hits, the phones light up",
    maxDoesHeader: "Answer 100 calls at once.",
    maxDoesText: "Greets every homeowner instantly, capturing the exact address, name, and roof type without ever placing them on hold.",
    teamSees: "A clean log of every caller, without the office phone ringing once.",
    icon: CloudLightning
  },
  {
    id: 2,
    title: "Book inspection",
    subtitle: "Address captured, slot booked",
    maxDoesHeader: "Zero-touch calendar sync.",
    maxDoesText: "Checks your real-time availability and automatically books the homeowner into the next open slot.",
    teamSees: "New inspections appearing directly on the schedule.",
    icon: CalendarCheck
  },
  {
    id: 3,
    title: "Emergency leak",
    subtitle: "Active leak detected",
    maxDoesHeader: "Urgent triage & escalation.",
    maxDoesText: "Identifies keywords like 'active leak' or 'water damage', flags the lead as high urgency, and escalates.",
    teamSees: "Instant SMS/Push alerts for jobs needing immediate attention.",
    icon: AlertTriangle
  },
  {
    id: 4,
    title: "Dispatch",
    subtitle: "Right crew assigned and routed",
    maxDoesHeader: "Intelligent logistics.",
    maxDoesText: "Assigns the correct crew based on location and skill, then sends automated SMS dispatch notifications.",
    teamSees: "Crews moving to the right jobs without manual dispatching.",
    icon: Truck
  },
  {
    id: 5,
    title: "Follow-up",
    subtitle: "Outbound, after the rush",
    maxDoesHeader: "The estimates that close themselves.",
    maxDoesText: "Sends estimate reminders to homeowners on the fence, runs post-storm check-ins, and books the yeses.",
    teamSees: "A fuller schedule after the storm, without making outbound calls.",
    icon: RefreshCcw
  }
];

function StormCallVisualizer() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2">
       <div className="flex justify-between items-center mb-1 px-1">
          <span className="text-[9px] font-mono text-ink-muted uppercase tracking-widest">Active Queue</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
       </div>
       {[1, 2, 3].map(i => (
          <div key={i} className="bg-white border border-border rounded-lg p-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
             <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
             </div>
             <div className="space-y-1.5 w-full">
                <div className="h-1.5 w-[70%] bg-surface-alt rounded-full" />
                <div className="h-1.5 w-[40%] bg-surface-alt rounded-full" />
             </div>
          </div>
       ))}
    </div>
  );
}

function BookInspectionVisualizer() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
       <div className="grid grid-cols-5 gap-1.5 mb-4">
          {[...Array(10)].map((_, i) => (
             <div key={i} className={`aspect-square rounded-md border flex items-center justify-center ${i === 7 ? 'bg-emerald-50 border-emerald-200 shadow-sm relative overflow-hidden' : 'bg-surface border-border'}`}>
                {i === 7 && (
                   <>
                      <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 relative z-10" />
                   </>
                )}
             </div>
          ))}
       </div>
       <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 flex items-center justify-center gap-2">
          <CalendarCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Slot Booked</span>
       </div>
    </div>
  );
}

function EmergencyLeakVisualizer() {
  return (
    <div className="w-full h-full flex flex-col relative justify-center">
       <div className="absolute inset-0 bg-red-50/40 rounded-xl" />
       <div className="relative z-10 flex flex-col justify-center p-3">
          <div className="flex items-center gap-2 mb-3">
             <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <AlertTriangle className="w-4 h-4" />
             </div>
             <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Critical Alert</span>
          </div>
          <div className="bg-white border border-red-100 rounded-lg p-3 shadow-sm mb-3">
             <span className="text-[12px] font-mono text-red-600 font-bold leading-tight block">"Water coming through ceiling"</span>
          </div>
          <div className="bg-red-500 text-white text-[10px] font-bold tracking-widest px-2 py-2 rounded-lg flex items-center justify-center gap-1.5 shadow-md">
             <Zap className="w-3.5 h-3.5" /> ESCALATING
          </div>
       </div>
    </div>
  );
}

function DispatchVisualizer() {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden justify-center bg-white rounded-xl border border-border shadow-sm">
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
       <div className="relative z-10 flex flex-col items-center justify-center flex-1">
          <div className="w-[80%] border-t-[2px] border-dashed border-emerald-300 absolute top-1/2 -translate-y-1/2" />
          <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-white flex items-center justify-center shadow-lg relative z-10 animate-bounce">
             <Truck className="w-5 h-5 text-emerald-600" />
          </div>
       </div>
       <div className="relative z-10 bg-surface-alt border-t border-border p-3 flex justify-between items-center">
          <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">CREW_04</span>
          <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">EN ROUTE</span>
       </div>
    </div>
  );
}

function FollowUpVisualizer() {
  return (
    <div className="w-full h-full flex gap-3 justify-center items-center py-2 px-1">
       <div className="flex-1 flex flex-col gap-2 border-r border-border pr-3">
          <span className="text-[10px] font-bold text-ink-muted uppercase tracking-widest mb-1 text-center">Pending</span>
          <div className="h-10 bg-white shadow-sm rounded-lg border border-border" />
          <div className="h-10 bg-white shadow-sm rounded-lg border border-border opacity-50" />
       </div>
       <div className="flex-1 flex flex-col gap-2 pl-1">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
             <CheckCircle2 className="w-3.5 h-3.5" /> Won
          </span>
          <div className="h-12 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center px-3 shadow-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
             <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] relative z-10" />
          </div>
       </div>
    </div>
  );
}

export function WalkthroughSection() {
  return (
    <section className="bg-white border-t border-border overflow-hidden">
      
      {/* Header */}
      <div className="pt-24 lg:pt-32 pb-10 container-page max-w-4xl mx-auto text-center">
         <motion.div 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border shadow-sm mb-6"
         >
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-ink-muted text-[10px] font-bold uppercase tracking-widest">Live walkthrough</span>
         </motion.div>
         
         <motion.h2 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-4xl lg:text-5xl font-bold text-ink mb-6 leading-[1.1] tracking-tight"
         >
           A day on your phones,<br/>
           <span className="text-emerald-600">handled.</span>
         </motion.h2>
         
         <motion.p 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="text-ink-muted text-[16px] lg:text-[18px] leading-relaxed max-w-2xl mx-auto"
         >
            See exactly what Max does, and what your team sees on the other side.
         </motion.p>
      </div>

      {/* Full-width 5-Column Pipeline */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 border-t border-border bg-surface">
         
         {steps.map((step, idx) => (
            <motion.div 
               key={step.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="relative border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 xl:p-10 bg-surface hover:bg-white transition-colors duration-500 group flex flex-col h-full min-h-[600px] lg:min-h-[750px] overflow-hidden"
            >
               {/* Step Number Watermark */}
               <div className="text-[140px] xl:text-[180px] font-black text-ink/[0.02] absolute -top-4 right-0 pointer-events-none group-hover:text-emerald-500/[0.03] transition-colors duration-500 leading-none">
                  {idx + 1}
               </div>

               {/* Title & Sub */}
               <div className="relative z-10 mb-8 mt-4">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all duration-300">
                     <step.icon className="w-6 h-6 text-ink-muted group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-1.5 tracking-tight">{step.title}</h3>
                  <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">{step.subtitle}</p>
               </div>

               {/* The Custom Visualizer */}
               <div className="relative z-10 w-full h-[180px] rounded-2xl bg-[#FBFBFA] border border-border shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] p-4 my-8 overflow-hidden group-hover:border-emerald-200 transition-colors duration-300">
                  {idx === 0 && <StormCallVisualizer />}
                  {idx === 1 && <BookInspectionVisualizer />}
                  {idx === 2 && <EmergencyLeakVisualizer />}
                  {idx === 3 && <DispatchVisualizer />}
                  {idx === 4 && <FollowUpVisualizer />}
               </div>

               {/* The Text Content */}
               <div className="relative z-10 mt-auto space-y-8">
                  <div>
                     <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white border border-border mb-3 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-ink-muted">Max does:</span>
                     </div>
                     <p className="text-[16px] font-bold text-ink leading-snug mb-2">{step.maxDoesHeader}</p>
                     <p className="text-[14px] text-ink-muted leading-relaxed">{step.maxDoesText}</p>
                  </div>
                  
                  <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-5 group-hover:bg-emerald-50 transition-colors duration-300">
                     <h4 className="text-[9px] font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        What your team sees:
                     </h4>
                     <p className="text-[14px] text-emerald-950 font-medium leading-snug">{step.teamSees}</p>
                  </div>
               </div>

            </motion.div>
         ))}

      </div>
    </section>
  );
}
