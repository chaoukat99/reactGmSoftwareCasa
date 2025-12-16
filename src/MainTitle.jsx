import React from 'react'
import "./css/maintitle.css"
function MainTitle() {
    // let user="Samir";
    // let age=20;
    // let arr=["a","b","c"];

    let product={
        
        id:12,
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeEyrFh5FyR15NZQr8kSDZzF5hvjbhkeQpA&s",
        name:"TV",
        price:2000.99,
        category:"Electronics",
        stock:12,
        disponible:false

    }

    let user=JSON.parse(localStorage.getItem("currentUser"))
    
  return (
    <>
    {/* <h1 style={{color:"red",fontSize:"30px"}} >MainTitle</h1> */}
    <h2 className='second-title'>Hello {user!=null?user.name:"Guest"}</h2>
    <h2 className='text-danger'>Hello</h2>
    {/* <h2>{arr}</h2> */}
    </>
  )
}

export default MainTitle