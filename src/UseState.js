// import { func } from 'prop-types'
import React, { useState } from 'react'

function UseState() {
const arr1 = ["Alarm", "Good","Control"]
    const obj ={
        name: "Sadakat",
        age: 29,
        isMarried: true,
        about: " plays"
    }
    const [arr, setArr] = useState(arr1)
    const [obje, setObje] = useState(obj)
    const [name, setName] = useState("Musharraf")
    const [count, setCount] = useState(0)

  function handleClick(){
    if(name ==="Musharraf"){
        setName("Sadakat")
    }else{
        setName("Musharraf")
    }
  }
  function handleClickBtn(){
    setObje({
            ...obje, 
            name: "Musharraf"
        }
    )
  }
//   function handleClickBtn(){
//     setObje(item =>{
//         return{
//             ...item, 
//             name: "Musharraf"
//         }
//     })
//   }
function handleClickArr (){
  setArr([
    ...arr, Math.floor(Math.random()*20)
  ])
}

  
  return (
    <div className='App'>
        <p>{arr.map(item => <p>{item}</p>)}</p>
        <p>{obje.name}</p>
        <p>{obje.age}</p>
        <p>{obje.isMarried.toString()}</p>
        <p>{name}</p>
        <p>{count}</p>
        <p>this is p </p>
        <div> <button onClick={handleClick}>Change </button></div>
        <div> <button onClick={handleClickArr}>Change Arr </button></div>
        <div className='App'> <button onClick={handleClickBtn}>Name Change </button></div>
        <div>
             <button onClick={()=>setCount(count+1)}>Increase </button>
             <button className='App' onClick={()=>setCount(count-1)}>Decrease </button>
             <button onClick={()=>setCount(0)}>Reset </button>
        </div>
    </div>
  )
}

export default UseState