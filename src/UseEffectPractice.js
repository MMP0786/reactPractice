import React, { useState, useEffect } from "react";

function UseEffectPractice(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
        // setInterval( ()=>setCount(count+1),1000)
        console.log("from useEffect", count)
        // <p>{count}</p>
    },[])
    // console.log("this is cmming from the  ")
    function handleClick(){
        setCount(count+1)
    }
    return(

       <div className="App">
        <p>{count}</p>
         <div>this is div tag </div>
         <div></div>
        <button onClick={handleClick}>Change Task</button>
       </div>
    )
}
export default UseEffectPractice;