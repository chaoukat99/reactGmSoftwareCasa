import React from 'react'
import { Outlet } from 'react-router-dom'

function Parent() {
  return (
    <div>
        <h1>User Area</h1>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Parent