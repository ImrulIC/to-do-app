import { useState } from "react";

const TaskComponent = ({ taskList, setTaskList }) => {
  const [clickList, setClickList] = useState([]);
  const handleClick = (item) => {
    if (clickList) {
      let clickItem = {
        id: item.id,
        isClicked: true,
      };
      let updatedItem = clickList.map((item) => {
        if (item.id === clickItem.id) {
          return {
            ...item,
            isClicked: !item.isClicked,
          };
        }
        return item;
      });
      setClickList([updatedItem]);
    } else {
      setClickList([
        {
          id: item.id,
          isClicked: true,
        },
      ]);
    }
  };
  {
    console.log(clickList);
  }
  function deleteTask(id) {
    let list = taskList.filter((item) => item.id !== id);
    setTaskList(list);
  }

  return (
    <div>
      <ul>
        {taskList.map((item) => {
          const { id, taskName } = item;
          return (
            <li
              key={id}
              id={id}
              className="flex items-center mb-3 pl-3 bg-slate-400 hover:bg-slate-500"
            >
              <input
                onClick={() => handleClick(item)}
                type="checkbox"
                name={`task-${id}`}
                className=" mr-1 "
              ></input>
              <label for="{`task-${id}`}" className="flex-grow capitalize">
                {taskName}
              </label>
              <button
                onClick={() => deleteTask(id)}
                className="rounded px-4 py-1 bg-indigo-600 hover:bg-sky-400"
              >
                delete
              </button>
            </li>
          );
        })}
        {console.log(clickList)}
      </ul>
    </div>
  );
};
export default TaskComponent;
