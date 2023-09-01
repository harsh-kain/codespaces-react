import React,{useState} from 'react'

const CheckBox = () => {
    const [language , setLanguage] = useState(
        {
            python : false,
            JavaScript : false,
            goLang : false,
            NextJs : false
        }
    );
    const [selectLang, setSelectLang] = ([]);

    const changeInputHandler = (event) =>{
        
        const {name , checked} = event.target;
        setLanguage({...language, [name] : checked});
        display();
    }
    const display = () =>{
        console.log("start");
        if(language.JavaScript){
            setSelectLang([...selectLang,"javascript"]);
        }
        if(language.goLang){
            setSelectLang([...selectLang,"goLang"]);
        }
        if(language.python){
            setSelectLang([...selectLang,"python"]);
        }
        if(language.NextJs){
            setSelectLang([...selectLang,"NextJs"]);
        }
    }  
    
  return (
    <>
        <form action="" className='form-group'>
            <div className="container">
                <input type="checkbox" name="python" id="" onChange={changeInputHandler}/>
                <b>&nbsp; Python</b>
            </div>

            <div className="container">
                <input type="checkbox" name="JavaScript" id="" onChange={changeInputHandler}/>
                <b>&nbsp; JavaScript</b>
            </div>

            <div className="container">
                <input type="checkbox" name="goLang" id="" onChange={changeInputHandler}/>
                <b>&nbsp; goLang</b>
            </div>

            <div className="container">
                <input type="checkbox" name="NextJs" id="" onChange={changeInputHandler}/>
                <b>&nbsp; NextJs</b>
            </div>

            <p>{JSON.stringify(language)}</p>
            <p>{selectLang}</p>


        </form>
    
    </>
  )
}

export default CheckBox