import React from "react";
import Garage from "./Garage";
const cars = ["bmw", "audi", "benz", "jjj", "kkk"];
const App = () => {
  return (
    <div>
      <Garage cars={cars} />
    </div>
  );
};
export default App;
