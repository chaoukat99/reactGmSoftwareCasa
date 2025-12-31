import React, { useRef }  from 'react'

function Form2() {
    let username=useRef(null);
    let password=useRef(null);
  return (
    <div>
        <div className="form-group">
            <label htmlFor="">Useranme</label>
            <input type="text" ref={username}   className="form-control"
           
          
            />
        </div>
        <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" ref={password} className="form-control"
          
           
            />
        </div>
        <button
     onClick={()=>{
        console.log(username.current.value)
     }}
        
        >Send</button>
        
    </div>
  )
}

export default Form2