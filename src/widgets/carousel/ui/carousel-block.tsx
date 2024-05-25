"use client";

import type { FC } from "react";

import Image from "next/image";

export const CarouselBlock: FC<{ images: Widgets.Model.Image[] }> = ({ images }) => {
  return (
    <div className="overflow-clip select-none">
      <div className="flex gap-3 animate-carousel-infinite-scroll relative left-[var(--carousel-offset,0px)]">
        {images.map(({ url, title }, index) => (
          <div key={`${title}-${index}`} className="w-[40vw] md:w-[23vw] shrink-0 aspect-video">
            <Image
              src={url}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
