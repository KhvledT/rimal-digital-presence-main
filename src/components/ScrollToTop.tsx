import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";

const ScrollToTop = () => {
  const location = useLocation();
  const { scrollToTop } = useLenis();

  useEffect(() => {
    scrollToTop({ duration: 1.2 });
  }, [location.pathname, scrollToTop]);

  return null;
};

export default ScrollToTop;
