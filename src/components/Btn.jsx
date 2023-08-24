import React, { useState } from "react";

const Btn = (props) => {
    // const [name , setName] = useState('Harsh');
    const changeName = () =>{
        // setName('kain');
        props.onSmash(); // onSmash is the custom event and its come from the props and call inside the changeName funtion
    }

    
  return <>
    {/* <h1>{name}</h1> */}
    <button className="btn btn-primary" onClick={props.press}>Click me </button>
    {/* and here onPress call as a funtion  */}
  </>;
};

export default Btn;
