import React from 'react'
import { useNavigate } from 'react-router-dom'
function Redirection() {
const navigate=useNavigate();

    const handleRedirection=()=>{
    
       setTimeout(()=>navigate("/about"),5000)

    }
  return (
    <div>
        <button
        
        onClick={handleRedirection}
        >Redirect After 5s</button>
    </div>
  )
}

export default Redirection