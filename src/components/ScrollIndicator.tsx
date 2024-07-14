import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type IndicatorProps = {
  color: "light" | "dark";
};

const ScrollIndicator = (props: IndicatorProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      className={`absolute bottom-8 left-0 right-0 mx-auto h-11 w-6 p-1 border-2 rounded-full select-none
                  ${ props.color === "light" ? "border-gray-100 text-gray-100" : "border-gray-400 text-gray-400"}`}
    >
      <motion.div
        className="text-center text-[8px] font-black"
        initial={{ y: 2 }}
        animate={{ y: 6 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
          ease: "circInOut",
        }}
      > | </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
