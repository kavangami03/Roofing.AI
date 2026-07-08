import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { ArrowRight, DollarSign, PhoneOff, TrendingUp, Activity } from "lucide-react";

// Helper component to smoothly animate numbers as sliders change
function AnimatedNumber({ value, prefix = "", suffix = "", isFloat = false }: { value: number, prefix?: string, suffix?: string, isFloat?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    const controls = animate(prevValue.current, value, {
      duration: 0.3,
      ease: "easeOut",
      onUpdate(v) {
        if (isFloat) {
          node.textContent = prefix + (v / 1000).toFixed(1) + suffix;
        } else {
          node.textContent = prefix + Math.round(v).toLocaleString() + suffix;
        }
      }
    });

    prevValue.current = value;
    return () => controls.stop();
  }, [value, prefix, suffix, isFloat]);

  // Initial render state
  const initialText = isFloat ? prefix + (value / 1000).toFixed(1) + suffix : prefix + Math.round(value).toLocaleString() + suffix;

  return <span ref={nodeRef}>{initialText}</span>;
}

export function RoiCalculatorSection() {
  const [calls, setCalls] = useState(300);
  const [missedPercent, setMissedPercent] = useState(30);
  const [jobValue, setJobValue] = useState(9000);

  // Math logic
  const missedCalls = Math.round(calls * (missedPercent / 100));
  const estimatedJobsLost = missedCalls * 0.05; // 5% booking rate on cold missed calls
  const valueLeftOnTable = Math.round(estimatedJobsLost * jobValue);
  const recoveredValue = Math.round(valueLeftOnTable * 0.40); // 40% recovery

  return (
    <section className="bg-[#050505] py-12 lg:py-16 relative overflow-hidden border-t border-white/5">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4b46a 0%, #B08D45 100%);
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 20px rgba(176,141,69,0.5);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 14px rgba(0,0,0,0.6), 0 0 25px rgba(176,141,69,0.8);
        }
        .custom-slider::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4b46a 0%, #B08D45 100%);
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 20px rgba(176,141,69,0.5);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .custom-slider::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 14px rgba(0,0,0,0.6), 0 0 25px rgba(176,141,69,0.8);
        }
      `}} />
      
      {/* Immersive Deep Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="container-page max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header (Minimalist, keeping focus on the calculator) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white/60 mb-6"
          >
            <Activity className="w-3.5 h-3.5 text-accent" /> Live Impact Simulator
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            What do missed calls <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45]">cost you?</span>
          </motion.h2>
        </div>

        {/* The "Out of the Box" Unified Terminal Design */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          {/* Subtle terminal grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          {/* Top Section: Massive Central Readout */}
          <div className="relative px-6 py-8 lg:py-10 flex flex-col items-center text-center border-b border-white/5">
            {/* Glowing orb strictly behind the number */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[200px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" 
            />
            
            <p className="relative z-10 text-accent font-bold uppercase tracking-[0.2em] text-[12px] mb-4">
              You are leaving on the table
            </p>
            
            <div className="relative z-10 text-6xl md:text-7xl lg:text-[80px] font-black text-white tracking-tighter leading-none mb-4 drop-shadow-[0_0_40px_rgba(204,170,102,0.3)]">
              <AnimatedNumber value={valueLeftOnTable} prefix="$" />
            </div>
            
            <p className="relative z-10 text-white/50 text-[16px] md:text-[18px] font-medium mb-6">
              / month in missed jobs
            </p>

            <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl px-6 py-3 max-w-2xl backdrop-blur-md">
              <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed">
                SuperMIA typically recovers <strong className="text-accent"><AnimatedNumber value={recoveredValue} prefix="$" suffix="+/mo" /></strong> by instantly answering and booking calls that would have gone to voicemail.
              </p>
            </div>
          </div>

          {/* Bottom Section: 3 Control Pods */}
          <div className="relative bg-[#111111]/50 px-6 py-8 lg:px-10 lg:py-10">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              
              {/* Pod 1 */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-white font-bold text-[16px] flex items-center gap-2 mb-1">
                      <PhoneOff className="w-4 h-4 text-accent" /> Inbound calls
                    </label>
                    <p className="text-white/40 text-[12px] font-medium leading-snug">Monthly service and storm calls</p>
                  </div>
                  <div className="text-xl font-black text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <AnimatedNumber value={calls} />
                  </div>
                </div>
                <input 
                  type="range" min="50" max="2000" step="10" 
                  value={calls} onChange={(e) => setCalls(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none shadow-inner custom-slider"
                  style={{
                    background: `linear-gradient(to right, #B08D45 ${((calls - 50) / (2000 - 50)) * 100}%, rgba(255,255,255,0.05) ${((calls - 50) / (2000 - 50)) * 100}%)`
                  }}
                />
              </div>

              {/* Pod 2 */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-white font-bold text-[16px] flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-accent" /> Missed calls
                    </label>
                    <p className="text-white/40 text-[12px] font-medium leading-snug">Storm surges and after-hours leak</p>
                  </div>
                  <div className="text-xl font-black text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <AnimatedNumber value={missedPercent} suffix="%" />
                  </div>
                </div>
                <input 
                  type="range" min="5" max="80" step="5" 
                  value={missedPercent} onChange={(e) => setMissedPercent(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none shadow-inner custom-slider"
                  style={{
                    background: `linear-gradient(to right, #B08D45 ${((missedPercent - 5) / (80 - 5)) * 100}%, rgba(255,255,255,0.05) ${((missedPercent - 5) / (80 - 5)) * 100}%)`
                  }}
                />
              </div>

              {/* Pod 3 */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-white font-bold text-[16px] flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-accent" /> Avg job value
                    </label>
                    <p className="text-white/40 text-[12px] font-medium leading-snug">Blended repair and re-roof</p>
                  </div>
                  <div className="text-xl font-black text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    <AnimatedNumber value={jobValue} prefix="$" suffix="k" isFloat={true} />
                  </div>
                </div>
                <input 
                  type="range" min="1000" max="30000" step="500" 
                  value={jobValue} onChange={(e) => setJobValue(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none shadow-inner custom-slider"
                  style={{
                    background: `linear-gradient(to right, #B08D45 ${((jobValue - 1000) / (30000 - 1000)) * 100}%, rgba(255,255,255,0.05) ${((jobValue - 1000) / (30000 - 1000)) * 100}%)`
                  }}
                />
              </div>

            </div>

            {/* Massive CTA */}
            <div className="mt-10 flex justify-center">
              <button className="group relative overflow-hidden rounded-2xl bg-accent px-8 py-4 font-bold text-[#111] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(204,170,102,0.4)]">
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2 text-[16px]">
                  Stop missing jobs — Book Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
