import React from 'react'

import MyButton from './Button'
import ChangeName from './ChangeName'
const Events = () => {
    // const [name, setName] = useState('0')
    // const btnClicked = (msg) =>{
        // }
        // const changeName = () =>{
            //     console.log("kain");
            //     setName("kain")
            
            // }
    return (
        <div>
            {/* <h1>Events</h1> */}
            <h1>useEffect Hooks</h1>
            {/* <h1>{name}</h1> */}
            {/* <button onClick={()=>btnClicked("Hey kain")}>Click me</button> */}
            {/* <MyButton onPress={btnClicked}/> */}
            <MyButton />
            
            {/* <ChangeName /> */}

      
        </div>
    )
}

export default Events
