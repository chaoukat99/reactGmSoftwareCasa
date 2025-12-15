import React from 'react'

function Button() {
   
    function AlertBtn(){
        alert("Hello world");
    }

  return (
    <button onClick={AlertBtn}> Click</button>
  )
}

export default Button