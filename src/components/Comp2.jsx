import React, { useContext } from 'react'
 import Context from '../Context'
function Comp2() {
    const data=useContext(Context);
  return (
    <div>
        Data c2:{data}
    </div>
  )
}

export default Comp2