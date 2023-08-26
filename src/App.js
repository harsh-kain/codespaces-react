import "./App.css";
import Btn from "./components/Btn";
import Navbar from "./components/Navbar";
import Counter from "./counter/Counter";
import Totalcounter from "./counter/Totalcounter";
// import ChangeName from "./components/ChangeName";
const App = () => {
  
  return (
    <>
        
      <div className="container-fluid bg-black text-bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">

        <h1>Counter App</h1>
        <Totalcounter />
      </div>



        
      {/* <Counter count="1"/>
      <Counter count="2" />
      <Counter count="3" />
      <Counter count="4" />  */}
      {/* <Btn onSmash={()=>console.log("kain from onsmash")}/>
      <Btn onSmash={()=>console.log("Harsh from onsmash")}/> */}
      {/* <ChangeName/> */}

      {/* for building play and pause btn  */}

      {/* <Btn onPlay={()=>console.log("play..")} onPause={()=>console.log("pause..")}/> */}
    </>
  );
};

export default App;

// component -> a function which return a value
