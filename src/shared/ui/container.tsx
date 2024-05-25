"use client";

import type { FC, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

export const Container: FC<PropsWithChildren & React.DivElement> = ({ children, className, ...props }) => {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-6", className)} {...props}>
      {children}
    </div>
  );
};
