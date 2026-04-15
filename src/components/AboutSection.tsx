import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const aboutText = "";

const AboutSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = aboutText.split("");

  return (
    <section id="about" className="bg-black py-24 md:py-40 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl p-10 md:p-20 lg:p-24 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-8 inline-block">Visual arts</span>

        <h2 className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl w-full max-w-4xl mx-auto leading-[1.05] sm:leading-[1]" style={{ color: "#E1E0CC" }}>
          <WordsPullUpMultiStyle
            containerClassName="justify-center"
            segments={[
              { text: "I am Kyro Sen,", className: "font-normal" },
              { text: "a self-taught designer.", className: "italic font-serif" },
              { text: "I specialise in web design, user experience & front end development, shaping digital spaces that are both functional & visually compelling. With a focus on clarity and detail, I craft websites that connect, engage, and elevate brands.", className: "font-normal" },
            ]}
          />
        </h2>

        <p
          ref={textRef}
          className="mt-14 md:mt-20 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#DEDBC8" }}
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollYProgress={scrollYProgress}
              index={i}
              totalChars={chars.length}
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
