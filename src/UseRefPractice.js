import React, { useEffect, useRef } from 'react'

function UseRefPractice() {
  const myRef =  useRef(0)

//   useEffect(()=>{
    
//   }, [])
  return (
    <div className='App'>
        <p>{myRef}</p>
        <p>this is comming from UseRef Comp</p>
        <button> Change status</button>
    </div>
  )
}

export default UseRefPractice