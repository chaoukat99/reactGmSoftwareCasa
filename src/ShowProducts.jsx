import React, { useState } from 'react'

import Products from './data.js'
function showProducts() {

    const [data,setData]=useState(Products)
  return (
    <div>
        <h1>List Products </h1>

  <table className='table table-hover'>
    <thead>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
            <td>desc</td>
            <td>Action</td>
        </tr>
    </thead>

    <tbody>
       {data.length>0?data.map(el=><tr>
           <td>{el.id}</td>
           <td>{el.name}</td>
           <td>{el.price}</td>
           <td>{el.description}</td>
           <td><button className='btn btn-danger'>Delete</button></td>
       </tr>):<tr>
        
        <td colSpan={5}>No data</td>
        </tr>}
    </tbody>
  </table>
  <button>display the Highest Price Product</button>
    </div>
  )
}

export default showProducts



