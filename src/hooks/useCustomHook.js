import { useState } from "react";

const useCustomHook = (defaultValue = " ") => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  return {
    inputValue,
    handleChange,
  };
};

export default useCustomHook;
