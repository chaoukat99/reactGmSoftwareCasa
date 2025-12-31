import React, { useContext } from 'react'
import Context from '../Context'

function Comp3() {
  return (
    <div>
        Data c3 :{useContext(Context)} 
    </div>
  )
}

export default Comp3