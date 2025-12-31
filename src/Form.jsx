import React, { useContext, useState } from 'react'
import AuthContext from './AuthContext';

function Form() {

    // 1-declare State
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("");

    const User=useContext(AuthContext);

    const HandleChanges=(ev)=>{

        switch(ev.target.name){
            case "username":{
                setUsername(ev.target.value)
            }
            break;
            case "password":{
                setPassword(ev.target.value)
            }
            break;
        }
    }

    // Event Change 
  return (
    <div>

        <h1 className='text-center'> Welcome {User.name}</h1>
        <h1 className='text-center'> Welcome {User.email}</h1>
        <h1>My Form</h1>
        <div className="form-group">
            <label htmlFor="">Useranme</label>
            <input type="text" name='username'  className="form-control"
            onChange={(ev)=>HandleChanges(ev)}
            value={username}
            />
        </div>
        <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" name='password' className="form-control"
             onChange={(ev)=>HandleChanges(ev)}
             value={password}
            />
        </div>
        <button
        onClick={()=>{
            console.log(username,password)
        }}
        
        >Send</button>
        <button
        onClick={()=>{
           setUsername("")
           setPassword("")
        }}
        
        >Reset</button>
    </div>
  )
}

export default Form