import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./Section";

const faqs = [
  { q: "Will homeowners know they’re talking to AI?", a: "Max introduces itself clearly and complies with local recording laws. Most homeowners simply notice how fast, polite and knowledgeable the call feels — and how quickly the inspection gets on the calendar." },
  { q: "Which CRMs does SuperMIA integrate with?", a: "Native integrations with JobNimbus, AccuLynx, ServiceTitan, HubSpot, Salesforce, Roofr, and CompanyCam. Anything else, we ship via Zapier or direct API in under a week." },
  { q: "What happens during a storm surge?", a: "SuperMIA scales to unlimited concurrent calls automatically. No busy signals, no queueing. Priority routing sends confirmed emergency leaks straight to your on-call foreman." },
  { q: "Can we use our own scripts and voice?", a: "Yes. On Pro and Enterprise plans you can fine-tune scripts per branch, upload custom offers, and select from a library of natural voices — or clone a voice you already use for marketing." },
  { q: "How fast can we launch?", a: "Most shops are live in 4–7 days. That includes phone porting or SIP forwarding, CRM mapping, and a 30-minute training session for your dispatch team." },
  { q: "Is it compliant?", a: "Yes. SOC 2 Type II, TCPA-aware consent handling, and full call recordings retained for the duration your compliance policy requires." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Answers, before you have to ask.</>}
          description="Still curious? Book a demo — we’ll walk your ops team through the whole thing in 25 minutes."
        />
        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-ink sm:text-[17px]">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border ${isOpen ? "bg-ink text-white border-ink" : "bg-white text-ink"}`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}