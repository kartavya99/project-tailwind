import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAdd, tasks, onDelete }) => {
  console.log(tasks);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700/90 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800/90 my-4">
          This project does not have any tasks yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-blue-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-3">
              <span>{task.text}</span>
              <button
                className="text-stone-700/90 hover:text-red-400/90"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
