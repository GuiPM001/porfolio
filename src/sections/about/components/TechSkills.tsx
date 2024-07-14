import { motion } from "framer-motion";

const TechSkills = () => {
  return (
    <div className="h-2/5 w-full">
      <h1 className="font-bold text-2xl self-start text-blue-500">
        TECH SKILLS
      </h1>

      <motion.div
        className="w-full h-full flex flex-row gap-10 mt-6"
        initial={{ y: "30vh", opacity: 0 }}
        whileInView={{ y: "0vh", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="h-3/4 w-1/3 rounded-xl bg-blue-50 border border-blue-500 py-4 px-6">
          <h2 className="font-semibold text-xl text-blue-900">Front-end</h2>

          <div className="grid grid-cols-3 grid-rows-2 gap-x-6 h-full mt-4">
            <TechnologyIcon technology="react" />
            <TechnologyIcon technology="typescript" />
            <TechnologyIcon technology="tailwind" />
            <TechnologyIcon technology="CSS" />
            <TechnologyIcon technology="jest" />
            <TechnologyIcon technology="testing library" />
          </div>
        </div>

        <div className="h-3/4 w-1/3 rounded-xl bg-blue-50 border border-blue-500 py-4 px-6">
          <h2 className="font-semibold text-xl text-blue-900">Back-end</h2>

          <div className="grid grid-cols-3 grid-rows-2 gap-x-6 h-full mt-4">
            <TechnologyIcon technology="NET" />
            <TechnologyIcon technology="SQL" />
            <TechnologyIcon technology="redis" />
            <TechnologyIcon technology="xUnit" />
            <TechnologyIcon technology="rabbitMQ" />
            <TechnologyIcon technology="kafka" />
          </div>
        </div>

        <div className="h-3/4 w-1/3 rounded-xl bg-blue-50 border border-blue-500 py-4 px-6">
          <h2 className="font-semibold text-xl text-blue-900">Others</h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-x-6 h-full mt-4">
            <TechnologyIcon technology="datadog" />
            <TechnologyIcon technology="git" />
            <TechnologyIcon technology="scrum methodology" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TechnologyIcon = ({ technology }: any) => {
  return (
    <div className="flex flex-col items-center">
      <img
        alt={technology}
        src={require(`assets/images/technologies/${technology}.png`)}
        className="h-8 mb-px"
      />

      <span className="font-medium text-lg capitalize leading-6 text-center">
        {technology}
      </span>
    </div>
  );
};

export default TechSkills;
