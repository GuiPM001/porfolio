import React from "react";

interface ProjectBadgeProps {
  bgColor: string;
  technologies: string[];
}

const ProjectBadge = (props: ProjectBadgeProps) => {
  const { bgColor, technologies } = props;

  return (
    <div
      className="flex justify-center flex-row gap-4 rounded-full py-2 px-4 absolute -mt-12"
      style={{ backgroundColor: bgColor }}
    >
      {technologies.map((technology) => (
        <div data-tooltip={technology}>
          <img
            alt={technology}
            src={require(`assets/images/technologies/${technology}.png`)}
            className="h-5"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectBadge;
