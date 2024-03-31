"use client";

import type { FC, PropsWithChildren } from "react";

import { motion } from "framer-motion";

export const FadeIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -160px 0px" }}>
      {children}
    </motion.div>
  );
};
