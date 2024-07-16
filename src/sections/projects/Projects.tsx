import { useState } from "react";
import { ProjectType } from "types/ProjectType";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects: ProjectType[] = [
    {
      id: "sorting-visualizer",
      name: "Sorting Visualizer",
      description: "Graphical representation of how each algorithm sorts a given set of data.",
      demoLink: "https://sorting-visualizer-guipm.vercel.app/",
      repositoryLink: "https://github.com/GuiPM001/sorting-visualizer",
      technologies: ['react', 'typescript', 'tailwind']
    },
    {
      id: "trackboard",
      name: "Track Board",
      description: "Website that uses the information provided by the Spotify API to display information and generate music recommendations.",
      repositoryLink: "https://github.com/GuiPM001/track-board",
      technologies: ['react', 'typescript', 'tailwind', 'spotify']
    },
    {
      id: "write-better",
      name: "Write Better",
      description: "Web site that helps you with your English writing skill with Gemini API.",
      repositoryLink: "https://github.com/GuiPM001/write-better",
      demoLink: "https://write-better.vercel.app/",
      technologies: ['react', 'typescript', 'tailwind', 'gemini']
    },
    {
      id: "fortune-message",
      name: "Fortune Message",
      description: "A fortune message generator, integrated with Gemini API to generate different messages every day.",
      repositoryLink: "https://github.com/GuiPM001/fortune-message",
      demoLink: "https://fortune-message.vercel.app/",
      technologies: ['react', 'typescript', 'CSS', 'gemini']
    },
    {
      id: "sneakers",
      name: "Sneakers Shop",
      description: "Tailwind, React and Global State practice project, based on the Frontend Mentor challenge.",
      repositoryLink: "https://github.com/GuiPM001/sneakers",
      demoLink: "https://sneakers-v1.vercel.app/",
      technologies: ['react', 'typescript', 'tailwind']
    },
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="projects"
      className="relative w-full h-full flex flex-col justify-center items-center px-20 gap-10 text-gray-100 bg-checkered-dark"
    >
      <h1 className="font-bold text-2xl text-gray-100 self-start">PROJECTS</h1>

      <div className="h-4/5 w-full flex flex-row">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            open={openIndex === index}
            project={project}
            onClick={() => setOpenIndex(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
