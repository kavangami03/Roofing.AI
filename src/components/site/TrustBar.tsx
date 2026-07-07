const logos = [
  "ServiceTitan", "JobNimbus", "AccuLynx", "HubSpot", "Salesforce",
  "CompanyCam", "Roofr", "Google Calendar", "Twilio", "Slack",
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface-alt py-10">
      <div className="container-page flex flex-col items-center gap-6">
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Plugs into every tool your ops team already runs
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-alt to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-alt to-transparent" />
          <div className="flex w-max animate-marquee gap-14">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[18px] font-semibold tracking-tight text-ink/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}