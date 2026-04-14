import { motion, useTransform, type MotionValue } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  totalChars: number;
}

const AnimatedLetter = ({ char, scrollYProgress, index, totalChars }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, charProgress - 0.1), charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default AnimatedLetter;
