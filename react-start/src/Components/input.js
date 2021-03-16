import React, { useEffect, useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    // const {
    //   target: { value },
    // } = e;
    const { value } = e.target;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    } else {
      alert("too long!");
    }
  };
  return { value, onChange };
};

export default useInput;
