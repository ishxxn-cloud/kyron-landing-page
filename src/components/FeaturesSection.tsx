import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Compass, LayoutTemplate, Layers3 } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const cardAnim = (i: number) => ({
  initial: { scale: 0.95, opacity: 0, y: 0 },
  variants: {
    visible: { scale: 1, opacity: 1 },
  },
  transition: { delay: i * 0.2, duration: 1.15, ease: [0.22, 1, 0.36, 1] as const },
});

interface FeatureCardProps {
  index: number;
  number: string;
  title: string;
  Icon: typeof Compass;
  items: string[];
  inView: boolean;
}

const FeatureCard = ({ index, number, title, Icon, items, inView }: FeatureCardProps) => {
  const anim = cardAnim(index);
  return (
    <motion.div
      className="relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between w-full max-w-[420px] min-h-[320px] bg-[#1d1d1d]/70 border border-white/10 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.55)]"
      initial={anim.initial}
      animate={
        inView
          ? { ...anim.variants.visible, y: [0, -10, 0] }
          : anim.initial
      }
      transition={{
        ...anim.transition,
        y: { duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 + 0.35 },
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div>
        <div className="relative mb-5 inline-flex items-center gap-3">
          <div className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-gray-500 text-xs sm:text-sm">({number})</span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <h3 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "#E1E0CC" }}>
            {title}
          </h3>
        </div>
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm sm:text-base leading-snug">
              <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const features = [
  {
    number: "01",
    title: "Discovery & Strategy.",
    Icon: Compass,
    items: ["Business goals & positioning", "Audience + competitor research", "Sitemap & conversion funnel", "Content plan & messaging"],
  },
  {
    number: "02",
    title: "UX Wireframes.",
    Icon: LayoutTemplate,
    items: ["User flows & page hierarchy", "Fast iteration on layouts", "Mobile-first structure", "Clear CTAs & conversion paths"],
  },
  {
    number: "03",
    title: "Design System & Build.",
    Icon: Layers3,
    items: ["Brand-aligned UI components", "Responsive design across breakpoints", "Performance + SEO foundations", "Launch-ready handoff & support"],
  },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen bg-black relative px-4 md:px-6 py-20 md:py-32">
      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Studio-grade workflows for visionary creators.", className: "" },
              ]}
            />
          </h2>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mt-2"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
              ]}
            />
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.number} index={i} inView={isInView} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
