import { SectionHeading, Reveal } from "./Section";
import { Star } from "lucide-react";

const t = [
  { q: "SuperMIA answers calls at 2am on a Saturday. Try asking your call center to do that.", n: "Elena Ruiz", r: "COO, Skyline Roofing", i: "ER" },
  { q: "We stopped losing hail leads to the guy across town. Booked 400 inspections last month, zero missed calls.", n: "Kyle Freeman", r: "GM, Cornerstone Exteriors", i: "KF" },
  { q: "The transcripts alone paid for the product. My estimators walk in already knowing the story.", n: "Amir Patel", r: "VP Ops, Northline Roofing Group", i: "AP" },
  { q: "Our office manager runs the shop now, not the phones. It’s the most obvious hire we’ve made.", n: "Diana Cross", r: "Owner, Cross Family Roofing", i: "DC" },
  { q: "Rolled it out across all 4 branches in a week. CRM stays clean. Dispatch just works.", n: "Terrence Wu", r: "Regional Director, StormShield", i: "TW" },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Operators talking"
          title={<>Loved by the shops that <span className="text-accent">never miss a storm.</span></>}
        />
        <Reveal className="mt-12">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {t.map((x) => (
              <figure key={x.n} className="rounded-[16px] border border-border bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-[16px] leading-relaxed text-ink">“{x.q}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[11px] font-semibold text-white">{x.i}</div>
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink">{x.n}</p>
                    <p className="text-[12px] text-ink-muted">{x.r}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}