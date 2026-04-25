import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordsPullUp from "@/components/WordsPullUp";
import axtremeImg from "@/assets/project-axtremefit.png";
import careClinicImg from "@/assets/project-careclinic.png";
import meenakshiImg from "@/assets/project-meenakshi.png";

interface Project {
  index: string;
  title: string;
  category: string;
  year: string;
  url: string;
  description: string;
  tags: string[];
  image: string;
  accent: string; // hex for accent overlay
}

const projects: Project[] = [
  {
    index: "01",
    title: "Axtreme Fit",
    category: "Fitness · Studio Website",
    year: "2025",
    url: "https://axtremefit.vercel.app/",
    description:
      "A bold, cinematic site for a premium training studio. Dark, moody visuals paired with sharp typography and electric accents to communicate intensity and discipline.",
    tags: ["Web Design", "Branding", "Motion"],
    image: axtremeImg,
    accent: "#CCFF00",
  },
  {
    index: "02",
    title: "CareClinic",
    category: "Healthcare · Clinic Website",
    year: "2025",
    url: "https://careclinicmed.vercel.app/",
    description:
      "A calm, trustworthy presence for a family clinic. Soft gradients, generous spacing, and clear hierarchy turn medical content into something warm and human.",
    tags: ["Web Design", "UX", "Front-end"],
    image: careClinicImg,
    accent: "#FFB088",
  },
  {
    index: "03",
    title: "Dr Meenakshi Ahuja",
    category: "Healthcare · Specialist Website",
    year: "2025",
    url: "https://drmeenakshi.vercel.app",
    description:
      "A professional and welcoming digital space for a leading healthcare specialist. Clean layouts, calming aesthetics, and patient-focused design to build trust and accessibility.",
    tags: ["Web Design", "Development", "UI/UX"],
    image: meenakshiImg,
    accent: "#99C1FF",
  },
];

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [1.15, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-30, 30]);

  const isReversed = idx % 2 === 1;

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className="grid grid-cols-12 gap-6 md:gap-10 items-center"
    >
      {/* Visual */}
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`col-span-12 lg:col-span-7 ${isReversed ? "lg:order-2" : ""} group relative block overflow-hidden rounded-2xl md:rounded-3xl bg-[#101010]`}
        initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            loading="lazy"
            style={{ scale: imageScale, y: imageY }}
            className="absolute inset-0 w-full h-full object-cover object-top will-change-transform"
          />
          {/* noise + tint */}
          <div className="absolute inset-0 noise-overlay opacity-[0.35] mix-blend-overlay pointer-events-none" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(60% 60% at 50% 50%, ${project.accent}22 0%, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Hover CTA */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <div
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full pl-4 pr-2 py-1.5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            >
              <span className="text-xs sm:text-sm font-medium">View live</span>
              <span className="bg-black rounded-full w-7 h-7 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#E1E0CC" }} />
              </span>
            </div>
          </div>
        </div>
      </motion.a>

      {/* Meta */}
      <div className={`col-span-12 lg:col-span-5 ${isReversed ? "lg:order-1 lg:pr-8" : "lg:pl-4"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex items-center gap-4 mb-5"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(225, 224, 204, 0.5)" }}
          >
            {project.index}
          </span>
          <span className="h-px flex-1" style={{ background: "rgba(225, 224, 204, 0.18)" }} />
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(225, 224, 204, 0.5)" }}>
            {project.year}
          </span>
        </motion.div>

        <h3
          className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.95] tracking-tight mb-4"
          style={{ color: "#E1E0CC" }}
        >
          <WordsPullUp text={project.title} stagger={0.08} duration={1} initialY={28} initialBlur={6} />
        </h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-sm md:text-base mb-3"
          style={{ color: "rgba(225, 224, 204, 0.55)" }}
        >
          {project.category}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-sm md:text-base leading-relaxed mb-6 max-w-md"
          style={{ color: "rgba(225, 224, 204, 0.78)" }}
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-7"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs tracking-wider uppercase rounded-full border px-3 py-1"
              style={{ borderColor: "rgba(225, 224, 204, 0.18)", color: "rgba(225, 224, 204, 0.7)" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="group inline-flex items-center gap-1 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-1 transition-all w-fit"
        >
          <span className="text-primary-foreground font-medium text-sm sm:text-base pr-1">Visit website</span>
          <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
          </span>
        </motion.a>
      </div>
    </motion.article>
  );
};

const Marquee = () => {
  const items = ["Web Design", "Brand Identity", "Front-end", "Motion", "UX", "Art Direction"];
  return (
    <div className="overflow-hidden border-y my-24 md:my-32" style={{ borderColor: "rgba(225, 224, 204, 0.12)" }}>
      <motion.div
        className="flex gap-12 whitespace-nowrap py-6 md:py-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight flex items-center gap-12"
            style={{ color: "#E1E0CC" }}
          >
            {item}
            <span className="opacity-30">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0.2]);

  useEffect(() => {
    document.title = "Projects — Kyron Design Agency";
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      {/* Loading overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{ pointerEvents: loaded ? "none" : "auto" }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase"
          style={{ color: "rgba(225, 224, 204, 0.6)" }}
        >
          Loading work
        </motion.span>
      </motion.div>

      <Navbar showHomeLogo />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(225, 224, 204, 0.6)" }}
            >
              Selected Works · 2025
            </span>
          </motion.div>

          <h1
            className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-medium leading-[0.88] tracking-[-0.05em]"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUp text="Projects" stagger={0.12} duration={1.2} initialY={48} initialBlur={10} />
          </h1>

          <div className="grid grid-cols-12 gap-6 mt-10 md:mt-14">
            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-7 lg:col-span-6 text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(225, 224, 204, 0.78)" }}
            >
              A curated selection of work — websites built to feel calm, intentional, and quietly memorable. Each project is shaped around the brand's soul, not a template.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col gap-1"
            >
              <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(225, 224, 204, 0.5)" }}>
                Live projects
              </span>
              <span className="text-5xl md:text-6xl font-medium" style={{ color: "#E1E0CC" }}>
                {String(projects.length).padStart(2, "0")}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects list */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </section>

      <Marquee />

      {/* CTA */}
      <section className="px-4 md:px-8 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 noise-overlay opacity-[0.25] mix-blend-overlay pointer-events-none" />
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-6 inline-block"
            style={{ color: "rgba(225, 224, 204, 0.6)" }}
          >
            More work in progress
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] tracking-tight max-w-3xl mx-auto"
            style={{ color: "#E1E0CC" }}
          >
            Have a project in mind? <span className="italic font-serif">Let's build it together.</span>
          </h2>
          <a
            href="/hire-me"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/hire-me";
            }}
            className="group inline-flex items-center gap-1 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-1 transition-all w-fit mt-10"
          >
            <span className="text-primary-foreground font-medium text-sm sm:text-base pr-1">Hire Me</span>
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
            </span>
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
