import React, { useState } from "react";
import "../index.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-xl font-semibold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
