import React from 'react'

function Child({age,comp1,comp2,fun}) {
  return (
    <div>
        {/* <h2>This is Child Component {props.username}   </h2> 
        <h3>Age is : {props.age}</h3>
        <br />
        {props.isConnected?"Online":"Offline"}



        <ul >
            {props.skills.map((el,i)=><li key={i}>{el}</li>)}
        </ul>

        <h3>Product Price : {props.item.id}</h3>*/}

        {age>18?comp1:comp2}

        <button className='btn btn-primary' onClick={fun}>View</button>
    </div>
  )
}

export default Child