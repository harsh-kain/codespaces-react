import { useCallback, useState,useEffect,useRef } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [characterAllowed, setcharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");
    // const [copy]
    const passwordRef = useRef(null)
    const copyToClipboard = useCallback(() =>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])
    const passwordGenerator = useCallback(() => {

      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) {
        str += "0123456789";
      }

      if (characterAllowed) {
        str += "*&^%$#@!";
      }

      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
        console.log(pass);

      }
      setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword]);

    useEffect(() => {

      passwordGenerator()

    },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      <h1 className="text-4xl text-center m-5">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-blue-500 bg-gray-700">

        <div className="flex shadow rounded-lg overflow-hidden mb-4 p-11">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointor"
            min={6}
            max={100}
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}
          />
          <label htmlFor="">Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=> {setnumberAllowed((prev) => !prev)}}
          />
          <label htmlFor="">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox" 
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={()=> {setcharacterAllowed((prev) => !prev)}}
          />
          <label htmlFor="">Character</label>
        </div>

      </div>
    </>
  );
}

export default App;
