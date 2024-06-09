import ExperienceContainer from "components/ExperienceContainer";
import LinkList from "components/LinkList";
import Title from "components/Title";

const About = () => {
  return (
    <div className="w-full flex flex-col gap-24 md:gap-44 md:px-6 pb-72 animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12 lg:gap-36">
        <div className="block self-start md:hidden">
          <Title>About me</Title>
        </div>
        <img
          src={require("assets/images/photo.JPEG")}
          alt="Guilherme's profile"
          className="w-full md:w-1/2 lg:w-2/5 rounded-3xl"
          loading="lazy"
        />

        <div className="flex flex-col justify-between gap-6 w-full">
          <div>
            <div className="hidden md:block">
              <Title>About me</Title>
            </div>

            <p className="w-full text-gray-500 text-lg md:mt-6 lg:mt-12">
              I'm a software developer with 3+ years of experience.
              I hold a Bachelor's in Information System's and thrive on solving
              complex problems with tech. Skilled in React, .NET, Typescript,
              SQL and noSQL, I'm eager to explore new technologies. Passionate
              and excited to make a positive impact in the world.
            </p>
          </div>

          <div className="flex flex-row justify-evenly">
            <a
              href={require("assets/files/Resume.pdf")}
              download="Guilerme-Resume"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-4 px-10 font-medium rounded-2xl text-white bg-sky-600 shadow-xl shadow-gray-200 hover:bg-sky-700 ease-linear duration-150 active:scale-95">
                Resume
              </button>
            </a>

            <LinkList />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full md:flex-row gap-12 lg:gap-36">
        <div className="flex flex-col md:w-5/12">
          <Title>Experiences</Title>

          <p className="w-full text-gray-500 text-lg mt-6 lg:mt-12">
            My current job has allowed me to create a very strong knowledge base
            both in the front end and in the back end, always ensuring good code
            quality in addition to being concerned with the easy scalability of
            applications.
          </p>
        </div>

        <div className="md:w-6/12">
          <ExperienceContainer />
        </div>
      </div>
    </div>
  );
};

export default About;
