import React, { useState } from 'react'

const Counter = () => {
    const [count ,setCount] = useState(1);

    const increment = () =>{
        let lcount = count
        setCount(lcount + 1); // we have to pass (count + 1) or preIncrement otherwise it pass the value first then update after 
    }
    const decrement = () =>{
        let lcount = count

        setCount(lcount <= 0 ? 0 : lcount - 1);
    }

  return (
    <>

        <h1>Counter App</h1>
        <div className="container my-4">
            <button className='btn btn-outline-success btn-lg text-light' onClick={increment}>+</button>

            <span className={count === 0 ? "px-4 mx-4 bg-danger rounded" : "px-4 mx-4 bg-success rounded"}>{count === 0 ? 'Zero' : count}</span>

            <button className='btn btn-outline-success btn-lg text-light' onClick={decrement}>-</button>

        </div>

    </>
  )
}

export default Counter