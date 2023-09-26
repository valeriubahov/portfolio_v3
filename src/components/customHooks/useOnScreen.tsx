import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>, threshold: number) {
  const [isVisible, setIsVisible] = useState(false);

  const OPTIONS = {
    root: null,
    rootMargin: "0px",
    threshold,
  };

  const createObserver = () => {
    return new IntersectionObserver(([entry]) => {
      const position = entry.boundingClientRect;
      // trigger effect only if bottom of viewport
      if (position.y >= 0) setIsVisible(entry.isIntersecting);
    }, OPTIONS);
  };

  const observer = useMemo(createObserver, [ref]);

  useEffect(() => {
    observer.observe(ref.current as HTMLElement);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}
