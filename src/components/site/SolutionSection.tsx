import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall, Calendar, Building2, Truck, AlertOctagon } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

const does = [
  { icon: PhoneCall, title: "Answers every inbound call", copy: "Under 2 seconds. 24/7. Unlimited concurrent conversations, in English or Spanish." },
  { icon: Calendar, title: "Books the inspection on the spot", copy: "Reads live crew availability, offers real time slots, sends confirmation via SMS." },
  { icon: AlertOctagon, title: "Flags emergency leaks", copy: "Detects urgency, routes hail and active leak calls to on-call foremen instantly." },
  { icon: Building2, title: "Updates your CRM", copy: "Creates the lead, attaches the transcript, sets stage, notes storm zone, done." },
  { icon: Truck, title: "Dispatches the right crew", copy: "Auto-assigns by geography, workload and product line — with route-optimized ETAs." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="bg-surface-alt py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Meet Max"
            title={
              <>
                An AI service desk that runs your front office <span className="text-accent">while you run the roof.</span>
              </>
            }
            description="Max isn’t a chatbot. It’s a full inbound operations layer purpose-built for roofing — trained on tens of thousands of storm calls, hail claims, and inspection bookings."
          />
          <div className="mt-8 rounded-2xl border border-border bg-white p-5 shadow-card">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-ink-muted">Coverage today</p>
            <div className="mt-3 grid grid-cols-3 gap-4">
              {[
                { k: "24 / 7", v: "always on" },
                { k: "< 2s", v: "answer time" },
                { k: "∞", v: "concurrent calls" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-[22px] font-semibold text-ink">{s.k}</p>
                  <p className="text-[12px] text-ink-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {does.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <li className="group flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white transition-colors group-hover:bg-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[18px] font-semibold text-ink">{f.title}</h3>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  </div>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-ink-muted">{f.copy}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}