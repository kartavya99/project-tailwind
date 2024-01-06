import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-neutral-800 hover:text-neutral-950">
            Cancel
          </button>
        </li>
        <li>
          <button className=" px-6 py-2 rounded-md bg-sky-600 text-slate-50 hover:bg-sky-500">
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input label="TItle" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
