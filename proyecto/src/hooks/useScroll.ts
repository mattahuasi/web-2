import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const height = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > height) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrolled };
};
