import React from "react";

const ProjectSideBar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <button> + Add Project</button>
      </div>
      <ul className="mt-8">
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
