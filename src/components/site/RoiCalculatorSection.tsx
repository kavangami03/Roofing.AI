import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, DollarSign, PhoneOff, TrendingUp } from "lucide-react";

export function RoiCalculatorSection() {
  const [calls, setCalls] = useState(300);
  const [missedPercent, setMissedPercent] = useState(30);
  const [jobValue, setJobValue] = useState(9000);

  // Math logic
  // Assume a 5% close/booking rate on cold missed calls
  const missedCalls = Math.round(calls * (missedPercent / 100));
  const estimatedJobsLost = missedCalls * 0.05; 
  const valueLeftOnTable = Math.round(estimatedJobsLost * jobValue);
  const recoveredValue = Math.round(valueLeftOnTable * 0.40); // Assume SuperMIA recovers 40%

  return (
    <section className="bg-[#111111] py-16 lg:py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container-page max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-accent mb-6 shadow-[0_0_20px_rgba(204,170,102,0.1)]"
          >
            <Calculator className="w-3.5 h-3.5" /> See what it's worth to you
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            What do missed roofing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45]">calls cost you?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-[16px] md:text-[18px] leading-relaxed mx-auto max-w-2xl font-medium"
          >
            Every call that rings out during a storm or after hours is an inspection that could have been a re-roof. Move the sliders to estimate it for your business.
          </motion.p>
        </div>

        {/* Calculator UI */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-[55%] flex flex-col gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-sm"
          >
            
            {/* Slider 1: Inbound Calls */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <label className="text-white font-bold text-[17px] flex items-center gap-2">
                    <PhoneOff className="w-4 h-4 text-accent" /> Inbound calls / month
                  </label>
                  <p className="text-white/40 text-[13px] font-medium">Storm leads, service calls and follow-ups</p>
                </div>
                <div className="text-2xl font-black text-accent bg-accent/10 px-4 py-1.5 rounded-xl border border-accent/20">
                  {calls}
                </div>
              </div>
              <input 
                type="range" 
                min="50" max="2000" step="10" 
                value={calls} onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-accent outline-none transition-all"
                style={{
                  background: `linear-gradient(to right, #B08D45 ${((calls - 50) / (2000 - 50)) * 100}%, rgba(255,255,255,0.1) ${((calls - 50) / (2000 - 50)) * 100}%)`
                }}
              />
            </div>

            {/* Slider 2: Missed Percent */}
            <div className="flex flex-col gap-4 pt-5 border-t border-white/5">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <label className="text-white font-bold text-[17px] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" /> % missed / not called back
                  </label>
                  <p className="text-white/40 text-[13px] font-medium">Storm surges and after-hours are the usual leak</p>
                </div>
                <div className="text-2xl font-black text-accent bg-accent/10 px-4 py-1.5 rounded-xl border border-accent/20">
                  {missedPercent}%
                </div>
              </div>
              <input 
                type="range" 
                min="5" max="80" step="5" 
                value={missedPercent} onChange={(e) => setMissedPercent(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-accent outline-none transition-all"
                style={{
                  background: `linear-gradient(to right, #B08D45 ${((missedPercent - 5) / (80 - 5)) * 100}%, rgba(255,255,255,0.1) ${((missedPercent - 5) / (80 - 5)) * 100}%)`
                }}
              />
            </div>

            {/* Slider 3: Job Value */}
            <div className="flex flex-col gap-4 pt-5 border-t border-white/5">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <label className="text-white font-bold text-[17px] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-accent" /> Average job value
                  </label>
                  <p className="text-white/40 text-[13px] font-medium">Blended repair and re-roof value</p>
                </div>
                <div className="text-2xl font-black text-accent bg-accent/10 px-4 py-1.5 rounded-xl border border-accent/20">
                  ${jobValue.toLocaleString()}
                </div>
              </div>
              <input 
                type="range" 
                min="1000" max="30000" step="500" 
                value={jobValue} onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-accent outline-none transition-all"
                style={{
                  background: `linear-gradient(to right, #B08D45 ${((jobValue - 1000) / (30000 - 1000)) * 100}%, rgba(255,255,255,0.1) ${((jobValue - 1000) / (30000 - 1000)) * 100}%)`
                }}
              />
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-[45%] lg:sticky lg:top-32"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-6 lg:p-10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(204,170,102,0.2)]">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-accent text-[13px] font-bold uppercase tracking-widest mb-4">
                  You're leaving on the table
                </p>
                
                <div className="flex items-start gap-1 mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                    ${valueLeftOnTable.toLocaleString()}
                  </span>
                </div>
                <p className="text-white/60 font-medium text-[16px] mb-8">
                  / month in missed jobs.
                </p>

                <div className="bg-[#111]/40 border border-accent/10 rounded-2xl p-5 mb-8">
                  <p className="text-[15px] leading-relaxed text-white/80">
                    SuperMIA typically recovers <strong className="text-accent">${recoveredValue.toLocaleString()}+/mo</strong> by immediately answering and booking the calls that would have otherwise gone to your voicemail.
                  </p>
                </div>

                <button className="w-full group relative overflow-hidden rounded-xl bg-accent px-8 py-5 font-bold text-[#111] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(204,170,102,0.3)]">
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center justify-center gap-2 text-[17px]">
                    Book a 15-min Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
