import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service. We continuously update our platform to provide the best experience possible.",
    bg: "bg-[#050505]",
    glow: "bg-emerald-500"
  },
  {
    title: "Provision of Services",
    content: "SuperMIA provides an AI-powered service desk designed specifically for roofing operators. We reserve the right to modify, suspend, or discontinue the service with or without notice at any time and without any liability to you. Our goal is 99.9% uptime and reliability.",
    bg: "bg-[#0a0a0a]",
    glow: "bg-blue-500"
  },
  {
    title: "User Conduct",
    content: "You are responsible for all activity that occurs under your account. You agree not to use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.",
    bg: "bg-[#0f0f0f]",
    glow: "bg-purple-500"
  },
  {
    title: "Intellectual Property",
    content: "All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of SuperMIA or its content suppliers and protected by international copyright laws.",
    bg: "bg-[#141414]",
    glow: "bg-rose-500"
  },
  {
    title: "Limitation of Liability",
    content: "SuperMIA shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
    bg: "bg-[#1a1a1a]",
    glow: "bg-amber-500"
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which SuperMIA operates, without regard to its conflict of law provisions.",
    bg: "bg-[#1f1f1f]",
    glow: "bg-cyan-500"
  }
];

function FullWidthPanel({ section, index, total }: { section: any, index: number, total: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "start start"]
  });
  
  // Fade content slightly as it gets covered, but keep panel solid
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div 
      ref={panelRef}
      className={`sticky w-full h-screen border-t border-white/10 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center overflow-hidden ${section.bg}`}
      style={{ 
        // Full screen stack up: every card sticks exactly to the top, covering the previous one entirely.
        // This gives 100% of the screen height to the content, perfect for small screens.
        top: 0, 
        zIndex: index + 10,
        marginBottom: 0
      }}
    >
       {/* Cinematic Ambient Glow */}
       <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3 ${section.glow}`} />
       
       <motion.div 
         style={{ opacity: contentOpacity }}
         className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start relative z-10 -mt-[10vh]"
       >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className={`w-12 h-[2px] ${section.glow} shadow-[0_0_15px_currentColor]`} />
              <span className="text-slate-500 font-mono text-xl tracking-widest font-bold">0{index + 1}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
              {section.title}
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:pt-16">
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              {section.content}
            </p>
          </div>
       </motion.div>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-accent/30 selection:text-white">
      <SiteHeader />
      
      <main className="flex-1 relative w-full pt-32">
        
        {/* Clean, Professional Intro Section */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-24 relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-accent" />
               <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-300">Legal Document</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Terms of Service
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Please read these terms carefully before using SuperMIA. By accessing and using our AI service desk, you agree to be bound by the terms and provisions of this agreement.
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-sm text-slate-500">
              <span>Last updated: {new Date().toLocaleDateString()}</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>Effective immediately</span>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Stacking Panels */}
        <div className="relative w-full">
          {termsSections.map((section, idx) => (
            <FullWidthPanel key={idx} section={section} index={idx} total={termsSections.length} />
          ))}
        </div>

      </main>
      
      {/* Footer naturally follows the last panel */}
      <div className="relative z-[100] bg-[#1f1f1f] border-t border-white/10">
        <SiteFooter />
      </div>
    </div>
  );
}
