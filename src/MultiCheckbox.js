import React, { useState } from 'react'

function MultiCheckbox() {
    const [fruits, setFrurits] = useState("")

    const handleChange = (e) =>{
        const value = e.target.value
        const check = e.target.checked

        console.log( value, check)

        if(check){
            setFrurits([
                ...fruits, value
            ])
        }else{
            setFrurits(fruits.filter((e)=>(e!==value)))
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(fruits)
    }
  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <p> This is the fruits name</p>
            <label htmlFor="">Mango</label>
            <input type="checkbox" name="fruits"  value="Mango" onChange={handleChange} />
            
            <label htmlFor="">Grapes</label>
            <input type="checkbox" name="fruits" value="Grapes" onChange={handleChange}   />
            
            <label htmlFor="">Orange</label>
            <input type="checkbox" name="fruits" value="Orange" onChange={handleChange}   />
            
            <label htmlFor="">Guava</label>
            <input type="checkbox" name="fruits" value="Guava" onChange={handleChange}   />
            
            <br></br>
            <div><input type="submit" value="Submit" /></div>

        </form>
    </div>
  )
}

export default MultiCheckbox