import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const cardAnim = (i: number) => ({
  initial: { scale: 0.95, opacity: 0 },
  variants: {
    visible: { scale: 1, opacity: 1 },
  },
  transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
});

interface FeatureCardProps {
  index: number;
  number: string;
  title: string;
  icon: string;
  items: string[];
  inView: boolean;
}

const FeatureCard = ({ index, number, title, icon, items, inView }: FeatureCardProps) => {
  const anim = cardAnim(index);
  return (
    <motion.div
      className="bg-[#212121] rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full"
      initial={anim.initial}
      animate={inView ? "visible" : undefined}
      variants={anim.variants}
      transition={anim.transition}
    >
      <div>
        <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4" />
        <div className="flex items-baseline gap-2 mb-4">
          <h3 className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>{title}</h3>
          <span className="text-gray-500 text-xs">({number})</span>
        </div>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
              <Check className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className="inline-flex items-center gap-1 text-primary text-xs mt-4 hover:opacity-80 transition-opacity">
        Learn more <ArrowRight className="w-3 h-3 -rotate-45" />
      </a>
    </motion.div>
  );
};

const features = [
  {
    number: "01",
    title: "Project Storyboard.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: ["Visual timeline creation", "Scene-by-scene breakdown", "Collaborative annotations", "Export to PDF & video"],
  },
  {
    number: "02",
    title: "Smart Critiques.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: ["AI-powered visual analysis", "Creative direction notes", "Tool & plugin integrations"],
  },
  {
    number: "03",
    title: "Immersion Capsule.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: ["Notification silencing", "Ambient soundscapes", "Schedule syncing"],
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Studio-grade workflows for visionary creators.", className: "" },
              ]}
            />
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-1" style={{ color: "#E1E0CC" }}>
            <WordsPullUpMultiStyle
              segments={[
                { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
              ]}
            />
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Video card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[300px] lg:h-full"
            {...cardAnim(0)}
            animate={isInView ? "visible" : undefined}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium" style={{ color: "#E1E0CC" }}>
              Your creative canvas.
            </p>
          </motion.div>

          {features.map((f, i) => (
            <FeatureCard key={f.number} index={i + 1} inView={isInView} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
