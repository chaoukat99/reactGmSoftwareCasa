import React from 'react'
import TableRow from './tableRow'

function Table() {
  return (

  <table className='table table-hover'>
    <thead>
        <tr>
            <td>id</td>
            <td>name</td>
            <td>price</td>
        </tr>
    </thead>

    <tbody>
        <TableRow id={1} name={"Product"} price={350}/>
        <TableRow id={2} name={"Product2"} price={320}/>
    </tbody>
  </table>
)
}

export default Table