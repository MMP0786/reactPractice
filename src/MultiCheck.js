import React, { useState } from 'react'

function MultiCheck() {
    const [fruits, setFruits] = useState([])

    const handleChange = (e) =>{
        const value = e.target.value
        const checked = e.target.checked
        
        console.log(value, checked)

        if(checked){
            setFruits([...fruits, value])
        }else{
            setFruits(fruits.filter((e)=> (e!==value)))
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(fruits)
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Apple</label>
            <input type="checkbox" name="fruits" value={"Apple"} onChange={handleChange} />
            

            <label htmlFor="">Mango</label>
            <input type="checkbox" name="fruits" value={"Mango"} onChange={handleChange} />
            

            <label htmlFor="">Orange</label>
            <input type="checkbox" name="fruits" value={"Orange"} onChange={handleChange} />
            

        <div><input type="submit" value="Submit" /></div>
        </form>
    </div>
  )
}

export default MultiCheck