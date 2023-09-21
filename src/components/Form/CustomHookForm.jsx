import { useContext } from "react";
import useCustomHook from "../../hooks/useCustomHook";
import { DataContext } from "../Home/Home";

const CustomHookForm = () => {
  const { inputValue, handleChange } = useCustomHook();
  //   console.log(inputValue, handleChange);
  const dataContext = useContext(DataContext);
  console.log(dataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleChange(e.target.value);
    console.log(inputValue);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mx-auto mt-5">
        Please Fill the Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  items-center mt-5">
          <input
            className="input w-full max-w-xs"
            type="text"
            placeholder="Name"
            value={inputValue}
            onChange={handleChange}
          />
          {/* <input
            className="input w-full max-w-xs"
            type="email"
            placeholder="Email"
            name="email"
            value={inputValue}
            onClick={handleChange}
          />
          <input
            className="input w-full max-w-xs"
            type="password"
            placeholder="Password"
            name="password"
            value={inputValue}
            onClick={handleChange}
          /> */}
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CustomHookForm;
