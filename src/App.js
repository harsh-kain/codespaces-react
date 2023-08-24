import "./App.css";
import Btn from "./components/Btn";
import Counter from "./counter/Counter";
// import ChangeName from "./components/ChangeName";
const App = () => {
  const eventBubble = () =>{
    console.log("App");
  }
  return (
    <div className="App" onClick={eventBubble}>
      
      <Counter />
      {/* <Btn onSmash={()=>console.log("kain from onsmash")}/>
      <Btn onSmash={()=>console.log("Harsh from onsmash")}/> */}
      {/* <ChangeName/> */}

      {/* for building play and pause btn  */}

      <Btn onPlay={()=>console.log("play..")} onPause={()=>console.log("pause..")}/>
    </div>
  );
};

export default App;

// component -> a function which return a value
