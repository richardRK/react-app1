import React from "react";
import { useState } from "react";

const UseFormEx = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.values });
    },
  ];
};

export default UseFormEx;
