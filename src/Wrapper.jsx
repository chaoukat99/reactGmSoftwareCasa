import React from 'react'
import C1 from './childs/C1'
import C2 from './childs/C2'
import C3 from './childs/C3'

function Wrapper() {
    let sharedValue="testValue";
  return (
<div>
    <h1>This the main component </h1>
    <C1 data={sharedValue}/>
    <C2 data={sharedValue}/>
    <C3 data={sharedValue}/>
</div>  )

}

export default Wrapper