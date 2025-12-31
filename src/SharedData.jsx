import React from 'react'
import Context from './Context'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'

function SharedData() {
    const Username="Bassem";
  return (
    <>
    <Context.Provider value={Username}>
         <Comp1/>
         <Comp2/>
         <Comp3/>
    </Context.Provider>
   
    </>
  )
}

export default SharedData