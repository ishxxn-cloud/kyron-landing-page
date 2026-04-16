import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.95]" style={{ color: "#E1E0CC" }}>
            One-time projects
          </h1>
          <p className="mt-5 text-sm md:text-base" style={{ color: "rgba(225, 224, 204, 0.6)" }}>
            Perfect when you need a focused redesign or a complete website built from scratch—delivered with the same Kyron quality.
          </p>
        </motion.div>

        {/* One-time pricing */}
        <motion.div
          variants={enterUp}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-stretch"
        >
          {/* Redesign */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-7 bg-[#1d1d1d]/70 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)] hover:border-white/20"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(700px_circle_at_30%_20%,rgba(255,255,255,0.07),transparent_60%)]" />
            <div className="relative flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest text-gray-500">Redesign</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                ₹10,000–₹15,000
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-400 leading-snug">
                Best for improving an existing website’s look, structure, and conversion flow—without starting from zero.
              </p>

              <a
                href="#"
                className="mt-7 group inline-flex items-center justify-center w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 transition-colors"
              >
                <span className="text-sm md:text-base font-medium" style={{ color: "#E1E0CC" }}>
                  Request redesign
                </span>
              </a>
            </div>
          </motion.div>

          {/* Complete website */}
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative rounded-2xl p-6 md:p-7 bg-[#1d1d1d]/70 border border-primary/40 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.6)] hover:border-primary/60"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_circle_at_30%_20%,rgba(225,224,204,0.10),transparent_60%)]" />
            <div className="relative flex flex-col h-full">
              <p className="text-xs uppercase tracking-widest text-gray-500">Complete website</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
                ₹15,000–₹20,000
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-400 leading-snug">
                Best when you want a complete website designed from scratch with a cohesive structure and modern UI across pages.
              </p>

              <a
                href="#"
                className="mt-7 group inline-flex items-center justify-center w-full bg-primary rounded-full px-5 py-2.5 transition-opacity hover:opacity-90"
              >
                <span className="text-sm md:text-base font-medium text-primary-foreground">Request a full website</span>
              </a>
            </div>
          </motion.div>
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
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
    <Footer />
  </main>
);

export default HireMe;
