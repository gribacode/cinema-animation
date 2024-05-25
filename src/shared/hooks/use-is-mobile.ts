import { useEffect, useState } from "react";

export const useIsMobile = (breakPoint = 390) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = (): void => {
    setIsMobile(window.innerWidth < Number(breakPoint));
  };
  const events = ["resize", "orientationchange"];

  useEffect(() => {
    handleResize();
    events.forEach((e): void => {
      window.addEventListener(e, () => {
        handleResize();
      });
    });

    return (): void => {
      events.forEach((e) => {
        window.removeEventListener(e, () => {
          handleResize();
        });
      });
    };
  });

  return isMobile;
};
