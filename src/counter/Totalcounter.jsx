import React, { useState } from "react";
import Counter from "./Counter";
const Totalcounter = () => {
  const [counterstate , setcounterstate] = useState([
    {id : 1 , value : 1},
    {id : 2 , value : 2},
    {id : 3 , value : 3},
    {id : 4 , value : 4},
  ]);
    //const [totalCounter , setTotalCounter] = useState(counterstate.length);
    const deleteElement = (id) =>{
      let updateVar = counterstate.filter((counter)=> counter.id !== id);
      setcounterstate(updateVar);
    }
    

    
  return <>
    
    {counterstate.map((countVal) =>(
        <Counter key={countVal.id} count={countVal} onDelete={deleteElement}/>
    ))}
  </>;
};

export default Totalcounter;
