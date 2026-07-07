import { motion } from "framer-motion";
import { CheckCircle2, ArrowRightLeft, Bot, Cloud, Check, Database } from "lucide-react";

export function IntegrationSection() {
  const features = [
    "Logs it in your CRM, not a parallel list",
    "Leads, contacts & notes stay in CRM",
    "Damage type & stage follow automatically",
    "Routing rules respected every time"
  ];

  return (
    <section className="py-24 lg:py-40 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">
      <div className="container-page max-w-7xl mx-auto px-4">
         
         {/* Extremely Clean Header */}
         <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200/50 mb-6"
            >
               <Database className="w-3.5 h-3.5 text-blue-600" />
               <span className="text-blue-700 text-[11px] font-bold uppercase tracking-[0.15em]">Live Integration</span>
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
               Leads that land <br className="hidden md:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">straight in your CRM.</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
               Works with JobNimbus, AccuLynx, Jobber and your existing phone line. Max logs the storm lead and the inspection, writing back automatically.
            </motion.p>
         </div>

         {/* The Main Visualization Stage */}
         <div className="relative w-full max-w-5xl mx-auto">
            
            {/* The Central Stage Container */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, ease: "easeOut" }}
               className="relative w-full h-auto lg:h-[600px] bg-white rounded-[2rem] lg:rounded-[3rem] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row items-center justify-center p-8 lg:p-12 z-10 gap-12 lg:gap-0"
            >
               {/* Very clean technical grid */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />

               <div className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 z-20">
                  
                  {/* Left: AI Node with Pulse */}
                  <div className="relative w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-2xl shrink-0 z-20">
                     <Bot className="w-10 h-10 text-white" />
                     <div className="absolute -bottom-8 text-slate-500 font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">Max AI</div>
                     
                     {/* Pulse Ring */}
                     <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 border-2 border-slate-900 rounded-[2rem] z-[-1]"
                     />
                  </div>

                  {/* Center: The Animated Pipeline (Desktop) */}
                  <div className="hidden lg:flex flex-1 h-[2px] bg-slate-100 mx-12 relative z-10 overflow-hidden rounded-full">
                      <motion.div 
                         animate={{ x: ["-100%", "300%"] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                         className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      />
                  </div>

                  {/* Center: The Animated Pipeline (Mobile - Vertical) */}
                  <div className="lg:hidden w-[2px] h-16 bg-slate-100 relative z-10 overflow-hidden rounded-full">
                      <motion.div 
                         animate={{ y: ["-100%", "300%"] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                         className="absolute left-0 right-0 h-[50px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                      />
                  </div>

                  {/* Right: The CRM Card Mockup */}
                  <div className="w-full max-w-[450px] bg-white border border-slate-200 rounded-[1.5rem] p-6 lg:p-8 shadow-2xl relative z-20">
                     {/* Header */}
                     <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                              <Cloud className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-slate-900 font-bold text-[17px] tracking-tight">New Lead Created</div>
                              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">JobNimbus Sync</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                           <span className="text-emerald-700 text-[9px] font-bold uppercase tracking-widest">Synced</span>
                        </div>
                     </div>

                     {/* Rows - Staggered entrance animation */}
                     <div className="space-y-4">
                        {[
                          { label: "Lead", value: "D. Foster", badge: "NEW" },
                          { label: "Source", value: "Storm call, hail", badge: null },
                          { label: "Service", value: "Roof inspection", badge: null },
                          { label: "Crew", value: "Crew B, Tue 9:00 AM", badge: null },
                          { label: "Stage", value: "Inspection scheduled", dot: "bg-amber-400" },
                        ].map((row, i) => (
                           <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ delay: 0.5 + (i * 0.15), duration: 0.4 }}
                              className="flex items-center"
                           >
                              <div className="w-[90px] shrink-0 text-slate-400 text-[10px] font-bold uppercase tracking-widest">{row.label}</div>
                              <div className="flex-1 text-slate-800 text-[14px] font-bold flex items-center gap-2">
                                 {row.dot && <div className={`w-2 h-2 rounded-full ${row.dot}`} />}
                                 {row.value}
                                 {row.badge && <span className="bg-blue-50 text-blue-600 text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded">{row.badge}</span>}
                              </div>
                              <motion.div
                                 initial={{ scale: 0 }}
                                 whileInView={{ scale: 1 }}
                                 viewport={{ once: true, margin: "-50px" }}
                                 transition={{ delay: 0.7 + (i * 0.15), type: "spring", stiffness: 300 }}
                              >
                                 <Check className="w-4 h-4 text-emerald-500" />
                              </motion.div>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Orbiting Feature Cards (Desktop) */}
            <div className="absolute inset-[-40px] z-20 hidden lg:block pointer-events-none">
               
               {/* Top Left */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
                  className="absolute top-12 -left-16"
               >
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-4 w-72 pointer-events-auto">
                     <div className="bg-emerald-50 p-2 rounded-xl shrink-0"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                     <p className="text-slate-800 text-[13px] font-bold leading-tight">{features[0]}</p>
                  </motion.div>
               </motion.div>

               {/* Bottom Left */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}
                  className="absolute bottom-12 -left-16"
               >
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-4 w-72 pointer-events-auto">
                     <div className="bg-emerald-50 p-2 rounded-xl shrink-0"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                     <p className="text-slate-800 text-[13px] font-bold leading-tight">{features[1]}</p>
                  </motion.div>
               </motion.div>

               {/* Top Right */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
                  className="absolute top-24 -right-16"
               >
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-4 w-72 pointer-events-auto">
                     <div className="bg-emerald-50 p-2 rounded-xl shrink-0"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                     <p className="text-slate-800 text-[13px] font-bold leading-tight">{features[2]}</p>
                  </motion.div>
               </motion.div>

               {/* Bottom Right */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }}
                  className="absolute bottom-24 -right-16"
               >
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-4 w-72 pointer-events-auto">
                     <div className="bg-emerald-50 p-2 rounded-xl shrink-0"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                     <p className="text-slate-800 text-[13px] font-bold leading-tight">{features[3]}</p>
                  </motion.div>
               </motion.div>
            </div>
         </div>

         {/* Features Grid (Mobile Fallback) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-12 lg:hidden">
            {features.map((feature, i) => (
               <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 shadow-sm"
               >
                  <div className="bg-emerald-50 p-2 rounded-lg shrink-0">
                     <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-slate-700 text-[13px] font-bold leading-tight">{feature}</p>
               </motion.div>
            ))}
         </div>

      </div>
    </section>
  );
}
