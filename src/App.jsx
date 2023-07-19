import { useRef, useState } from "react";
import TaskComponent from "./components/TaskComponent";
function App() {
  const [taskList, setTaskList] = useState([]);
  const inputRef = useRef(null);

  const addTask = () => {
    let newTask = {
      id: new Date().getTime(),
      taskName: inputRef.current.value,
    };
    setTaskList([...taskList, newTask]);
    inputRef.current.value = "";
  };
  console.log(inputRef);
  return (
    <>
      <div className="bg-gradient-to-br from-yellow-400 to-red-500 min-h-screen flex justify-center items-center font-serif">
        <div id="content" className="bg-white p-8 rounded-md shadow-md  w-3/5">
          <div className="bg-gray-300 p-4 rounded-md">
            <h1 className="text-center text-4xl font-bold font-serif mb-3">
              To Do List
            </h1>
            <div className="flex items-center space-x-1 mb-3">
              <input
                ref={inputRef}
                type="text"
                className="px-3 py-2 border rounded-md flex-grow"
                placeholder="New Task..."
              ></input>
              <button
                onClick={addTask}
                className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Add
              </button>
            </div>
            <TaskComponent
              taskList={taskList}
              setTaskList={setTaskList}
            ></TaskComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
