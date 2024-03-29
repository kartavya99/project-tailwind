import React from "react";
import noProjectImage from "../assets/no-project.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3 ">
      <img
        src={noProjectImage}
        alt="no project"
        className="2-16 h-48 object-contain mx-auto rotate-12 shadow-2xl"
      />
      <h2 className="text-xl font-bold text-slate-600/90 mt-4 my-4 sm:text-2xl">
        No Project Selected
      </h2>
      <p className="text-slate-600 mb-4 ">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
