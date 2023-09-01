import React, { useState } from 'react'

const Form = () => {
    // const [password, setPassword] = useState();
    // const [email , setEmail] = useState();
    // const [gender , setGender] = useState();

    const [form , setForm] = useState(
        {
            email : '',
            password : '',
            gender : ''
        }
    );

    const changeInputHandler = (event) =>{
        console.log(event);
        const {name, value} = event.target;
        setForm({...form, [name] : value});
    }  
    
  return (
    <>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" value={form.email} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={changeInputHandler}/>
                
            </div>
            <div class="form-group">

                <label for="exampleInputPassword1">Password</label>
                <input type="password" value={form.password} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={changeInputHandler}/>
            </div>
            <div class="form-group mt-3">

                <input type="radio" name='gender' value='male' id="" onChange={changeInputHandler}/>
                <b>&nbsp;Male</b>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name='gender' value='female' id="" onChange={changeInputHandler}/>
                <b>&nbsp;Female</b>
            </div>
            
            <button type="submit" class="my-3 btn btn-primary">Submit</button>

            
        </form>
    
    </>
  )
}

export default Form