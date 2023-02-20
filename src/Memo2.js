import React from 'react'
import Memorigatin from './Memorigatin'


function Memo2() {
    const [count, setCount] = React.useState(0)
    console.log("from memorigation 2")
  return (
    <div>
        <p>Memo2</p>
        {count}
        
        <div><button onClick={()=> setCount(count+1)}>Click</button></div>
        
        
        <Memorigatin/>
        {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
    </div>
  )
}

export default Memo2