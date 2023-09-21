// import Form from "../Form/Form";
// import Form2 from "../Form/Form2";
// import RefForm from "../Form/RefForm";

import { createContext } from "react";
import CustomHookForm from "../Form/CustomHookForm";

export const DataContext = createContext();

const Home = () => {
  const nameValue = "Jack Pritom Soren";
  return (
    <div>
      {/* <Form /> */}
      {/* <Form2 /> */}
      {/* <RefForm /> */}
      <DataContext.Provider value={nameValue}>
        <CustomHookForm />
      </DataContext.Provider>
    </div>
  );
};

export default Home;
