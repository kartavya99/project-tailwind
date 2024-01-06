import React, { useRef } from "react";
import Input from "./Input";

const NewProject = () => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    console.log(enteredTitle, enteredDueDate, enteredDescription);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-neutral-800 hover:text-neutral-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className=" px-6 py-2 rounded-md bg-sky-600 text-slate-50 hover:bg-sky-500"
            onClick={handleSaveProject}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input ref={title} label="TItle" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
