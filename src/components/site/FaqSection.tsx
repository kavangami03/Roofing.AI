import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ArrowRight, X } from "lucide-react";

export function FaqSection() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedFaq !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedFaq]);

  const faqs = [
    {
      q: "What is a roofing answering service?",
      a: "A roofing answering service is a specialized communications solution that handles inbound and outbound calls for your roofing business. Instead of relying on a human receptionist or a basic call center, our AI service desk, Max, handles everything from qualifying leads to booking inspections directly into your CRM—24/7."
    },
    {
      q: "Is this just a voice bot?",
      a: "No. It's a complete AI service desk for roofing. Max answers every call, qualifies storm-damage leads, books inspections into your real calendar, triages emergency leaks, handles status calls, and runs outbound follow-up. Voice, web chat, SMS and WhatsApp run on one AI brain."
    },
    {
      q: "How much does a roofing answering service cost?",
      a: "Traditional call centers charge per minute and often lack roofing expertise. With our AI service desk, plans start at $129/mo for solo crews, and $299/mo for our most popular Pro tier, which includes 5,000 AI minutes, outbound calling, and smart dispatch. Plus, there are no setup fees and you can cancel anytime."
    },
    {
      q: "Can it handle a storm surge?",
      a: "Absolutely. During a hail or wind storm, you might get 50 calls at the exact same time. Max scales infinitely to answer every single concurrent call immediately, ensuring you never miss a storm lead to a competitor."
    },
    {
      q: "Can it book inspections & estimates?",
      a: "Unlike traditional answering services that just email you a message, Max acts as an actual employee. It asks qualifying questions, pulls availability from your live calendar, and books the inspection directly into your CRM."
    },
    {
      q: "Does it triage emergency leaks?",
      a: "Yes. Max is trained to identify high-priority situations like active leaks. It can instantly triage the call, alert your on-call crew via SMS, and route the customer to the appropriate emergency workflow."
    },
    {
      q: "Does it integrate with my CRM?",
      a: "Yes, we integrate seamlessly with major roofing CRMs (like JobNimbus, AccuLynx, Roofr) and calendar systems to ensure no double-entry. If a lead is booked, it instantly appears in your pipeline."
    },
    {
      q: "Can it handle outbound calls?",
      a: "Yes. Beyond catching every inbound call, Max can run automated outbound campaigns to follow up on aging estimates, check in on past customers, or confirm upcoming inspection appointments."
    },
    {
      q: "How is it different from a call center?",
      a: "Call center reps read from a rigid script and often sound disconnected. Max uses advanced conversational AI trained specifically on roofing terminology. It understands context, handles interruptions naturally, and sounds incredibly human."
    },
    {
      q: "Can I review call recordings?",
      a: "Yes. Every single call is recorded, transcribed, and scored. You can review the exact conversations in your dashboard to maintain absolute quality control over your customer experience."
    },
    {
      q: "How fast can it go live?",
      a: "Our white-glove onboarding gets you fully operational quickly. Because we pre-train the AI on roofing workflows, we just need to tune it to your specific services and service area. You can be live and catching leads before the next storm hits."
    }
  ];

  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 lg:py-28 relative overflow-hidden border-t border-slate-200">
      {/* Light Theme & Gold Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B08D45]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container-page max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[#B08D45] mb-6 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Questions, answered
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-[#111111] mb-6 max-w-5xl mx-auto"
          >
            Roofing answering service: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D45] to-accent drop-shadow-sm">questions roofers ask.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-[17px] md:text-[19px] leading-relaxed mx-auto max-w-2xl"
          >
            Short answers to what comes up before roofing companies go live with their new AI service desk.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedFaq(index)}
                className="w-full h-full text-left bg-white border border-slate-200 p-8 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#B08D45]/10 hover:border-accent/40 group relative overflow-hidden"
              >
                {/* Hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-[17px] md:text-[19px] font-bold text-slate-900 leading-snug group-hover:text-[#B08D45] transition-colors pr-6">
                  {faq.q}
                </h3>
                
                <div className="mt-6 flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#B08D45]/60 group-hover:text-[#B08D45] transition-colors">
                  View Answer <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedFaq !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaq(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200"
            >
              {/* Decorative top border glow */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B08D45] to-accent" />
              
              <button
                onClick={() => setSelectedFaq(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#B08D45] mb-6">
                  <HelpCircle className="w-3.5 h-3.5" /> FAQ
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug">
                  {faqs[selectedFaq].q}
                </h3>
                
                <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed font-medium">
                  {faqs[selectedFaq].a}
                </p>
                
                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setSelectedFaq(null)}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors text-[14px]"
                  >
                    Close window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
