import { motion } from "framer-motion";

export type ExperienceType = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  tag?: string;
};

const Experiences = () => {
  const experiences: ExperienceType[] = [
    {
      title: "Frontend developer",
      company: "Framework Digital",
      startDate: "April 2021",
      endDate: "July 2021",
      tag: "internship",
    },
    {
      title: "Full stack developer",
      company: "Framework Digital",
      startDate: "August 2021",
    },
  ];

  const divVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25, delay: 0.75 } },
  };

  return (
    <div className="h-1/5 w-full">
      <h1 className="font-bold text-2xl self-start text-blue-500">
        EXPERIENCES
      </h1>

      <div className="h-3 rounded-full w-[740px] bg-blue-200 mt-12 mb-6">
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-800"
          initial={{ width: "0px" }}
          whileInView={{ width: "700px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: false }}
        ></motion.div>
      </div>

      <motion.div
        className="w-full flex flex-row gap-44 px-10"
        whileInView="visible"
        initial="hidden"
        transition={{ staggerChildren: 1.75 }}
      >
        {experiences.map((experience) => (
          <motion.div variants={divVariants} className="relative">
            <motion.div variants={cardVariants} className="relative">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-800 absolute m-auto -top-12 right-0 left-0"></div>
              <div className="relative flex flex-col justify-between min-w-80 py-6 px-8 bg-blue-50 border border-blue-500 rounded-xl">
                <span className="text-blue-900 font-bold text-2xl">
                  {experience.title}
                </span>

                <div className="flex flex-col justify-self-end">
                  <span className="mt-6 font-semibold text-xl">
                    at {experience.company}
                  </span>

                  <span className="font-medium">
                    {experience.startDate} - {experience.endDate ?? "Ongoing"}
                  </span>
                </div>

                {experience.tag && (
                  <span className="max-w-min bg-white border border-blue-400 rounded-xl text-blue-400 font-medium px-3 absolute -top-2 -right-10">
                    {experience.tag}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experiences;
