import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

const WordsPullUp = ({ text, className = "", showAsterisk = false }: WordsPullUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] relative"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: i * 0.08,
            duration: 0.8,
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
