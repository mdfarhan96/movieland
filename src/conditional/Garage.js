import React from "react";
const Garage = (props) => {
  const cars = props.cars;
  return (
    <div>
      <h1>Garage</h1>

      {cars.length > 5 && <h2>lets release cars</h2>}
    </div>
  );
};
export default Garage;
