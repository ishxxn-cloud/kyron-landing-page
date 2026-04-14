import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

const WordsPullUpMultiStyle = ({ segments, containerClassName = "" }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((word) => {
      if (word) allWords.push({ word, className: seg.className });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${containerClassName}`}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${item.className || ""}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: i * 0.08,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </span>
  );
};

export default WordsPullUpMultiStyle;
