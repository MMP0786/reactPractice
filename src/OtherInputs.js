import React, { useState } from 'react'

function OtherInputs() {
    const [checkbox, setCheckbox] = useState(false)
    const [text, setText] = useState("")
    const [select, setSelect] = useState("USA")
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[1].checked)
        console.log(e.target[2].value)
        


    }

  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="textarea" style={{verticalAlign:"top"}}>Introduction : </label >
            <textarea name="" id="" cols="20" rows="4" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
            </div>

            
            <div>
            <label htmlFor="terms"> I Accept the condition </label>
            <input type="checkbox" name="terms" value={checkbox} onChange={(e)=> setCheckbox(e.target.checked)} />
            </div>

            <div>
            <label htmlFor="terms"> Select Value: </label>
            <select name="" value={select} onChange={(e)=>setSelect(e.target.value)} id="">
                <option value="UK">UK</option>
                <option value="UNO">UNO</option>
                <option value="USA">USA</option>
            </select>
            </div>

        <input type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default OtherInputs