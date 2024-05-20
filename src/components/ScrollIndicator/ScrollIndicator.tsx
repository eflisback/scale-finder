import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScroll = 100;
  const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollIndicator} style={{ opacity }}>
      <span>
        <IoIosArrowUp />
        <IoIosArrowUp />
      </span>
      <span>
        <IoIosArrowUp />
        <IoIosArrowUp />
      </span>
    </div>
  );
};

export default ScrollIndicator;
