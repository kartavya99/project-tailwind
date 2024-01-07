import React from "react";
import Button from "./Button";

const ProjectSideBar = ({ onStartAddProject, projects, onSelectProject }) => {
  // console.log(projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <button
                  className="w-full text-left px-2 py-1 rounded-md my-3 hover:text-stone-800 hover:bg-sky-500"
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectSideBar;
