import React from "react";
import { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: "red" }}
        onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      {count}
    </div>
  );
};

export default UseStateExample;
