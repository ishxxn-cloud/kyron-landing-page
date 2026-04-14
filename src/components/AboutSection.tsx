import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const aboutText =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

const AboutSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = aboutText.split("");

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest">Visual arts</span>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]" style={{ color: "#E1E0CC" }}>
          <WordsPullUpMultiStyle
            containerClassName="justify-center"
            segments={[
              { text: "I am Marcus Chen,", className: "font-normal" },
              { text: "a self-taught director.", className: "italic font-serif" },
              { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" },
            ]}
          />
        </h2>

        <p
          ref={textRef}
          className="mt-10 md:mt-16 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
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
