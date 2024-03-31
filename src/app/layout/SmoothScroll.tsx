"use client";

import type { FC, PropsWithChildren } from "react";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const SmoothScroll: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return children;
};
