import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  stagger?: number;
  duration?: number;
  initialY?: number;
  initialBlur?: number;
}

const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  stagger = 0.08,
  duration = 0.8,
  initialY = 20,
  initialBlur = 0,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] relative"
          initial={{ y: initialY, opacity: 0, filter: initialBlur ? `blur(${initialBlur}px)` : "blur(0px)" }}
          animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{
            delay: i * stagger,
            duration,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {showAsterisk && i === words.length - 1 ? (
            <span className="relative">
              {word}
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            </span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </span>
  );
};

export default WordsPullUp;
