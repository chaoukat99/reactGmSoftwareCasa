import React from 'react'

function Test() {

   const sayHi=()=>{
    alert("hello world");
   }

  return (
    <div>
        <h2>Test comp</h2>
        <button onDoubleClick={sayHi}>Click</button>
    </div>
  )
}



export default Test