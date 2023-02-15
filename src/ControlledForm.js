import React, { useState } from 'react'

function ControlledForm() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        checkbox: ""
    });
    // const [email, setEmail] = useState("")

    const handleText = (e)=>{
        setValue(prev =>{
            return {
                ...prev,  [e.target.name]: e.target.value,
                [e.target.name]: e.target.checked
            }
        })
    }

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(value)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].checked)
    setValue({
        name:'',
        email: "",
        checkbox: ""
    })
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='App'>
            <label htmlFor="name">Name : </label>
            <input type="text" value={value.name} onChange={ handleText} placeholder='Enter the name' name='name' />

            <br></br>
            <label htmlFor="email"> Email : </label>
            <input type="email" placeholder='Enter the email' value={value.email} onChange={ handleText} name="email"/>

            <br></br>

            <div><input type="checkbox" name="checkbox"  value={value.checkbox} onChange={handleText} /> Accept the terms and condition</div>
            <input type="submit"   />
            </div>
        </form>
    </div>
  )
}

export default ControlledForm