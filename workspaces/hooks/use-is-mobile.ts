import { useLayoutEffect, useState } from "preact/hooks";

export const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    updateSize();
  }, []);

  return isMobile;
};
