import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const enterUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.22 },
  },
};

const Subscription = () => (
  <main className="bg-black min-h-screen">
    <Navbar showHomeLogo />
    <section className="relative pt-24 pb-20 px-4 md:px-8">
      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-160px" }}
      >
        {/* Header */}
        <motion.div variants={enterUp} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} className="max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.95]"
            style={{ color: "#E1E0CC" }}
          >
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
            Choose a plan that fits your business. No contracts. Pause or cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div variants={enterUp} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {/* Starter */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-7 bg-[#1d1d1d]/70 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_30%_20%,rgba(255,255,255,0.07),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Starter</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                    ₹10,000<span className="text-sm md:text-base text-gray-500">/month</span>
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited requests (one at a time)",
                  "Website edits and fixes",
                  "Basic UI improvements",
                  "48–72 hour turnaround",
                  "Email support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-400 text-sm md:text-base leading-snug">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

                <a
                  href="https://forms.gle/ijYv17nkJJXGofBV6"
                  target="_blank"
                  rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 transition-colors"
              >
                <span className="text-sm md:text-base font-medium" style={{ color: "#E1E0CC" }}>
                  Get Starter
                </span>
              </a>
            </div>
          </motion.div>

          {/* Growth (Most popular) */}
          <motion.div
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-7 bg-[#1d1d1d]/70 border border-primary/40 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.6)] hover:border-primary/60"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_circle_at_30%_20%,rgba(225,224,204,0.10),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Growth</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                    ₹20,000<span className="text-sm md:text-base text-gray-500">/month</span>
                  </h2>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-[11px] tracking-wide text-primary">
                  Most popular
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited requests (one at a time)",
                  "Landing page design",
                  "Website redesign sections",
                  "24–48 hour turnaround",
                  "Priority support",
                  "Conversion-focused improvements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-400 text-sm md:text-base leading-snug">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/ijYv17nkJJXGofBV6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 group inline-flex items-center justify-center w-full bg-primary rounded-full px-5 py-2.5 transition-opacity hover:opacity-90"
              >
                <span className="text-sm md:text-base font-medium text-primary-foreground">Get Growth</span>
              </a>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-7 bg-[#1d1d1d]/70 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_30%_20%,rgba(255,255,255,0.07),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Pro</p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                    ₹30,000<span className="text-sm md:text-base text-gray-500">/month</span>
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Unlimited requests (two at a time)",
                  "Full website builds",
                  "Advanced UI/UX design",
                  "24 hour turnaround",
                  "Strategy and consultation",
                  "Priority queue",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-400 text-sm md:text-base leading-snug">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/ijYv17nkJJXGofBV6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 transition-colors"
              >
                <span className="text-sm md:text-base font-medium" style={{ color: "#E1E0CC" }}>
                  Get Pro
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust note */}
        <motion.div variants={enterUp} transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }} className="mt-8">
          <p className="text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
            No contracts. No hidden fees. Just results.
          </p>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
            Want a one-time job? Opt for a redesign or a complete website from scratch.{" "}
            <a href="/hire-me" className="text-primary hover:opacity-80 transition-opacity">
              Hire me
            </a>
            .
          </p>
          <p className="mt-2 text-xs md:text-sm text-gray-500">Fair usage policy applies.</p>
        </motion.div>

        {/* How it works */}
        <motion.div variants={enterUp} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[0.95]" style={{ color: "#E1E0CC" }}>
              How it works
            </h3>
            <p className="mt-4 text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
              Submit unlimited design requests. We work through them one at a time on Starter and Growth, or two at a time on Pro.
              Once one task is completed, the next request in your queue begins automatically.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { k: "01", t: "Submit", d: "Add requests anytime—edits, redesigns, or new pages." },
                { k: "02", t: "Build", d: "We design, iterate, and ship with clear checkpoints." },
                { k: "03", t: "Repeat", d: "As soon as one’s done, the next request starts." },
              ].map((s) => (
                <motion.div
                  key={s.k}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="rounded-2xl p-5 bg-[#1d1d1d]/60 border border-white/10 backdrop-blur-md hover:border-white/20"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 text-xs">({s.k})</span>
                    <h4 className="text-base md:text-lg font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                      {s.t}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 leading-snug">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={enterUp} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} className="mt-16 md:mt-20">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[0.95]" style={{ color: "#E1E0CC" }}>
            FAQ
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-3 md:gap-4">
            {[
              {
                q: "What’s the turnaround time?",
                a: "Starter requests are typically delivered in 48–72 hours. Growth is 24–48 hours. Pro is 24 hours for most requests (larger builds are scoped into milestones).",
              },
              {
                q: "What does “unlimited requests” mean?",
                a: "You can submit as many requests as you want. We’ll work on them sequentially—one at a time on Starter/Growth, and two at a time on Pro—so delivery stays fast and consistent.",
              },
              {
                q: "Can I pause or cancel anytime?",
                a: "Yes. There are no contracts. Pause or cancel anytime and pick things back up when you’re ready.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.q}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-white/10 bg-[#1d1d1d]/55 backdrop-blur-md px-5 md:px-6"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`faq-${idx}`} className="border-white/0">
                    <AccordionTrigger
                      className="py-5 md:py-6 text-lg md:text-xl font-medium tracking-tight"
                      style={{ color: "#E1E0CC" }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </main>
);

export default Subscription;
