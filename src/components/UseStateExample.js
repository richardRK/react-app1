import React from "react";
import { useState } from "react";
import UseFormEx from "./UseFormEx";

const UseStateExample = () => {
  // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, handleChange] = UseFormEx({ email: "", password: "" });

  return (
    <div>
      {/* <button
        className="btn"
        style={{ backgroundColor: "red" }}
        onClick={() =>
          setCount((currentState) => ({
            // ...currentState,
            count1: currentState.count1 + 1,
            count2: currentState.count2 + 1,
          }))
        }>
        +
      </button>
      <div>Count1 :{count1}</div>
      <div>Count2 :{count2}</div> */}

      <input
        name="email"
        value={values.email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        onChange={handleChange}></input>
      <input
        type="password"
        name="password"
        value={values.password}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
        onChange={handleChange}></input>
    </div>
  );
};

export default UseStateExample;
