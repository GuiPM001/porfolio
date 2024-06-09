import { useEffect, useState } from "react";
import ProjectBadge from "./ProjectBadge";
import { extractColors } from "extract-colors";

interface ProjectCardProps {
  imageSrc: string;
  projectName: string;
  projectDescription: string;
  repositoryLink: string;
  demoLink?: string;
  technologies: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    imageSrc,
    projectName,
    projectDescription,
    repositoryLink,
    demoLink,
    technologies
  } = props;

  const [mainColor, setMainColor] = useState<string>("#000000");

  useEffect(() => {
    const getColors = async () => {
      const mainColor = await extractColors(imageSrc, {distance: 1});

      setMainColor(mainColor[0].hex);
    };

    getColors();
  }, [imageSrc]);

  return (
    <div className="shadow-lg shadow-gray-300 rounded-3xl" >
      <div
        className="h-72 bg-slate-300 rounded-t-3xl flex items-center justify-center"
        style={{ backgroundColor: `${mainColor}2f` }}
      >
        <img src={imageSrc} className="h-24" alt={projectName} />
      </div>

      <div className="p-6 flex flex-col gap-2">
        <h2 className="text-gray-800 font-bold text-2xl">{projectName}</h2>

        <ProjectBadge bgColor={mainColor} technologies={technologies} />

        <p className="text-gray-500">{projectDescription}</p>

        <div className="flex flex-col gap-1 mt-4 z-50">
          <a
            href={repositoryLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-lg max-w-max"
            id="link"
          >
            Repository and details
          </a>

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-lg max-w-max"
              id="link"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
