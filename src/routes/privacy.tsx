import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 relative pt-32 pb-24 overflow-hidden isolate">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />

        <div className="container-page max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-balance text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[58px] lg:text-[72px] text-white mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#B08D45]">Policy</span>
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
              At SuperMIA, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website or use our AI service desk application.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Personal Information We Collect</h2>
            <p>
              When you use our services, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We collect this information to ensure our services run smoothly and securely.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How Do We Use Your Personal Information?</h2>
            <p>
              We use the information that we collect generally to fulfill any requests placed through the service, process payments, arrange for shipping, and provide you with invoices and/or order confirmations. Additionally, we use this information to communicate with you and screen our requests for potential risk or fraud.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Retention and Security</h2>
            <p>
              When you use SuperMIA to answer calls and book inspections, we maintain those records for your administrative purposes. You may ask us to delete this information at any time. We use enterprise-grade encryption and security protocols to ensure your customer data remains strictly confidential and protected.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Changes</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at privacy@supermia.com.
            </p>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
