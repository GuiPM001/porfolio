import AnimatedText from "./components/AnimatedText";
import LinkList from "components/LinkList";
import ProfilePhoto from "./components/ProfilePhoto";
import ScrollIndicator from "components/ScrollIndicator";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-row justify-evenly items-center text-gray-100 bg-checkered-dark">
      <div>
        <p className="text-4xl font-semibold">Hello, I'm</p>
        
        <div className="text-7xl flex flex-row items-start pb-6">
          <p className="font-bold text-blue-700">Guilherme</p>
          <motion.div
            className="min-w-min -mt-3"
            whileHover={{
              rotate: 30,
              transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.7,
              },
            }}
          > 👋 </motion.div>
        </div>

        <AnimatedText
          text="a Software Developer"
          className="text-2xl font-semibold mb-4"
        />

        <LinkList />
      </div>

      <ProfilePhoto />

      <ScrollIndicator color="light" />
    </section>
  );
};

export default Hero;
