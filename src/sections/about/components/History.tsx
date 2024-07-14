import Experiences from "./Experiences";
import TechSkills from "./TechSkills";

const History = () => {
  return (
    <div
      id="experiences"
      className="relative h-screen w-screen flex flex-col px-32 justify-around items-start"
    >
      <Experiences />
      <TechSkills />
    </div>
  );
};

export default History;
