import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote: "During a storm we'd miss half our calls. Now Max answers every one in parallel and books the inspection. The surge finally turns into jobs.",
      initial: "R",
      name: "Ray T.",
      title: "Owner, Summit Ridge Roofing",
      color: "bg-emerald-600"
    },
    {
      quote: "The after-hours leaks used to wait until morning. Now they're triaged and on the schedule the same night. We stopped losing the urgent jobs.",
      initial: "C",
      name: "Carla M.",
      title: "Office Manager, Apex Exteriors",
      color: "bg-teal-600"
    },
    {
      quote: "The JobNimbus sync is the part I trusted last and now rely on most. Every lead and inspection shows up where it should, no double entry.",
      initial: "B",
      name: "Brian K.",
      title: "GM, Cornerstone Roofing Co.",
      color: "bg-slate-800"
    }
  ];

  // Auto-rotate every 5 seconds. Restart timer if user manually clicks.
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, testimonials.length]);

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-slate-200">
      <div className="container-page max-w-5xl mx-auto px-4">
         
         {/* Extremely Compact Header */}
         <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100/50 mb-3">
               <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-emerald-500 fill-emerald-500" />)}
               </div>
               <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-widest ml-1">Trusted by owners</span>
            </div>
            <h2 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] max-w-5xl mx-auto">
               The service desk that never clocks out.
            </h2>
         </div>

         {/* Ultra-Compact Interactive Widget */}
         <div className="bg-slate-50 border border-slate-200 rounded-2xl md:rounded-[2rem] p-3 md:p-6 flex flex-col md:flex-row gap-4 md:gap-8 shadow-sm max-w-4xl mx-auto">
            
            {/* Left: The Dynamic Quote Viewer */}
            <div className="flex-1 relative min-h-[180px] md:min-h-[220px] flex items-center justify-center p-6 md:p-10 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-sm">
               <Quote className="absolute top-4 left-4 w-10 h-10 text-slate-100" />
               <AnimatePresence mode="wait">
                  <motion.div
                     key={active}
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -5 }}
                     transition={{ duration: 0.15 }}
                  >
                     <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed text-center relative z-10">
                        "{testimonials[active].quote}"
                     </p>
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Right: The Interactive Selectors */}
            <div className="w-full md:w-[300px] flex flex-col gap-2 justify-center">
               {testimonials.map((t, idx) => (
                  <button 
                     key={idx}
                     onClick={() => setActive(idx)}
                     className={`w-full text-left p-3 rounded-xl flex items-center gap-4 transition-all duration-200 border outline-none ${
                        active === idx 
                           ? "bg-white border-slate-200 shadow-sm ring-1 ring-emerald-500/20" 
                           : "bg-transparent border-transparent hover:bg-slate-200/50"
                     }`}
                  >
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner transition-colors duration-200 ${
                        active === idx ? t.color : "bg-slate-300"
                     }`}>
                        {t.initial}
                     </div>
                     <div>
                        <div className={`font-bold text-[14px] ${active === idx ? "text-slate-900" : "text-slate-500"}`}>
                           {t.name}
                        </div>
                        <div className={`text-[11px] font-medium ${active === idx ? "text-slate-500" : "text-slate-400"}`}>
                           {t.title}
                        </div>
                     </div>
                  </button>
               ))}
            </div>

         </div>

      </div>
    </section>
  );
}
