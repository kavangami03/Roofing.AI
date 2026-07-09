import { motion } from "framer-motion";
import { ArrowRight, Twitter, Linkedin, Instagram, Github, CheckCircle2, Cloud, ArrowUp } from "lucide-react";

const cols = [
  { 
    title: "Product", 
    links: [
      { label: "AI Receptionist", href: "#product" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "Analytics", href: "#dashboard" },
      { label: "Integrations", href: "#integration" },
      { label: "Pricing", href: "#pricing" }
    ] 
  },
  { 
    title: "Customers", 
    links: [
      { label: "Why Switch", href: "#why-switch" },
      { label: "Case Studies", href: "#customers" },
      { label: "ROI Calculator", href: "#roi-calculator" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Book a Demo", href: "#demo" }
    ] 
  }
];

export function SiteFooter() {
  return (
    <footer className="relative bg-[#111111] pt-32 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-accent/5 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="container-page max-w-7xl mx-auto px-4 relative z-10">
        


        {/* 2. Footer Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-10 gap-12 lg:gap-8 mb-10">
           
           {/* Brand Column */}
           <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-12">
              <div className="flex items-center gap-3 mb-6">
                 <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/80 to-accent text-[#111] shadow-lg">
                    <Cloud className="h-5 w-5" />
                 </div>
                 <span className="text-2xl font-bold text-white tracking-tight">SuperMIA</span>
              </div>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-sm">
                The AI service desk built specifically for roofing operators. Answer every call. Book every inspection. Recover every storm lead.
              </p>
              <div className="flex items-center gap-4">
                 {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-black hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-accent/25">
                       <Icon className="w-4 h-4" />
                    </a>
                 ))}
              </div>
           </div>

           {/* Links Columns */}
           {cols.map((col) => (
              <div key={col.title} className="col-span-1 lg:col-span-2">
                 <h3 className="text-white font-bold tracking-wide mb-6">{col.title}</h3>
                 <ul className="space-y-4">
                   {col.links.map(link => (
                      <li key={link.label}>
                         <a href={link.href} className="group flex items-center text-slate-400 hover:text-white transition-colors text-[14px] font-medium">
                            {link.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-accent" />
                         </a>
                      </li>
                   ))}
                 </ul>
              </div>
           ))}
        </div>

        {/* 3. Massive Typography Watermark */}
        <div className="w-full flex justify-center items-end overflow-hidden select-none pointer-events-none mb-8 border-t border-slate-800/50">
           <h1 className="text-[13vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none tracking-tighter mix-blend-plus-lighter">
              SUPERMIA
           </h1>
        </div>

        {/* 4. Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
           <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start text-center md:text-left">
             <span>© {new Date().getFullYear()} SuperMIA Roofing AI</span>
             <span className="text-slate-700 font-light">|</span>
             <span>by SuperMIA · Botfinity Inc.</span>
             <span className="text-slate-700 font-light">|</span>
             <span>All rights reserved.</span>
           </div>
           <div className="flex gap-6 items-center">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-4"
                aria-label="Back to top"
                title="Back to top"
              >
                 <ArrowUp className="w-4 h-4" />
              </button>
           </div>
        </div>

      </div>
    </footer>
  );
}