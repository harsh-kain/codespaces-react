import React,{useState,useEffect} from 'react'

const ToggleComponents = () => {
    const [x , setX ] = useState(0)
    const [y, setY ] = useState(0)
    const mouseMove = (e) =>{
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        window.addEventListener('mousemove', mouseMove);
        return ()=>{
            window.removeEventListener('mousemove', mouseMove);
        }
      });
  return (
    <>
        <h1>X-{x} || Y-{y}</h1>
    </>
  )
}

export default ToggleComponents