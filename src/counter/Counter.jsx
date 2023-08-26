import React, { useState } from 'react'

const Counter = ({count,onDelete,onIncrement, onDecrement}) => {// destructure of props 
    
    // const [countUpdate ,setcountUpdate] = useState(count.value); // pass object of count value 

    

  return (
    <>

        <div className="container my-4 d-flex justify-content-center align-items-center">
            <button className='btn btn-outline-success btn-lg text-light' onClick={()=>onIncrement(count)}>+</button>

            <span className={count.value === 0 ? "px-4 mx-4 bg-danger rounded" : "px-4 mx-4 bg-success rounded"}>{count.value === 0 ? 'Zero' : count.value}</span>

            <button className='btn btn-outline-success btn-lg text-light' onClick={()=>onDecrement(count)}>-</button>

            <button className='btn px-4 mx-4 bg-danger rounded' onClick={()=> onDelete(count.id)}>Delete</button>

        </div>

    </>
  )
}

export default Counter;