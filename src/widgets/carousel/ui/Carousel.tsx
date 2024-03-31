"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

import ArrowIcon from "@/root/public/icons/arrow.svg";
import { Button } from "@/shared/ui/Button";

import { CarouselBlock } from "./CarouselBlock";
import { images, randomImagesFirstSet, randomImagesSecondSet } from "../model/images";

export const Carousel = () => {
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sliderWrapperRef,
    offset: ["start start", "end start"],
  });

  const { width, height } = useWindowSize();

  const maxScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;

    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maxScale * 1.1, maxScale, 1]);
  const opacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 0.6]);
  const translateXLeft = useTransform(scrollYProgress, [0.64, 0.66], [-20, 0]);
  const translateXRight = useTransform(scrollYProgress, [0.64, 0.66], [20, 0]);

  const [sliderVariant, setSliderVariant] = useState<"inactive" | "active">("inactive");

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setSliderVariant("active");
    } else {
      setSliderVariant("inactive");
    }
  });

  return (
    <motion.div animate={sliderVariant} className="bg-black-900 pb-16">
      <div className="overflow-clip h-[300vh] mt-[-100vh]" ref={sliderWrapperRef}>
        <div className="h-screen sticky top-0 flex items-center">
          <motion.div
            transition={{ duration: 0.4 }}
            variants={{ active: { opacity: 1, x: 0 }, inactive: { opacity: 0, x: -20 } }}>
            <ArrowIcon className="absolute z-40 left-12 -translate-y-1/2 opacity-60 cursor-pointer md:block hidden" />
          </motion.div>
          <div className="flex gap-5 mb-5 left-1/2 relative -translate-x-1/2">
            {images.slice(0, 3).map(({ url, title }, index) => (
              <motion.div
                transition={{ duration: 0.4 }}
                style={index % 2 === 0 ? { opacity, x: index === 0 ? translateXLeft : translateXRight } : { scale }}
                className="shrink-0 relative md:aspect-video aspect-[9/16] md:w-[60vw] w-[300px] rounded-2xl overflow-clip"
                key={`${title}-${index}`}>
                <Image src={url} alt={title} width={0} height={0} className="h-full w-full object-cover" sizes="100%" />
                {index === 1 && (
                  <motion.div
                    variants={{
                      active: { opacity: 1 },
                      inactive: { opacity: 0 },
                    }}
                    transition={{}}
                    className="absolute flex bg-gradient-to-t from-black-900 to-transparent flex-col md:flex-row items-center gap-4 md:gap-0 justify-between p-5 pt-24 left-0 bottom-0 w-full">
                    <p className="text-white text-lg">{title}</p>
                    <Button>Смотреть сейчас</Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            transition={{ duration: 0.4 }}
            variants={{ active: { opacity: 1, x: 0 }, inactive: { opacity: 0, x: 20 } }}>
            <ArrowIcon className="absolute z-40 right-12 -translate-y-1/2 -scale-100 opacity-60 cursor-pointer md:block hidden" />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={{ active: { opacity: 1, y: 0 }, inactive: { opacity: 0, y: 20 } }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]">
        <CarouselBlock images={randomImagesFirstSet} />
        <div className="[--duration:72s] [--carousel-offset:-36px]">
          <CarouselBlock images={randomImagesSecondSet} />
        </div>
      </motion.div>
    </motion.div>
  );
};
