import React from 'react'
import Products from './data.js'
import "./css/productList.css"
function ListOfProducts() {
 
  return (
    <div>
        <h1 className='text-center'>List Of Products</h1>
<div className='parent'>


        {Products.map((el,i)=><div className="card" key={i} style={{ width: "18rem" }}>
  <img src={el.imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Product Name : {el.name}</h5>
    <h5 className="card-title">Product Price : {el.price} $</h5>
    <p className="card-text">
  {el.description}
    </p>
    <a href="#" className="btn btn-primary">
      Buy now
    </a>
  </div>
</div>)}


    </div>
    </div>
  )
}

export default ListOfProducts