import React from 'react'

import { useParams } from 'react-router-dom'


function ParameterComp() {

const {name}=useParams();

  return (
    <div>
        <h1>Parameter Route {name}  </h1>
    </div>
  )
}

export default ParameterComp