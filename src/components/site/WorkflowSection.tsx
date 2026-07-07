import { motion } from "framer-motion";
import { PhoneCall, Bot, MapPin, ClipboardCheck, Calendar, Database, Truck, MessageSquareText } from "lucide-react";
import { SectionHeading } from "./Section";

const steps = [
  { icon: PhoneCall, t: "Incoming call", s: "Customer dials in" },
  { icon: Bot, t: "AI answers", s: "Under 2s pickup" },
  { icon: MapPin, t: "Address captured", s: "Geo & storm zone" },
  { icon: ClipboardCheck, t: "Damage logged", s: "Notes & photos req." },
  { icon: Calendar, t: "Inspection booked", s: "Real crew slots" },
  { icon: Database, t: "CRM updated", s: "Lead + transcript" },
  { icon: Truck, t: "Crew dispatched", s: "Route optimized" },
  { icon: MessageSquareText, t: "SMS confirmed", s: "Customer texted" },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="The Workflow"
          title={<>One call. Eight seconds. <span className="text-accent">Zero human touch.</span></>}
          description="Every inbound follows the same clean, auditable path — from the first ring to the crew rolling out the shop."
        />
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative grid h-24 w-24 place-items-center rounded-[16px] border border-border bg-white shadow-card">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="mt-4 text-[14px] font-semibold text-ink">{step.t}</p>
                <p className="mt-1 text-[12px] text-ink-muted">{step.s}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}