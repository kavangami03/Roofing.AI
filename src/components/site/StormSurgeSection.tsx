import { Check } from "lucide-react";

export function StormSurgeSection() {
  return (
    <section className="bg-[#FBFBFA] py-8 lg:py-12 px-4 lg:px-8 border-t border-border">
      {/* The Monolithic Bento Grid Wrapper */}
      <div className="mx-auto max-w-[1300px] bg-[#0A0A0A] rounded-[32px] p-2 shadow-2xl relative">
        
        {/* Internal 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          
          {/* Column 1: Editorial Hero (Span 5) */}
          <div className="lg:col-span-5 bg-[#141414] rounded-[24px] p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest w-fit mb-8">
              Storm surge, captured
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              The storm only pays<br/>
              <span className="text-white/40">if you answer the phone.</span>
            </h2>
            
            <p className="text-white/60 leading-relaxed text-[15px] mb-4">
               A hailstorm is the biggest revenue event of your year. When 40 homeowners call in one afternoon, every missed call is a roof booked with someone else. <strong className="text-white font-medium">Max answers all of them at once.</strong>
            </p>

            <p className="text-white/60 leading-relaxed text-[15px]">
               Each caller gets the same fast, professional handling. The surge turns into a full calendar instead of a backlog of voicemails.
            </p>
          </div>

          {/* Column 2: The Features (Span 3) */}
          <div className="lg:col-span-3 bg-[#141414] rounded-[24px] p-8 lg:p-10 flex flex-col justify-center">
            <ul className="space-y-6">
              {[
                "Every line answered in parallel, no busy signal",
                "Address, roof type and damage captured on the call",
                "Inspection booked into your real calendar",
                "Active leaks flagged and escalated to your crew",
                "Every lead logged in your CRM, none lost in the rush"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-emerald-400" />
                  </div>
                  <span className="text-white/80 text-[14px] leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The Live HUD (Span 4) */}
          <div className="lg:col-span-4 bg-[#141414] rounded-[24px] p-8 lg:p-10 flex flex-col relative overflow-hidden">
            {/* Subtle technical background grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            {/* HUD Header */}
            <div className="flex justify-between items-center mb-10 relative z-10">
               <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">What your team sees</span>
               <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                 17 IN QUEUE
               </span>
            </div>

            {/* HUD Data Matrix */}
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 text-xs font-mono uppercase tracking-wider">Caller</span>
                   <span className="text-white font-medium text-sm flex items-center gap-2">
                     D. Foster 
                     <span className="text-emerald-400 bg-emerald-400/10 px-1.5 rounded text-[9px] font-bold tracking-widest uppercase border border-emerald-400/20">New</span>
                   </span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 text-xs font-mono uppercase tracking-wider">Address</span>
                   <span className="text-white font-medium text-sm text-right">218 Birchwood Ln</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 text-xs font-mono uppercase tracking-wider">Damage</span>
                   <span className="text-danger/90 font-medium text-sm text-right">Hail, missing shingles</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 text-xs font-mono uppercase tracking-wider">Inspection</span>
                   <span className="text-white font-medium text-sm text-right">Tue 9:00 AM, Crew B</span>
                </div>
              </div>
            </div>

            {/* HUD Footer Log */}
            <div className="mt-8 bg-[#0A0A0A] rounded-xl p-3.5 flex items-center justify-center gap-2 border border-white/5 relative z-10">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white/60 text-[11px] font-mono uppercase tracking-wider">Lead captured & texted</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
