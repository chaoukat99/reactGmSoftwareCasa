import React from 'react'

function List() {
    let arr=[
       {
        id:1,
        name:"HTML"
       },
       {
        id:2,
        name:"CSS"
       },
       {
        id:3,
        name:"JS"
       },
    ]
  return (
    <ul>
      {arr.map((el,i)=><li>{el.name} {el.id}</li>)}
    </ul>
  )
}

export default List