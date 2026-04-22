import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.replace("#", "");

    const scrollToHashTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHashTarget();

    const timeoutId = window.setTimeout(scrollToHashTarget, 50);
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
