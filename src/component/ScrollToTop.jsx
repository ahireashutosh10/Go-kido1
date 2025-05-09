import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: remove 'smooth' if it's causing delay or issues
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
