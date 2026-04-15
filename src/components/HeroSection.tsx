import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const navItems = ["Our story", "Projects", "Subsciption", "Hire Me"];

const HeroSection = () => {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-12 gap-4 items-end">
            {/* Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Kyron" showAsterisk />
              </h1>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Kyron is a design agency for companies and individuals—driven by clarity, creativity, and purpose. Not bound by trends or limits, we turn ideas into meaningful digital experiences. At Kyron, we design to connect, elevate, and unlock potential.
              </motion.p>

              <motion.a
                href="#"
                className="group inline-flex items-center gap-1 hover:gap-3 bg-primary rounded-full pl-5 pr-2 py-1 transition-all w-fit"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-primary-foreground font-medium text-sm sm:text-base pr-1">Hire Me</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
