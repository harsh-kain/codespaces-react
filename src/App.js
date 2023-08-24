// import Hello from "./components/Hello";
import './App.css'
import Counter from './counter/Counter';
// import Message from "./components/Message";
// import App_1 from './App_1';
const App = () => {
  // let details = ["harsh", "mca"]
  
  // let obj = {
    //   name : "harsh",
    //   course :'MCA'
    // }
    // let details = [
      //   {lang : ".Net", lab : 'lab 2'},
      //   {lang: "react js", lab : 'lab 3'},
      //   {lang: " C++ and java ", lab : 'G-113'},

      // ]
      return (
        <div className="App">
      {/* <h1>We are Anonymous</h1> */}
      {/* <Hello/> */}
      {/* <Message name="Harsh" course="MCA"/> */}
      {/* <Message name = {details[0]} course={details[1]} /> */}
      {/* <Message obj={obj} /> */}
      {/* <Message details={details[0]} />
      <Message details={details[1]} />
      <Message details={details[2]} /> */}
      {/* {
        details.map( (value ,index)=>(
          <Message details={value} key={index} />
          ))
        } */}
      {/* <App_1/> */}

      <Counter/>
        <h1>Kain</h1>
    </div>
  );
}

export default App;

// component -> a function which return a value 