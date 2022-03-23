import React, { useState } from "react";

const HookCounter = () => {
  const [items, setitem] = useState([]);
  const additem = () => {
    setitem(...items, { id: items.length, value: "farhan" });
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item.value}</li>
        ))}
      </ul>
      <button onClick={additem}>add a number</button>
    </div>
  );
};

export default HookCounter;
