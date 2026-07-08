import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingUp, Headset } from "lucide-react";

export function WhySwitch() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <section id="why-switch" className="relative overflow-hidden bg-[#FBFBFA] py-16 lg:py-24">
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#191919 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-page relative z-10">
        
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-accent shadow-sm"
          >
            Why roofers switch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-[#111] md:text-5xl lg:text-6xl mb-6 leading-[1.05]"
          >
            Every call answered.<br />
            <span className="text-ink-muted">Every inspection booked.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-ink-muted leading-relaxed"
          >
            Storm season floods your phones in minutes. Max answers every line at once, books the inspections, and flags the emergency leaks, so you capture the surge instead of missing it.
          </motion.p>
        </div>

        {/* 3-Column Unified Stat Bar */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border rounded-[32px] border border-border bg-white shadow-elegant overflow-hidden"
        >
          {/* Card 1: 24/7 */}
          <motion.div variants={cardVariants} className="group relative overflow-hidden p-8 lg:p-10 hover:bg-surface-alt transition-colors duration-500">
            <div className="absolute -right-8 -top-8 text-[140px] font-black text-ink/[0.02] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700">
              24
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-[56px] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-accent to-amber-600 drop-shadow-sm">
                  24/7
                </h3>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">Every call answered</h4>
                <p className="text-ink-muted leading-relaxed text-[15px]">
                  Storm calls, service calls and follow-ups, day, night and weekends.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 38% */}
          <motion.div variants={cardVariants} className="group relative overflow-hidden p-8 lg:p-10 hover:bg-surface-alt transition-colors duration-500">
            <div className="absolute -right-2 -top-6 text-[140px] font-black text-ink/[0.02] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700">
              %
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 rounded-2xl bg-success/10 flex items-center justify-center border border-success/20 text-success">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-[56px] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-success to-emerald-400 drop-shadow-sm">
                  38%
                </h3>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">More jobs booked</h4>
                <p className="text-ink-muted leading-relaxed text-[15px]">
                  Representative lift from capturing after-hours and storm-surge calls.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Parallel */}
          <motion.div variants={cardVariants} className="group relative overflow-hidden p-8 lg:p-10 hover:bg-surface-alt transition-colors duration-500">
            <div className="absolute -right-4 -top-6 text-[140px] font-black text-ink/[0.02] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700">
              //
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20 text-blue-600">
                  <Headset className="h-6 w-6" />
                </div>
                <h3 className="text-[42px] xl:text-[48px] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-400 drop-shadow-sm pt-2">
                  Parallel
                </h3>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-ink mb-2">Lines answered at once</h4>
                <p className="text-ink-muted leading-relaxed text-[15px]">
                  A dozen homeowners calling together? All of them get picked up.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
