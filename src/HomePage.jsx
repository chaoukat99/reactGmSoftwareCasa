import React from 'react'
import ImageComp from './ImageComp'
import Button from './Button'

import "./Home.css"
import Navbar from './Navbar'
function HomePage() {
  return (
    <div>
        <Navbar/>
        <h1 className="cls">Home page</h1>
        {/* Image  */}
        <ImageComp/>
        <Button/>
    </div>
  )
}

export default HomePage