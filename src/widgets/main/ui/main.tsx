"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

export const Main = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-black-900 text-white relative">
      <div className="h-1/2 w-full bg-gradient-to-b from-black-700 to-transparent z-10 absolute top-0 left-0"></div>
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]">
        <video className="sticky top-0 h-screen object-cover" playsInline preload="auto" loop autoPlay muted>
          <track kind="captions" />
          <source type="video/mp4" src="/videos/forest.mp4" />
        </video>
      </motion.div>
      <Container className="relative pb-7 z-20 h-[--main-height]">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col justify-end items-start h-full"
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}>
          <h1 className="md:text-5xl text-4xl font-bold mb-10">
            Смотри в Киноленте. <br /> Кино и сериалы.
          </h1>
          <Button className="mb-16" size="lg">
            Смотреть сейчас
          </Button>
          <p className="font-semibold">Смотрите кино и сериалы в нашем приложении</p>
        </motion.div>
      </Container>
    </div>
  );
};
