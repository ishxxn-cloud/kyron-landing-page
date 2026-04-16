import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
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

const HireMe = () => (
  <main className="bg-background min-h-screen">
    <Navbar showHomeLogo />
    <section className="relative pt-24 pb-20 px-4 md:px-8">
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.95] text-foreground">
            One-time projects
          </h1>
          <p className="mt-5 text-sm md:text-base text-muted-foreground">
            Perfect when you need a focused redesign or a complete website built from scratch—delivered with the same Kyron quality.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={enterUp}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-stretch"
        >
          {/* Redesign */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-8 bg-[#1d1d1d]/70 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_30%_20%,rgba(255,255,255,0.07),transparent_60%)]" />
            <div className="relative flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Redesign</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                ₹10,000–₹15,000
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Best for improving an existing website's look, structure, and conversion flow—without starting from zero.
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Visual refresh & modern UI",
                  "Improved layout & hierarchy",
                  "Mobile responsiveness",
                  "Conversion-focused structure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-snug">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-7 group inline-flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 transition-colors"
              >
                <span className="text-sm md:text-base font-medium text-foreground">
                  Request redesign
                </span>
              </a>
            </div>
          </motion.div>

          {/* Complete website */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-8 bg-[#1d1d1d]/70 border border-primary/40 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.6)] hover:border-primary/60"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_circle_at_30%_20%,rgba(225,224,204,0.10),transparent_60%)]" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Complete website</p>
                <span className="inline-flex items-center rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-[11px] tracking-wide text-primary">
                  Recommended
                </span>
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                ₹15,000–₹20,000
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Best when you want a complete website designed from scratch with a cohesive structure and modern UI across pages.
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {[
                  "Full design from scratch",
                  "Multi-page cohesive structure",
                  "SEO & performance foundations",
                  "Launch-ready with handoff",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-snug">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-7 group inline-flex items-center justify-center w-full bg-primary rounded-full px-5 py-2.5 transition-opacity hover:opacity-90"
              >
                <span className="text-sm md:text-base font-medium text-primary-foreground">Request a full website</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* How it works */}
        <motion.div variants={enterUp} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[0.95] text-foreground">
              How it works
            </h3>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Share your vision, and I'll handle the rest—from concept to a polished, launch-ready website.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { k: "01", t: "Brief", d: "Share your goals, brand direction, and any references you love." },
                { k: "02", t: "Design", d: "I design, iterate with your feedback, and refine every detail." },
                { k: "03", t: "Deliver", d: "You get a polished, launch-ready website you're proud of." },
              ].map((s) => (
                <motion.div
                  key={s.k}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="rounded-2xl p-5 bg-[#1d1d1d]/60 border border-white/10 backdrop-blur-md hover:border-white/20"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground text-xs">({s.k})</span>
                    <h4 className="text-base md:text-lg font-medium tracking-tight text-foreground">
                      {s.t}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-snug">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cross-link to subscription */}
        <motion.div variants={enterUp} transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }} className="mt-10">
          <p className="text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
            Want regular tweaks and continuous improvements?{" "}
            <a href="/subscription" className="text-primary hover:opacity-80 transition-opacity">
              Choose a subscription
            </a>
            .
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={enterUp} transition={{ duration: 1.55, ease: [0.22, 1, 0.36, 1] }} className="mt-10">
          <a
            href="#"
            className="group inline-flex items-center gap-1 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-1 transition-all w-fit"
          >
            <span className="text-primary-foreground font-medium text-sm sm:text-base pr-1">Get in touch</span>
            <span className="bg-background rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="w-4 h-4 text-foreground" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </main>
);

export default HireMe;
