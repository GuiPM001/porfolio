import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

export const useSnapScroll = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      let nextPosition = e.deltaY > 0
        ? window.innerHeight + currentPosition
        : currentPosition - window.innerHeight;

      animateScroll.scrollTo(nextPosition, {
        duration: 2000,
        delay: 0,
        smooth: "easeInOutQuad",
      });

      setTimeout(() => {
        setCurrentPosition(nextPosition);
      }, 2000);
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
  }, [currentPosition]);


  return;
}