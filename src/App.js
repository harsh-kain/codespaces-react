import "./App.css";
import Btn from "./components/Btn";
import Counter from "./counter/Counter";
import Totalcounter from "./counter/Totalcounter";
// import ChangeName from "./components/ChangeName";
const App = () => {
  const eventBubble = () =>{
    console.log("App");
  }
  return (
    <div className="App" onClick={eventBubble}>
        <h1>Counter App</h1>
        <Totalcounter/>



        
      {/* <Counter count="1"/>
      <Counter count="2" />
      <Counter count="3" />
      <Counter count="4" />  */}
      {/* <Btn onSmash={()=>console.log("kain from onsmash")}/>
      <Btn onSmash={()=>console.log("Harsh from onsmash")}/> */}
      {/* <ChangeName/> */}

      {/* for building play and pause btn  */}

      {/* <Btn onPlay={()=>console.log("play..")} onPause={()=>console.log("pause..")}/> */}
    </div>
  );
};

export default App;

// component -> a function which return a value
