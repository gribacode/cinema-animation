"use client";

import { useState, useEffect } from "react";

import { SmoothScroll } from "@/app/layout/SmoothScroll";
import { Carousel } from "@/widgets/carousel";
import { Header } from "@/widgets/header";
import { Info } from "@/widgets/info";
import { Main } from "@/widgets/main";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <SmoothScroll>
      <Header />
      <main>
        <div className="bg-black-900 relative z-10">
          <Main />
          <Info />
        </div>
        <div>
          <Carousel />
        </div>
      </main>
    </SmoothScroll>
  );
}
