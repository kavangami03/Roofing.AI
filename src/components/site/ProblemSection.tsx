import { motion } from "framer-motion";
import { ArrowRight, PhoneOff, CheckCircle2, AlertCircle, Clock, Users, Zap } from "lucide-react";

export function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section id="problem" className="relative overflow-hidden bg-[#FBFBFA] pb-16 lg:pb-24">
      {/* Decorative Cinematic Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-0 h-[600px] w-[600px] rounded-full bg-danger/5 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-0 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container-page relative z-10">
        
        {/* Editorial Header */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl mb-4 leading-[1.05]"
          >
            Your phones blow up exactly<br className="hidden md:block" />
            <span className="text-ink-muted">when your crew can't answer.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-[17px] text-ink-muted leading-relaxed"
          >
            A storm rolls through and the calls come in all at once, but your team is on a roof or out on an estimate. The homeowner who can't reach you simply dials the next roofer.
          </motion.p>
        </div>

        {/* Transformation Flow Layout */}
        <div className="mx-auto max-w-6xl">
          
          {/* Header Row for Columns */}
          <div className="hidden md:flex items-end justify-between mb-6 px-4">
            <div className="w-[45%]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-danger/20 shadow-sm text-danger text-xs font-bold uppercase tracking-widest mb-3">
                The Old Way
              </div>
              <h3 className="text-xl font-bold text-ink mb-1">The surge goes to voicemail.</h3>
              <p className="text-sm text-ink-muted leading-relaxed pr-8">
                The storm leads pile up faster than anyone can answer. Calls ring out, homeowners call competitors, and the after-hours leak never gets logged.
              </p>
            </div>
            
            <div className="w-[10%] flex justify-center pb-4 relative">
              <div className="h-full w-px bg-border/50 absolute top-0 bottom-0" />
            </div>

            <div className="w-[45%]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-emerald-500/20 shadow-sm text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">
                <Zap className="w-3.5 h-3.5 fill-emerald-600" /> The Max Way
              </div>
              <h3 className="text-xl font-bold text-ink mb-1">Every storm call booked.</h3>
              <p className="text-sm text-ink-muted leading-relaxed pr-8">
                Max answers every line in parallel, captures the address and damage, books the inspection, and flags the emergency leaks.
              </p>
            </div>
          </div>

          {/* Animated Transformation Rows */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 relative"
          >
            {/* Center Vertical Dashed Spine */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-border/60 -translate-x-1/2 z-0" />

            {/* Transformation Row 1 */}
            <motion.div variants={cardVariants} className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 group">
              {/* Left Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-border shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-surface-alt flex items-center justify-center border border-border">
                      <PhoneOff className="h-4 w-4 text-ink-muted" />
                    </div>
                    <span className="text-[15px] font-medium text-ink leading-snug pt-2">A dozen storm calls at once, one phone to answer</span>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="hidden md:flex w-[10%] relative z-10 justify-center items-center">
                {/* Animated Line connecting them */}
                <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-emerald-300 -translate-x-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="h-9 w-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5 text-ink-muted group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>

              {/* Right Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-emerald-50/50 backdrop-blur-sm rounded-[20px] p-5 lg:p-6 border border-emerald-100 shadow-[0_4px_20px_rgba(52,211,153,0.05)] group-hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-[15px] font-bold text-ink leading-snug pt-2">Every line answered at once, 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transformation Row 2 */}
            <motion.div variants={cardVariants} className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 group">
              {/* Left Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-border shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-surface-alt flex items-center justify-center border border-border">
                      <Users className="h-4 w-4 text-ink-muted" />
                    </div>
                    <span className="text-[15px] font-medium text-ink leading-snug pt-2">Homeowners book with whoever picked up</span>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="hidden md:flex w-[10%] relative z-10 justify-center items-center">
                <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-emerald-300 -translate-x-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-100" />
                <div className="h-9 w-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5 text-ink-muted group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>

              {/* Right Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-emerald-50/50 backdrop-blur-sm rounded-[20px] p-5 lg:p-6 border border-emerald-100 shadow-[0_4px_20px_rgba(52,211,153,0.05)] group-hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-[15px] font-bold text-ink leading-snug pt-2">Address and damage captured, inspection booked</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transformation Row 3 */}
            <motion.div variants={cardVariants} className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0 group">
              {/* Left Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-white rounded-[20px] p-5 lg:p-6 border border-border shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-surface-alt flex items-center justify-center border border-border">
                      <Clock className="h-4 w-4 text-ink-muted" />
                    </div>
                    <span className="text-[15px] font-medium text-ink leading-snug pt-2">After-hours leaks go to voicemail</span>
                  </div>
                </div>
              </div>
              
              {/* Connector */}
              <div className="hidden md:flex w-[10%] relative z-10 justify-center items-center">
                <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-emerald-300 -translate-x-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-200" />
                <div className="h-9 w-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center relative z-20 group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5 text-ink-muted group-hover:text-emerald-500 transition-colors" />
                </div>
              </div>

              {/* Right Card */}
              <div className="w-full md:w-[45%] relative z-10">
                <div className="bg-emerald-50/50 backdrop-blur-sm rounded-[20px] p-5 lg:p-6 border border-emerald-100 shadow-[0_4px_20px_rgba(52,211,153,0.05)] group-hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-[15px] font-bold text-ink leading-snug pt-2">Emergency leaks triaged and sent to your crew</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}