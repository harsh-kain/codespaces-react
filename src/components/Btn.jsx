import React, { useState } from "react";

const Btn = ({onSmash, onPress,onPlay, onPause}) => {
    // const [name , setName] = useState('Harsh');
    // const changeName = () =>{
    //     // setName('kain');
    //     onSmash(); // onSmash is the custom event and its come from the props and call inside the changeName funtion
    // }
    // eslint-disable-next-line no-lone-blocks
    {/* --------------------------------------------- for building play and pause btn  */}
    
    let playing = false;
    const handleClick = () =>{
      if(playing) {
        onPause();
      }
      else onPlay(); 
      playing = !playing;
    }
  return <>
    {/* <h1>{name}</h1> */}
    {/* <button className="btn btn-primary" onClick={onPress}>Click me </button> */}
    {/* and here onPress call as a funtion  */}

    {/* --------------------------------------------- for building play and pause btn  */}
    <button onClick={handleClick}>Click me {playing ? '>' : '||'}</button>

  </>;
};

export default Btn;
