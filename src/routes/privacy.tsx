import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

const privacySections = [
  {
    title: "Information We Collect",
    content: "When you use our services, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We collect this information to ensure our services run smoothly and securely.",
    bg: "bg-[#050505]",
    glow: "bg-emerald-500"
  },
  {
    title: "How We Use Your Data",
    content: "We use the information that we collect generally to fulfill any requests placed through the service, process payments, arrange for shipping, and provide you with invoices and/or order confirmations. Additionally, we use this information to communicate with you and screen our requests for potential risk or fraud.",
    bg: "bg-[#0a0a0a]",
    glow: "bg-blue-500"
  },
  {
    title: "Retention & Security",
    content: "When you use SuperMIA to answer calls and book inspections, we maintain those records for your administrative purposes. You may ask us to delete this information at any time. We use enterprise-grade encryption and security protocols to ensure your customer data remains strictly confidential and protected.",
    bg: "bg-[#0f0f0f]",
    glow: "bg-purple-500"
  },
  {
    title: "Policy Changes",
    content: "We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page.",
    bg: "bg-[#141414]",
    glow: "bg-rose-500"
  },
  {
    title: "Contact Us",
    content: "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@supermia.com or by mail using the details provided on our contact page.",
    bg: "bg-[#1a1a1a]",
    glow: "bg-amber-500"
  }
];

function FullWidthPanel({ section, index }: { section: any, index: number }) {
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
        // Create a perfect "folder tab" stacking effect. Each tab is 60px lower than the previous.
        // We start stacking at 10vh so it sits nicely under the navbar.
        top: `calc(10vh + ${index * 60}px)`, 
        zIndex: index + 10,
        // Ensure no weird empty space. 
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

function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              At SuperMIA, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or use our AI service desk application.
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
          {privacySections.map((section, idx) => (
            <FullWidthPanel key={idx} section={section} index={idx} />
          ))}
        </div>

      </main>
      
      {/* Footer naturally follows the last panel */}
      <div className="relative z-[100] bg-[#1a1a1a] border-t border-white/10">
        <SiteFooter />
      </div>
    </div>
  );
}
