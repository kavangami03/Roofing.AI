import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 relative pt-32 pb-24 overflow-hidden isolate">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />

        <div className="container-page max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-white mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45]">Service</span>
            </h1>
            <p className="text-white/60 text-lg mb-12">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none text-white/80"
          >
            <p>
              Welcome to SuperMIA. Please read these terms of service carefully before using our website and AI service desk platform.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Provision of Services</h2>
            <p>
              SuperMIA provides an AI-powered service desk designed specifically for roofing operators. We reserve the right to modify, suspend, or discontinue the service with or without notice at any time and without any liability to you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Conduct and Responsibilities</h2>
            <p>
              You are responsible for all activity that occurs under your account. You agree not to use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of SuperMIA or its content suppliers and protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Limitation of Liability</h2>
            <p>
              SuperMIA shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which SuperMIA operates, without regard to its conflict of law provisions.
            </p>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
