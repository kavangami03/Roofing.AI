import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Shield, Zap, Info } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      id: "essentials",
      tier: "Tier 01",
      name: "Essentials",
      target: "Solo and small crews",
      desc: "The always-on phone and chat agent. Stop losing after-hours and overflow calls.",
      priceMonthly: "$129",
      priceAnnual: "$109",
      priceSuffix: " / mo",
      features: [
        "Voice AI agent, inbound, 24/7",
        "Chat AI agent, web widget and SMS",
        "Storm-lead and damage capture",
        "Inspection and estimate booking",
        "Emergency-leak triage",
        "CRM sync, no double entry",
        "1,500 AI minutes / month, 1 location",
        "Email support, 24-hour response"
      ],
      buttonText: "Start a 30-day trial",
      highlighted: false
    },
    {
      id: "pro",
      tier: "Tier 02",
      name: "Pro",
      target: "Growing companies",
      desc: "The complete always-on service desk. Outbound, dispatch and intelligence.",
      priceMonthly: "$299",
      priceAnnual: "$254",
      priceSuffix: " / mo",
      badge: "Most chosen",
      features: [
        <span key="1"><strong>Everything in Essentials</strong>, plus</span>,
        "Outbound voice, estimate follow-up, check-ins",
        "Smart dispatch, by crew and service area",
        "Missed-call text-back, instant",
        "Job-status call handling",
        "Call scoring and quality review",
        "5,000 AI minutes / month",
        "Up to 5 crews, multi-line",
        "Priority support, 4-hour response"
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      id: "enterprise",
      tier: "Tier 03",
      name: "Enterprise",
      target: "Multi-location",
      desc: "For roofing companies with multiple branches. Scale, centralize, report.",
      priceMonthly: "$649",
      priceAnnual: "$551",
      priceSuffix: " / loc / mo",
      features: [
        <span key="1"><strong>Everything in Pro</strong>, plus</span>,
        "Multi-location roll-up and reporting",
        "Revenue analytics, by crew, service and area",
        "Centralized activity across branches",
        "Role-based team access",
        "Unlimited crews and AI minutes",
        "Dedicated success manager",
        "White-glove onboarding ($2,500 value)",
        "Custom integrations, 1-hour support"
      ],
      buttonText: "Talk to sales",
      highlighted: false
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
      {/* Premium Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container-page max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-accent mb-6 shadow-[0_0_20px_rgba(204,170,102,0.1)]"
          >
            <Zap className="w-3.5 h-3.5 fill-accent/20" /> Pricing
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Your whole service desk,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45]">three ways to get it.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10"
          >
            All plans include 24/7 answering, storm-surge capture, inspection booking, CRM sync, and unlimited concurrent calls.
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-[15px] font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-[64px] h-[34px] rounded-full bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
            >
              <div 
                className={`absolute top-[3px] left-[3px] w-[26px] h-[26px] rounded-full bg-accent transition-transform duration-300 shadow-[0_0_10px_rgba(204,170,102,0.5)] ${isAnnual ? 'translate-x-[30px]' : 'translate-x-0'}`} 
              />
            </button>
            <span className={`text-[15px] font-bold transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-white/40'}`}>
              Annual <span className="text-[10px] uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-full">Save 15%</span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8 items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[2rem] flex flex-col h-full bg-[#111111] border transition-all duration-300
                ${tier.highlighted 
                  ? 'border-accent shadow-[0_20px_60px_-15px_rgba(204,170,102,0.15)] lg:-translate-y-4' 
                  : 'border-white/10 hover:border-white/20'
                }`}
            >
              {/* Highlight Background Glow */}
              {tier.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent rounded-[2rem] pointer-events-none" />
              )}
              
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-accent text-[#111] text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(204,170,102,0.4)]">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="p-8 xl:p-10 border-b border-white/5 relative z-10">
                <div className="text-accent text-[12px] font-bold uppercase tracking-widest mb-3">{tier.tier}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-white/80 font-medium text-[15px] mb-4">{tier.target}</div>
                <p className="text-white/50 text-[14px] leading-relaxed h-[60px]">{tier.desc}</p>
                
                <div className="mt-8 mb-4">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-white tracking-tighter">
                      {isAnnual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    <span className="text-white/40 font-medium pb-2">{tier.priceSuffix}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-[13px] font-semibold">
                   <div className="bg-white/5 text-white/60 px-3 py-1.5 rounded-md border border-white/5">Billed {isAnnual ? 'annually' : 'monthly'}</div>
                   <div className="bg-accent/10 text-accent px-3 py-1.5 rounded-md border border-accent/20">First 2 months free</div>
                </div>
              </div>

              <div className="p-8 xl:p-10 flex-1 flex flex-col relative z-10">
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white/70" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-white/70 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all duration-300 relative overflow-hidden group
                    ${tier.highlighted 
                      ? 'bg-accent text-[#111] hover:shadow-[0_0_20px_rgba(204,170,102,0.4)]' 
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                >
                  <span className="relative z-10">{tier.buttonText}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Guarantees */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] font-bold uppercase tracking-widest text-white/40"
        >
          <div className="flex items-center gap-2"><Info className="w-4 h-4" /> No setup fee</div>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Cancel anytime</div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> 30-day money-back guarantee</div>
        </motion.div>

      </div>
    </section>
  );
}
