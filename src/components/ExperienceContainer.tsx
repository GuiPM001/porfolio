import React from "react";

type ExperienceType = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
};

const ExperienceContainer = () => {
  const experiences: ExperienceType[] = [
    {
      title: "Full stack developer",
      company: "Framework Digital",
      startDate: "August 2021",
    },
    {
      title: "Frontend developer Internship",
      company: "Framework Digital",
      startDate: "April 2021",
      endDate: "July 2021",
    },
  ];

  return (
    <div className="flex flex-col gap-28 md:gap-36 w-full text-gray-500 text-lg">
      {experiences.map((e, index) => (
        <div className="flex flex-row items-center">
          <div>
            <div
              className={`relative z-50 w-8 h-8 rounded-full mr-6 border-2 shadow-circle border-white ${
                e.endDate ? "bg-sky-600" : "bg-slate-300"
              }`}
            ></div>
            <div className="absolute z-10 -mt-3 ml-3 w-2 h-60 md:h-72 bg-sky-600 rounded-full"></div>
            
            {!experiences[index + 1] && (
              <div
                className={`absolute mt-52 md:mt-64 z-50 w-8 h-8 rounded-full mr-6 border-2 shadow-circle border-white bg-sky-950`}
              ></div>
            )}
          </div>

          <div className="w-10/12 h-max shadow-all border-rm-10 rounded-2xl px-6 py-4 md:px-8 md:py-6 flex flex-col">
            <p className="flex flex-col">
              <span className="font-medium text-sky-600 text-xl md:text-2xl">
                {e.title}
              </span>
              <span>at {e.company}</span>
            </p>
            <span className="text-gray-800 font-medium mt-4 text-sm md:text-base">
              {e.startDate} - {e.endDate ?? "Ongoing"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContainer;
