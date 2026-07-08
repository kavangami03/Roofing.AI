import { motion } from "framer-motion";
import { Play, Volume2, ShieldCheck, ToggleRight, Radio, Search } from "lucide-react";

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[#FBFBFA] py-20 lg:py-28">
      {/* Background soft grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <div className="container-page flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <span className="w-fit mx-auto rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-[11px] font-bold tracking-wider text-accent uppercase">
            Ops Integrations
          </span>
          <h2 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] max-w-5xl mx-auto">
            Runs on the tools your shop already uses.
          </h2>
          <p className="text-[16px] leading-[1.6] text-ink-muted">
            Max plugs natively into your existing software stack, acting as the intelligent connection layer. No double entry, no data loss.
          </p>
        </div>

        {/* Integration Command Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: JobNimbus */}
          <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#00A8E8]/10 text-[#00A8E8] font-bold text-[14px]">
                  JN
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[15px]">JobNimbus</h4>
                  <p className="text-[11px] text-ink-muted">CRM Integration</p>
                </div>
              </div>
              <ToggleRight className="h-7 w-7 text-success" />
            </div>
            
            <div className="mt-4 flex-1 space-y-2.5">
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Contact created: Sarah Miller</span>
                <span className="text-ink-muted text-[10px]">Just now</span>
              </div>
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Damage report photo attached</span>
                <span className="text-ink-muted text-[10px]">1m ago</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/5 border border-success/10 rounded-full px-2.5 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
              Synced & Active
            </div>
          </div>

          {/* Card 2: AccuLynx */}
          <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7FBA00]/10 text-[#7FBA00] font-bold text-[14px]">
                  AL
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[15px]">AccuLynx</h4>
                  <p className="text-[11px] text-ink-muted">Estimating & Scheduling</p>
                </div>
              </div>
              <ToggleRight className="h-7 w-7 text-success" />
            </div>
            
            <div className="mt-4 flex-1 space-y-2.5">
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Inspection scheduled: Tomorrow 9:30 AM</span>
                <span className="text-ink-muted text-[10px]">2m ago</span>
              </div>
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Crew Delta dispatch alert sent</span>
                <span className="text-ink-muted text-[10px]">2m ago</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/5 border border-success/10 rounded-full px-2.5 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
              Synced & Active
            </div>
          </div>

          {/* Card 3: Jobber */}
          <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#54B948]/10 text-[#54B948] font-bold text-[14px]">
                  JB
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[15px]">Jobber</h4>
                  <p className="text-[11px] text-ink-muted">Field Operations</p>
                </div>
              </div>
              <ToggleRight className="h-7 w-7 text-success" />
            </div>
            
            <div className="mt-4 flex-1 space-y-2.5">
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Job #4812 schedule updated</span>
                <span className="text-ink-muted text-[10px]">10m ago</span>
              </div>
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Draft invoice generated</span>
                <span className="text-ink-muted text-[10px]">10m ago</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/5 border border-success/10 rounded-full px-2.5 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
              Synced & Active
            </div>
          </div>

          {/* Card 4: Twilio */}
          <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F22F46]/10 text-[#F22F46] font-bold text-[14px]">
                  TW
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[15px]">Twilio</h4>
                  <p className="text-[11px] text-ink-muted">Voice & SMS Routing</p>
                </div>
              </div>
              <ToggleRight className="h-7 w-7 text-success" />
            </div>
            
            <div className="mt-4 flex-1 space-y-2.5">
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ Live phone line active: (813) 555-0129</span>
                <span className="text-ink-muted text-[10px]">Active</span>
              </div>
              <div className="rounded-lg bg-surface-alt/50 p-2.5 text-[12px] flex items-center justify-between">
                <span className="text-ink font-medium">✓ 24/7 storm failover routing live</span>
                <span className="text-ink-muted text-[10px]">Ready</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/5 border border-success/10 rounded-full px-2.5 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
              Synced & Active
            </div>
          </div>

          {/* Card 5 (Double Width): Every call recorded and transcribed */}
          <div className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:border-accent hover:shadow-lift hover:scale-[1.01] transition-all duration-300 md:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Volume2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[15.5px]">Every call recorded and transcribed</h4>
                  <p className="text-[11.5px] text-ink-muted">Full audio timeline & text synced instantly to lead notes</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[11px] font-bold text-accent tracking-wide uppercase">
                <Radio className="h-3.5 w-3.5 animate-pulse text-accent" />
                Audio Archive
              </span>
            </div>

            {/* Custom Audio Player Mockup */}
            <div className="mt-4 rounded-xl bg-surface-alt/50 p-4 border border-border flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <button aria-label="Play recording" className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white hover:bg-accent hover:text-primary transition-colors shadow">
                  <Play className="h-4.5 w-4.5 fill-current translate-x-[1px]" />
                </button>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] text-ink-muted mb-1 font-semibold">
                    <span>Sarah_Miller_Inspection_Request.mp3</span>
                    <span>0:14 / 0:42</span>
                  </div>
                  {/* Waveform graphic */}
                  <div className="flex items-end gap-[2px] h-6 px-1 py-0.5">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-[3px] origin-bottom rounded-full transition-colors ${
                          i < 16 ? "bg-accent" : "bg-accent/25"
                        }`}
                        style={{ height: `${30 + ((i * 41) % 70)}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Transcription Log */}
              <div className="border-t border-border/80 pt-3 text-[12.5px] leading-relaxed space-y-2.5">
                <p className="text-ink">
                  <span className="font-bold text-accent mr-1.5">Max (AI receptionist):</span>
                  "I see that last night's storm hit hard. I've successfully booked your free roof inspection for tomorrow at 9:30 AM."
                </p>
                <p className="text-ink-muted">
                  <span className="font-semibold text-ink mr-1.5">Sarah (Homeowner):</span>
                  "That sounds wonderful, thank you so much. I have shingles all over my yard."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}