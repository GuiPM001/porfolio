import { useEffect, useState } from "react";
import { ProjectType } from "types/ProjectType";
import { extractColors } from "extract-colors";
import { motion } from "framer-motion";

interface ProjectCardProps {
  open: boolean;
  project: ProjectType;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ open, project, index, onClick }: ProjectCardProps) => {
  const [mainColor, setMainColor] = useState<string>("#000000");

  const projectLogo = require(`assets/images/projects/${project.id}.png`);
  const projectImage = `url(${require(`assets/images/projects/${project.id}-image.png`)})`;

  useEffect(() => {
    const getColors = async () => {
      const mainColor = await extractColors(projectLogo, { distance: 1 });

      setMainColor(mainColor[0].hex);
    };

    getColors();
  }, [project]);

  const variants = {
    close: { width: "10%", height: "17%" },
    open: { width: "60%", height: "100%" },
  };

  let boxShadow =
    "0 0 0 0 transparent, 0 0 0 0 transparent, 25px 0 10px 0 #0000002f, 0 0 0 0 #0000002f";
  let zIndex = 10 - index;
  let cursor = "pointer";
  let borderRadius = "0";
  let width = "20%";

  if (open) {
    boxShadow =
      "0 0 0 0 transparent, 0 0 0 0 transparent, 25px 0 10px 0 #0000002f, -5px 0 10px 0 #0000002f";
    zIndex = 50;
    cursor = "auto";
    borderRadius = "0 0 20px 20px";
    width = "60%";
  }

  return (
    <motion.div
      onClick={onClick}
      variants={variants}
      initial="close"
      animate={open ? "open" : "close"}
      whileHover={{ width }}
      className="flex flex-col justify-start p-8 gap-5 cursor-pointer overflow-y-hidden"
      style={{
        backgroundColor: `${mainColor}80`,
        boxShadow,
        zIndex,
        cursor,
        borderRadius,
      }}
    >
      <div className="flex flex-col">
        <div
          className="flex flex-row gap-3 justify-start items-center px-3 py-2 rounded-xl max-w-max whitespace-nowrap"
          style={{ backgroundColor: "#0000002f" }}
        >
          <img src={projectLogo} alt="Project logo" className="size-6" />
          <span className="text-2xl font-medium overflow-hidden text-ellipsis">
            {project.name}
          </span>
        </div>

        {open && (
          <div className="h-full">
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-bold text-xl">Technologies:</span>

              <div className="flex flex-row gap-4">
                {project.technologies.map((technology) => (
                  <div data-tooltip={technology} key={technology}>
                    <img
                      alt={technology}
                      src={require(`assets/images/technologies/${technology}.png`)}
                      className="h-5 invert"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col mt-8">
              <span className="font-bold text-xl">Description:</span>

              <p className="text-xl">{project.description}</p>
            </div>

            <div className="flex flex-row gap-6 text-lg max-w-max mt-2 font-medium">
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noreferrer"
                id="link"
                className="underline"
              >
                Repository and details
              </a>

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  id="link"
                  className="underline"
                >
                  Demo
                </a>
              )}
            </div>

            <div
              className="h-[460px] w-full mt-10 bg-center bg-no-repeat bg-cover"
              style={{
                boxShadow: "#000000be 0 -80px 50px 0px inset",
                backgroundImage: projectImage,
              }}
            ></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
