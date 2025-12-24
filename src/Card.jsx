import React from 'react'
import "./css/card.css"
function Card({name,price,description}) {
  return (
  <>
 
  <div className="card">
    <div className="card-image" />
    <div className="category"> {name} </div>
    <div className="heading">
      {" "}
   price: {price}
   
      <div className="author">
        {" "}
       {description}
      </div>
    </div>
  </div>
</>

  )
}

export default Card