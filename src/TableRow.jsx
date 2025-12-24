import React from 'react'

function TableRow(props) {
  return (
    <tr >
        <td className='bg-dark text-white'>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
    </tr>
  )
}

export default TableRow