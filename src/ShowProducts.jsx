import React, { useState } from 'react'

import Products from './data.js'
function showProducts() {

    const [data,setData]=useState(Products)


    const getMax=()=>{
      let pricesArr=data.map(el=>el.price);
      let max = Math.max(...pricesArr)

      let MaxProduct=data.filter((el)=>el.price==max)
      setData(MaxProduct);
     
    }
    const getMin=()=>{
      
      let pricesArr=data.map(el=>el.price);
      let min = Math.min(...pricesArr)

      let MinProduct=data.filter((el)=>el.price==min)
      setData(MinProduct);
     
    }
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
       {data.length>0?data.map(el=><tr key={el.id}>
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
  <button onClick={()=>getMax()}>display the Highest Price Product</button>
  <button onClick={()=>getMin()}>display the Lowest Price Product</button>
    </div>
  )
}

export default showProducts



