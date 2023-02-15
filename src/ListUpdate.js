import React from 'react'
import Student from './Student'

function ListUpdate() {
    const arr = [
        {
            name: "Musharraf",
            age: 22,
            hobbies: ["Reading", "Learning", "work On Screen"]
        },
        {
            name: "Aszad",
            age: 20,
            hobbies: ["Working", "Learning", "work On Screen"]
        },
        {
            name: "Athar",
            age: 29,
            hobbies: ["PhotoGraphy", "Learning", "work On Screen"]
        },
    ]
  return (
    <div>
        {arr.map((std, key )=> <Student key={key} std={std}/>)}
    </div>
  )
}

export default ListUpdate