import React from 'react'
import Products from './data.js'
import Card from './Card.jsx'
function ListOfCards() {
  return (
    <div>
        <h1>List Of Products</h1>
        {Products.map((el,i)=><Card  key={i}  name={el.name} price={el.price} description={el.description}   />)}
      
       
    </div>
  )
}

export default ListOfCards