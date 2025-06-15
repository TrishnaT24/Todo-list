import { useState } from "react";

function Todo() {
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (val.trim() !== "") {
      setList([...list, val]);
      setVal("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const newArr = list.filter((_, index) => index !== indexToDelete);
    setList(newArr);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <p className="text-2xl font-bold text-blue-700 mb-4">📋 TODO LIST</p>

      <div className="w-full max-w-md flex flex-col items-start">
        <label className="mb-2 text-lg font-medium text-gray-700">
          Enter task:
        </label>

        <div className="flex w-full gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter task"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="flex-1 border-2 border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="list-disc pl-5 w-full">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 mb-2 rounded-md shadow-sm"
            >
              <span>{item}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
