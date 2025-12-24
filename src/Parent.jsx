import React from 'react'
import Child from './Child'
import Swal from 'sweetalert2';

function Parent() {

   function Adult(){
    return <h3 style={{color:"green"}}>Adult</h3>
   }

   function Minor(){
    return <h3 style={{color:"red"}}>Minor</h3>
   }
    


const ShowALert=()=>{
    Swal.fire({
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "success"
});
}



    let user="Samir"
    let product={
        id:1,
        name:"Product1",
        price:2000
    }
  return (
    <div >
        <h1>This is Parent </h1>
         <Child username={user} comp1={<Adult/>} comp2={<Minor/>} age={20} isConnected={true} skills={["html","css","js"]} item={product} fun={ShowALert}   />
    </div>
  )
}

export default Parent