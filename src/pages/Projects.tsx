import ProjectCard from "components/ProjectCard";
import Title from "components/Title";

const Projects = () => {
  return (
    <div className="animate-fadeIn">
      <Title>Projects</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8 sm:mt-16">
        <ProjectCard
          imageSrc={require("assets/images/sort.png")}
          projectName="Sorting Visualizer"
          projectDescription="Graphical representation of how each algorithm sorts a given set of data."
          demoLink="https://sorting-visualizer-guipm.vercel.app/"
          repositoryLink="https://github.com/GuiPM001/sorting-visualizer"
          technologies={['react', 'typescript', 'tailwind']}
        />

        <ProjectCard
          imageSrc={require("assets/images/trackboard.png")}
          projectName="Track Board"
          projectDescription="Website that uses the information provided by the Spotify API to display information and generate music recommendations."
          repositoryLink="https://github.com/GuiPM001/track-board"
          technologies={['react', 'typescript', 'tailwind', 'spotify']}
        />

        <ProjectCard
          imageSrc={require("assets/images/write-better.png")}
          projectName="Write Better"
          projectDescription="Web site that helps you with your English writing skill with Gemini API."
          repositoryLink="https://github.com/GuiPM001/write-better"
          demoLink="https://write-better.vercel.app/"
          technologies={['react', 'typescript', 'tailwind', 'gemini']}
        />

        <ProjectCard
          imageSrc={require("assets/images/fortune.png")}
          projectName="Fortune Message"
          projectDescription="A fortune message generator, integrated with Gemini API to generate different messages every day."
          repositoryLink="https://github.com/GuiPM001/fortune-message"
          demoLink="https://fortune-message.vercel.app/"
          technologies={['react', 'typescript', 'css', 'gemini']}
        />

        <ProjectCard
          imageSrc={require("assets/images/sneakers.png")}
          projectName="Sneakers Shop"
          projectDescription="Tailwind, React and Global State practice project, based on the Frontend Mentor challenge."
          repositoryLink="https://github.com/GuiPM001/sneakers"
          demoLink="https://sneakers-v1.vercel.app/"
          technologies={['react', 'typescript', 'tailwind']}
        />
      </div>
    </div>
  );
};

export default Projects;
