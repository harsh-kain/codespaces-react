import React, { useState } from "react";
import Counter from "./Counter";
const Totalcounter = () => {
    const [counterstate , setcounterstate] = useState([
        {id:1 , counts : 1},
        {id:2 , counts : 2},
        {id:3 , counts : 3},
        {id:4 , counts : 4},
    ]);
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
