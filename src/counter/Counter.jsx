import React, { useState } from 'react'

const Counter = ({count,onDelete}) => {// destructure of props 
    
    const [countUpdate ,setcountUpdate] = useState(count.value); // pass object of count value 

    const increment = () =>{
        
        setcountUpdate(countUpdate + 1); // we have to pass (count + 1) or preIncrement otherwise it pass the value first then update after 
    }
    const decrement = () =>{
        let lcount = countUpdate;

        setcountUpdate(lcount <= 0 ? 0 : lcount - 1);
    }

  return (
    <>

        <div className="container my-4 d-flex justify-content-center align-items-center">
            <button className='btn btn-outline-success btn-lg text-light' onClick={increment}>+</button>

            <span className={countUpdate === 0 ? "px-4 mx-4 bg-danger rounded" : "px-4 mx-4 bg-success rounded"}>{countUpdate === 0 ? 'Zero' : countUpdate}</span>

            <button className='btn btn-outline-success btn-lg text-light' onClick={decrement}>-</button>

            <button className='btn px-4 mx-4 bg-danger rounded' onClick={()=> onDelete(count.id)}>Delete</button>

        </div>

    </>
  )
}

export default Counter