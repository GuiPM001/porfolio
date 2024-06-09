import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({children}: TitleProps) => {
  return (
    <div>
      <div className="w-36 h-1.5 bg-sky-600 rounded-xl mb-1 md:mb-4"></div>
      <h1 className="text-4xl md:text-5xl text-gray-800 font-bold">{children}</h1>
    </div>
  );
};

export default Title;
