import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProfilePhoto = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end center", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.15, 1], ["0vw", `-${window.innerWidth / 2.5}px`]);
  const y = useTransform(scrollYProgress, [0.15, 1], ["0vh", `${window.innerHeight / 1.08}px`]);
  const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0]);
  const height = useTransform(scrollYProgress, [0.15, 1], ["100%", "110%"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75, 1],
    ["200px", "100px", "50px", "20px"]
  );

  return (
    <section>
      <motion.div
        animate={{ borderRadius: ["70% 100%", "100% 80%"] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        className="w-[360px] h-[520px] border-8 border-blue-700 p-2 z-50"
        ref={targetRef}
      >
        <motion.img
          src={require("assets/images/photo.JPEG")}
          alt="Profile photo"
          className="object-cover relative rounded-full z-50"
          style={{
            borderRadius,
            opacity,
            height,
            x,
            y
          }}
        />
      </motion.div>
    </section>
  );
};

export default ProfilePhoto;
