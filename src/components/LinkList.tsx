import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LinkList = () => {
  const [emailTooltip, setEmailTooltip] = useState<string>("Email");

  const copyEmail = () => {
    navigator.clipboard.writeText("guilhermepimentelm0@gmail.com");
    setEmailTooltip("Email copied!");
    setTimeout(() => setEmailTooltip("Email"), 1000);
  };

  const animations = {
    hidden: {
      opacity: 0,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animations}
      className="flex flex-row gap-3 sm:gap-6 items-center"
    >
      <a
        href="https://www.linkedin.com/in/guilhermepimentelm0/"
        target="_blank"
        rel="noreferrer"
        data-tooltip="LinkedIn"
      >
        <FontAwesomeIcon className="text-2xl sm:text-4xl " icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/GuiPM001"
        target="_blank"
        rel="noreferrer"
        data-tooltip="GitHub"
      >
        <FontAwesomeIcon className="text-2xl sm:text-4xl" icon={faGithub} />
      </a>

      <button onClick={copyEmail} data-tooltip={emailTooltip}>
        <FontAwesomeIcon className="text-2xl sm:text-4xl" icon={faEnvelope} />
      </button>
    </motion.div>
  );
};

export default LinkList;
