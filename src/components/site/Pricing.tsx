import { Check, X, Sparkles } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

const plans = [
  {
    name: "Essentials",
    price: "$499",
    period: "/mo",
    desc: "For single-location shops answering their first storm season with AI.",
    features: ["Up to 500 calls / mo", "24/7 AI receptionist", "SMS confirmations", "1 CRM integration", "Email support"],
  },
  {
    name: "Pro",
    price: "$1,299",
    period: "/mo",
    desc: "The default for growing roofers who dispatch every day.",
    features: ["Up to 2,500 calls / mo", "Bilingual EN / ES", "Live dispatch board", "Storm-zone routing", "3 CRM integrations", "Dedicated onboarding"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For multi-branch operators with compliance, SLA and integration needs.",
    features: ["Unlimited calls", "Multi-branch routing", "Custom scripts + voices", "SSO + SOC 2 pack", "API access", "Named account team"],
  },
];

const compareRows = [
  { label: "Answers 24/7", vm: false, human: "9–5", mia: true },
  { label: "Under 2s pickup", vm: false, human: false, mia: true },
  { label: "Bilingual EN / ES", vm: false, human: "Extra", mia: true },
  { label: "Books inspection live", vm: false, human: "Sometimes", mia: true },
  { label: "Updates CRM automatically", vm: false, human: false, mia: true },
  { label: "Dispatches crews", vm: false, human: false, mia: true },
  { label: "Cost per lead", vm: "Lost", human: "$$", mia: "$" },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={<>Priced per shop, not per lead you almost lost.</>}
          description="Every plan includes onboarding, CRM sync, and unlimited concurrent calls."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div
                className={`relative flex h-full flex-col rounded-[16px] border p-7 transition-all ${
                  p.highlight
                    ? "border-accent bg-white text-ink shadow-lift hover:-translate-y-1"
                    : "border-border bg-white text-ink shadow-card hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-primary shadow-card">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <div>
                  <p className={`text-[13px] font-semibold uppercase tracking-wider ${p.highlight ? "text-accent" : "text-ink-muted"}`}>{p.name}</p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-[42px] font-semibold tracking-tight">{p.price}</span>
                    {p.period && <span className="text-[14px] text-ink-muted">{p.period}</span>}
                  </div>
                  <p className="mt-3 text-[14px] text-ink-muted">{p.desc}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span className="text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`group relative mt-8 inline-flex items-center justify-center overflow-hidden px-6 text-[15px] font-semibold transition-all rounded-[14px] h-[56px] hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-primary text-white shadow-sm"
                      : "border border-primary bg-transparent text-primary"
                  }`}
                >
                  <span className={`absolute inset-0 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${
                    p.highlight ? "bg-accent" : "bg-background"
                  }`} />
                  <span className={`relative z-10 transition-colors duration-300 ${
                    p.highlight
                      ? "text-white group-hover:text-primary"
                      : "text-primary"
                  }`}>
                    {p.name === "Enterprise" ? "Talk to sales" : "Start free trial"}
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
            <div className="grid grid-cols-4 border-b border-border bg-surface-alt px-4 py-4 text-[12px] font-semibold uppercase tracking-wider text-ink-muted sm:px-6">
              <span>Compare</span>
              <span className="text-center">Voicemail</span>
              <span className="text-center">Answering service</span>
              <span className="text-center text-accent">SuperMIA</span>
            </div>
            {compareRows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-4 items-center px-4 py-4 text-[14px] sm:px-6 ${i % 2 ? "bg-surface-alt/40" : ""}`}>
                <span className="font-medium text-ink">{r.label}</span>
                <Cell v={r.vm} />
                <Cell v={r.human} />
                <Cell v={r.mia} highlight />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Cell({ v, highlight }: { v: boolean | string; highlight?: boolean }) {
  const wrap = `flex items-center justify-center ${highlight ? "text-accent font-semibold" : "text-ink"}`;
  if (v === true) return <span className={wrap}><Check className="h-4 w-4" /></span>;
  if (v === false) return <span className="flex items-center justify-center text-ink-muted/60"><X className="h-4 w-4" /></span>;
  return <span className={`${wrap} text-[13px]`}>{v}</span>;
}