import React, { useContext } from 'react'
import { myContext } from './App'

function UseContextPractice2() {
    const useMyContext = useContext(myContext)
  return (
    <div>UseContextPractice2
        <p>{useMyContext}</p>
        
    </div>
  )
}

export default UseContextPractice2