import React from 'react'

const Message = (props) => {
    // let name = "Harsh";
    // let course = "MCA"
    // let details = ["harsh", "mca"]

    // const { name,course } = props.obj;
    const {lang, lab} = props.details;
  return (
    <div>
      {/* <h1>Name - {name} </h1> 
      <h1>course - {course}</h1> */}
      <h1>{lang} and {lab}</h1> 
    </div>
  )
}

export default Message
