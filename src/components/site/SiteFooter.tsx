const cols = [
  { title: "Product", links: ["AI Receptionist", "Dispatch Board", "CRM Sync", "Analytics", "Integrations"] },
  { title: "Industries", links: ["Residential Roofing", "Commercial Roofing", "Storm Restoration", "Multi-branch", "Franchises"] },
  { title: "Resources", links: ["Blog", "ROI Calculator", "Case Studies", "Help Center", "Status"] },
  { title: "Company", links: ["About", "Customers", "Security", "Careers", "Contact"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-6">
        <div className="md:col-span-2 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-[10px] bg-white text-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M4 12L12 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12v7h12v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="14" r="1.5" fill="#F97316" />
              </svg>
            </div>
            <span className="text-[17px] font-semibold text-white">SuperMIA</span>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-white/60">
            The AI service desk built for roofing operators. Answer every call. Book every inspection. Recover every storm lead.
          </p>
          <div className="flex flex-wrap gap-2">
            {["SOC 2", "TCPA", "GDPR-ready"].map((b) => (
              <span key={b} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70">{b}</span>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/50">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="text-[14px] text-white/75 transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-[12.5px] text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SuperMIA, Inc. Built for roofers.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}