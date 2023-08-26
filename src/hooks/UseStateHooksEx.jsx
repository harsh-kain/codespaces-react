import React, { useEffect, useState } from 'react'
import ToggleComponents from './ToggleComponents';

const UseStateHooksEx = () => {
    const [count , setCount ] = useState(0)
    const [toggle , setToggle ] = useState(false);
    
    const changeToggle = ()=>{
      setToggle(!toggle);
    }
    const increment = () =>{
      setCount(count + 1);
    }
    const increment5 = () =>{
      setCount(count + 1000000);
    }

    useEffect(()=>{
      console.log("Inside useEffect hooks");

    },[count]);
  return (
    <>
        <button className="btn btn-primary" onClick={increment}>+</button>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increment5}>+</button>
        <button className="btn btn-primary" onClick={changeToggle}>Show Toggle</button>

        <ToggleComponents/>
    </>
  )
}

export default UseStateHooksEx;