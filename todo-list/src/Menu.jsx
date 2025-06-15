import { useState } from "react";

function Menu() {
  const list = ["Apple", "Banana", "Cherry"];
  const [clicked, setClicked] = useState(false);

  const handleChange = () => {
    setClicked(!clicked);
  };

  const myarr = list.map((item, index) => (
    <li key={index} className="text-lg text-gray-700 hover:text-blue-600 transition duration-200">
      {item}
    </li>
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleChange}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 mb-6"
      >
        Click to {clicked ? "hide" : "show"} list
      </button>

      {clicked && (
        <ul className="list-disc space-y-2 text-left bg-white p-4 rounded-lg shadow-md">
          {myarr}
        </ul>
      )}
    </div>
  );
}

export default Menu;
