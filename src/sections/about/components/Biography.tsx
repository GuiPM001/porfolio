import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MouseParallax } from "react-just-parallax";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Biography = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0.55, 0.56], [0, 1]);
  const width = useTransform(scrollYProgress, [0.7, 1], ["360px", "420px"]);
  const height = useTransform(scrollYProgress, [0.7, 1], ["520px", "600px"]);
  const borderRadius = useTransform(scrollYProgress, [1, 1], ["24px", "24px"]);

  const pVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div
      ref={targetRef}
      id="about"
      className="relative h-screen w-screen flex flex-row justify-center items-center gap-20 "
    >
      <motion.section className="relative ">
        <MouseParallax enableOnTouchDevice strength={0.05} shouldResetPosition>
          <motion.img
            src={require("assets/images/photo.JPEG")}
            alt="Profile photo"
            style={{ borderRadius, height, width, opacity }}
            className="object-cover relative"
          />
        </MouseParallax>
      </motion.section>

      <section className="w-1/3 h-full flex flex-col justify-center">
        <h1 className="font-bold text-2xl text-blue-500">ABOUT ME</h1>

        <motion.div
          className="flex flex-col gap-6 mt-10 text-xl"
          whileInView="visible"
          initial="hidden"
          transition={{ staggerChildren: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p variants={pVariants}>
            Full Stack Developer, specialized in React and .NET.
          </motion.p>

          <motion.p variants={pVariants}>
            I have been working professionally since 2021, building
            applications, improving performance, and integrating microservices,
            with experience in implementation, monitoring, and maintenance, all
            covered with unit tests using XUnit and Moq on the backend, and Jest
            and React Testing Library on the front end.
          </motion.p>

          <motion.p variants={pVariants}>
            I am passionate about using my skills and knowledge to make a
            difference and am always excited to take on new challenges and make
            a positive impact.
          </motion.p>

          <motion.a
            href={require("assets/files/Resume.pdf")}
            download="Guilerme-Resume"
            target="_blank"
            rel="noreferrer"
            variants={pVariants}
          >
            <button className="py-2 px-6 mt-5 font-medium rounded-lg text-gray-100 bg-blue-500 hover:bg-blue-700 ease-linear duration-150 active:scale-95">
              <span className="mr-2">Resume</span>
              <FontAwesomeIcon icon={faFileDownload} />
            </button>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Biography;
