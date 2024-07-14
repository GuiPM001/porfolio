import { motion } from "framer-motion";

type AnimdatedTextProps = {
  text: string;
  className: string;
};

const AnimatedText = (props: AnimdatedTextProps) => {
  const defaultAnimations = {
    hidden: {
      color: "transparent",
      y: -4,
    },
    visible: {
      color: "rgb(243 244 246)", // text-gray-100
      y: 0,
    },
  };

  const { text, className } = props;

  return (
    <p className={className}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, index) => (
          <span className="inline-block" key={`${word}-${index}`}>
            {word.split("").map((char, index) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
                key={`${char}-${index}`}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </p>
  );
};

export default AnimatedText;
