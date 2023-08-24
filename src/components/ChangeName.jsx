import React,{useState} from 'react'
import MyButton from './Button'
const ChangeName = () => {
    const [name, setName] = useState('Harsh')

    const changeNameBtn = () =>{
        console.log("kain");
        setName("kain")
    }
  return (
    <>
        <h1>{name}</h1>

        <MyButton onPress={changeNameBtn}/>
    </>
  )
}

export default ChangeName