import React from 'react'


const MyButton = (props) => {
  

  return (
    <>
        {/* <h1>{name}</h1> */}
        {/* <button onClick={()=> props.onPress("OnPress event")}>Click </button> */}
        <button className='btn btn-success' onClick={()=>{props.changeNameBtn()}}>Change name</button>
    </>
  )
}

export default MyButton