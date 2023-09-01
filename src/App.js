import "./App.css";
// import UseStateHooksEx from "./hooks/UseStateHooksEx";
import Form from "./form/Form";
import CheckBox from "./form/CheckBox";
import Api from "./Api/Api";
const App = () => {
  
  return (
    <>
        
      <div className="container-fluid bg-black-teritory text-bg-dark vh-100 d-flex justify-content-center align-items-center">
        {/* <UseStateHooksEx/> */}
        {/* <Form/>
        <CheckBox/> */}
        <Api/>
      </div>



        
      
    </>
  );
};

export default App;

// component -> a function which return a value
