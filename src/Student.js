import React from 'react'

function Student({std}) {
  return (
    <div>
       <h1 > My name is   {std.name} age {std.age} and hobbies {std.hobbies.map((hobby, key)=><span style={{background:"red", color
    :"white"}} key={key}> {hobby}</span>)}</h1> 
    </div>
  )
}

export default Student