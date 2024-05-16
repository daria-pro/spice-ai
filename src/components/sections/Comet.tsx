"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Comet = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const element = useRef(null);
  const { scrollY } = useScroll();
  const top = useTransform(
    scrollY,
    isMobile ? [950, 1600] : [1700, 2700],
    isMobile ? ["1400px", "1600px"] : ["2100px", "2700px"]
  );
  const right = useTransform(
    scrollY,
    isMobile ? [950, 1600] : [1700, 2500],
    isMobile ? ["100%", "-30%"] : ["100%", "-30%"]
  );

  return (
    <motion.img
      src="/comet.png"
      style={{ top, right }}
      ref={element}
      className="width-[262px] text-center absolute -z-10 "
    ></motion.img>
  );
};

export default Comet;
