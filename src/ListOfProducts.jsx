import React from 'react'



import Products from "./data.js";
import Swal from 'sweetalert2';

function ListOfProducts() {

const ViewDetails=(Product)=>{
  
  Swal.fire({
  title:Product.name ,
  html: `<ul>
        <li>Price : ${Product.price}</li>  
        <li>Desc : ${Product.description}</li>  
        <li>Stock : ${Product.stock>0?Product.stock:"out Of Stock"}
  </ul>`,
  imageUrl:Product.imageUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});

}


  return (
    <div>
      <h2 className='text-center'>List Of Products</h2>
 <table className='table table-hover'>

  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>Price</th>
      <th>Description</th>
      <th>Image</th>
      <th>Stock</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
       
          {Products.map((el,i)=><tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.price} MAD</td>
            <td>{el.description}</td>
            <td>
              <img src={el.imageUrl} alt="" width={100} height={100} />
            </td>
            <td>
              {el.stock>0?el.stock:"Out of stock"}
            </td>

            <td>
              <button className='btn btn-info'
              onClick={()=>{ViewDetails(el)}}
              >View</button>
            </td>

          </tr>)}
  </tbody>
 </table>

    </div>
  )
}

export default ListOfProducts