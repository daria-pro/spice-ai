"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Join = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const element = useRef(null);
  const nextElement = useRef(null);
  const moon = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "start 0.9"],
  });

  const { scrollYProgress: nextText } = useScroll({
    target: nextElement,
    offset: isMobile ? ["start 0.7", "start 0.6"] : ["start 0.7", "start 0.6"],
  });
  const { scrollYProgress: moonScroll } = useScroll({
    target: moon,
    offset: ["start 1200px", "end 0.35"],
  });
  const moonScale = useTransform(moonScroll, [0, 1], ["0.7", "1"]);
  const right = useTransform(moonScroll, [0, 0.7], ["90%", "5%"]);
  const top = useTransform(moonScroll, [0, 1], ["-40%", "-30%"]);
  const rotate = useTransform(moonScroll, [0, 1], ["0deg", "90deg"]);
  const opacity = useTransform(scrollYProgress, [0.1, 1], ["0.2", "1"]);
  return (
    <div
      className="relative lg:mt-10 px-4 lg:px-24 text-white -translate-y-20 bg-[linear-gradient(180deg,#000000_36.4%,#191E2A_100%)] pb-[500px] max-w-[1920px] w-full mx-auto
    "
    >
      <motion.div ref={element}>
        <motion.div style={{ opacity }} className="-translate-y-40">
          <motion.h2 className="font-clashGrotesk text-[64px] leading-[80px] font-medium mb-8">
            Join our community
          </motion.h2>
          <motion.p className="lg:text-2xl text-lg max-w-[940px] lg:leading-9 font-inter font-normal mb-8">
            Join us on our mission to to the moon & revolutionize open source AI
            development so that we can build a permissionless, democratized, and
            decentralized AI. <br />
            <br /> Let the fate of AI be in our hands and not that of big tech
            companies.
          </motion.p>
          <div className="flex gap-8">
            <Image
              src="/assets/img/telegram.svg"
              width={64}
              height={64}
              alt="telegram"
            />
            <Image
              src="/assets/img/x.svg"
              width={64}
              height={64}
              alt="telegram"
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        ref={nextElement}
        style={{ opacity: nextText }}
        className="absolute left-1/2 lg:top-[400px] -translate-x-1/2 text-2xl md:text-[32px] text-center"
      >
        Join our community and harvest $SALT
      </motion.p>
      <motion.img
        src="/moon.png"
        style={{ scale: moonScale, right, top, rotate }}
        ref={moon}
        width={484}
        height={484}
        className="width-[400px]  absolute -z-20"
      ></motion.img>
    </div>
  );
};

export default Join;
