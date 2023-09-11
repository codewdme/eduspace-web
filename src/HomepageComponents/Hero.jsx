import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative bg-black flex justify-center pt-20 h-screen "
    >
      <motion.div
        style={{ scale, position }}
        className="fixed bg-black text-white text-center  px-12 text-2xl md:text-8xl font-medium "
      >
        Education <br />
        reimagined.
      </motion.div>
    </motion.section>
  );
};

export default Hero;
