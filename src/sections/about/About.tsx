import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollIndicator from "components/ScrollIndicator";
import Biography from "./components/Biography";
import History from "./components/History";

const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="h-[200vh]" ref={targetRef}>
      <div className="flex items-center overflow-hidden sticky top-0 text-slate-950 bg-checkered-light">
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            x,
          }}
        >
          <Biography />
          <History />
        </motion.div>

        <ScrollIndicator color="dark" />
      </div>
    </section>
  );
};

export default About;
