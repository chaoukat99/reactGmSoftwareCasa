import React, { useState } from 'react'

function State() {
    // let user="wiam";
    let [user,setUser]=useState("wiam");
    let [age,setAge]=useState(20);
    let [decision,setDesicion]=useState("Unknown");

    let [count , setCount]=useState(0)


  return (
    
    // <div>
    //     <h1>Manage State With {user}  </h1>
    //     <h2>User Age  : {age} </h2>
    //     <h3>{decision}</h3>

    //     <button
    //     onClick={()=>{
    //         if(age>=18){
    //             setDesicion("Majeur")
    //         }else{
    //             setDesicion("Mineur")
    //         }
    //     }}
    //     >
    //         Display decision
    //     </button>
      
    // </div>
    <>
    <h1>Counter: {count}</h1>
    <button 
    onClick={()=>{
setCount(count+1)
    }}
    
    >+</button>


    <button
    onClick={()=>{
        setCount(count-1)
    }}
    
    >-</button>
    </>
  )
}

export default State