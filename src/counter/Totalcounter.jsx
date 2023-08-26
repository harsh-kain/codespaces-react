import React, { useEffect, useLayoutEffect, useState } from "react";
import Counter from "./Counter";
import Navbar from "../components/Navbar";
const Totalcounter = ({ Totalcounter }) => {
  const [counterstate, setcounterstate] = useState([
    { id: 1, value : 1 },
    { id: 2, value : 2 },
    { id: 3, value : 3 },
    { id: 4, value : 4 },
  ]);
  const increment = (counter) => {
    const remainingTotalValue = [...counterstate]
    const index = remainingTotalValue.indexOf(counter);
    remainingTotalValue[index].value++;
    setcounterstate(remainingTotalValue);
  };
  const decrement = (counter) => {
    let remainingTotalValue = [...counterstate]
    let index = remainingTotalValue.indexOf(counter);
    remainingTotalValue[index].value--;
    setcounterstate(remainingTotalValue)
    
  };
  const deleteElement = (id) => {
    let updateVar = counterstate.filter((counter) => counter.id !== id);
    setcounterstate(updateVar);
  };
  const totalCounterLength = () => {
    // for finding the lenght of the object
    return counterstate.filter((e) => e.value > 0).length;
  };
  const resetAll = () =>{
    // setcounterstate([]);
    setcounterstate(counterstate.map((e) =>{
      e.value = 0;
      return e;
    }))
  };

  return (
    <>
      <Navbar acounter={totalCounterLength()} />
      <button className="btn btn-primary" onClick={resetAll}>Reset All</button>
      {counterstate.map((countVal) => (
        <Counter
          key={countVal.id}
          count={countVal}
          onIncrement={increment}
          onDecrement={decrement}
          onDelete={deleteElement}
        />
      ))}
    </>
  );
};

export default Totalcounter;
