import React, { useContext } from 'react'
import Context from '../Context'
function Comp1() {
  return (
    <div>
        Data c1 :{useContext(Context)} 
    </div>
  )
}

export default Comp1