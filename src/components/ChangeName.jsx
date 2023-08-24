import React, { useState } from "react";
import Btn from "./Btn";
const ChangeName = () => {
  const [name, setName] = useState("Harsh");
  const changeName = () => {
    console.log("changee name");
    setName("kain");
  };
  return (
    <>
      <h1>Name is : {name}</h1>
      <Btn press={changeName} />
      {/* onPress is a custom event in this case we pass it as a props  */}
    </>
  );
};

export default ChangeName;
