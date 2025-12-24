import React from 'react'
import C2 from './C2'

function C3({data}) {
  return (
    <div>
        <h2 >C3 : {data}


            <C2 num={20}/>
        </h2>
    </div>
  )
}

export default C3