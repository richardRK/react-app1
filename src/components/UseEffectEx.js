import React from "react";
import { useEffect } from "react";
import { useFormEx } from "./UseFormEx";

const UseEffectEx = () => {
  const [values, handleChange] = useFormEx({ email: "", password: "" });

  useEffect(() => {
    console.log("render");
  }, [values.password]);

  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default UseEffectEx;
