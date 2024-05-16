"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Footer = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end 0.95"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.3"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0", "30%"]);

  return (
    <footer className="relative -mt-72">
      <motion.img
        src="/footer.png"
        style={{ scale, translateY }}
        ref={element}
        className="w-full absolute h-[300px] z-10 "
      ></motion.img>
    </footer>
  );
};

export default Footer;
