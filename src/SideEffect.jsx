import React, { useEffect, useState } from 'react'

function SideEffect() {


    const [data,setData]=useState([]);
    const [user,setUser]=useState("Guest")
    const [count,setCount]=useState(0);

    // Mounting  call api / call localstorage 

    // Update update dependency(state)

    // Destroy (cleanup )

// Mounting
    // useEffect(()=>{
    //    fetch("https://jsonplaceholder.typicode.com/users")
    //    .then(res=>res.json())
    //    .then(data=>setData(data))
    // },[])


    // useEffect(()=>{
    //      const userFromLs=localStorage.getItem("currentUser")==null?{name:"Guest"}:JSON.parse(localStorage.getItem("currentUser"));
    //      setUser(userFromLs.name)
    // },[])

// Update 

// useEffect(()=>{
// // code run
// console.log("count is updated") 
// },[count,user])

// useEffect(()=>{
//     const T = setInterval(()=>{
//          console.log(Math.floor(Math.random()*10000000))       
//     },1000)


//     // DEstroy 
//      return ()=>{
//    clearInterval(T);
//      localStorage.clear();
//      }

// },[])
useEffect(()=>{
//   

document.title="Whatsapp"
},[])


useEffect(()=>{
document.title=`(${count}) Whatsapp`
},[count])
  return (
    <div>
        <h1>User : {user}</h1>
<ul>

        {/* {data.length>0?data.map((el,i)=><li>{el.name}</li>):<li>No data for now</li>} */}


</ul>
<h2>{count}</h2>
<button
onClick={()=>setCount(count+1)}
>
    +
</button>
<button onClick={()=>setUser("Bassem")}>
    change User
</button>
    </div>
  )
}

export default SideEffect