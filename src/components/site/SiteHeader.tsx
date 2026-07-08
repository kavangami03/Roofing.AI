import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const nav = [
  { label: "Product", href: "/#product" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Why Switch", href: "/#why-switch" },
  { label: "Customers", href: "/#customers" },
  { label: "Integration", href: "/#integration" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 mx-auto w-[calc(100%-2rem)] border border-border bg-white/90 shadow-elegant backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "top-3 max-w-[1280px] rounded-[16px] py-2 px-5 shadow-lift"
            : "top-4 max-w-[1720px] rounded-[20px] py-3.5 px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="/#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[16px] font-semibold tracking-tight text-[#111111]">
              SuperMIA
            </span>
          </a>

          <nav className="hidden items-center gap-1.5 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-full py-1.5 px-4 text-[13.5px] font-medium text-[#5F5F5F] transition-all duration-300 hover:text-[#111111]"
              >
                <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-[#F3F2EE] opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100" />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/#login"
              className="group relative rounded-full py-1.5 px-4 text-[13.5px] font-medium text-[#5F5F5F] transition-all duration-300 hover:text-[#111111]"
            >
              <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-[#F3F2EE] opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100" />
              Sign in
            </a>
            <a
              href="/#demo"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[12px] bg-primary px-5 h-[40px] text-[13.5px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-primary transition-colors duration-300">
                Book a demo
                <PhoneCall className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-white text-[#111111] transition-transform hover:scale-105 active:scale-95 lg:hidden"
          >
            <Menu className="h-4.5 w-4.5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#191919]/45 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white p-6 shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo />
                  <span className="font-semibold text-[#111111]">SuperMIA</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-[#111111]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className="border-b border-border py-4 text-2xl font-semibold tracking-tight text-[#111111]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <a
                  href="/#demo"
                  onClick={() => setOpen(false)}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-[14px] bg-primary h-[56px] text-sm font-semibold text-white shadow-sm transition-all"
                >
                  <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  <span className="relative z-10 text-white group-hover:text-primary transition-colors duration-300">
                    Book a demo
                  </span>
                </a>
                <a
                  href="/#login"
                  onClick={() => setOpen(false)}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-[14px] border border-primary bg-transparent h-[56px] text-sm font-semibold text-primary transition-all"
                >
                  <span className="absolute inset-0 translate-y-full bg-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  <span className="relative z-10 text-primary transition-colors duration-300">
                    Sign in
                  </span>
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-primary text-white shadow-card">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M4 12L12 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v7h12v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="1.5" fill="#C8A86B" />
      </svg>
    </div>
  );
}