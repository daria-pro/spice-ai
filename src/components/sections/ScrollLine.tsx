"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollLine = () => {
  const element = useRef(null);
  const elementScrollLine = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.6"],
  });
  const { scrollYProgress: scrollLine } = useScroll({
    target: elementScrollLine,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["10px", "-50px"]);
  const left = useTransform(scrollLine, [0, 1], ["5%", "-90%"]);
  return (
    <div>
      <motion.p
        style={{ opacity: scrollYProgress, translateY }}
        ref={element}
        className="text-white text-wrap font-clashGrotesk text-4xl lg:leading-[59px] lg:text-5xl text-center"
      >
        Projects integrated into the Arrakis AI Ecosystem
      </motion.p>
      <div className="overflow-x-hidden">
        <motion.div
          ref={elementScrollLine}
          style={{ left }}
          className="flex gap-10 lg:gap-[180px] mb-40 w-full  items-center relative pointer-events-none"
        >
          <img src="solana.svg" className="w-[200px] lg:w-fit" />
          <img src="arwave.svg" className="w-[200px] lg:w-fit" />
          <img src="bitttensor.svg" className="w-[200px] lg:w-fit" />
          <img src="round.svg" className="w-[200px] lg:w-fit" />
          <img src="solana.svg" className="w-[200px] lg:w-fit" />
          <img src="arwave.svg" className="w-[200px] lg:w-fit" />
          <img src="bitttensor.svg" className="w-[200px] lg:w-fit" />
          <img src="round.svg" className="w-[200px] lg:w-fit" />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLine;
