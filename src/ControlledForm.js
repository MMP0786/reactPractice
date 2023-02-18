import React, { useState } from 'react'
import AxiosGet from './AxiosGet';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ControlledForm() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        Age: "",
        checkbox: ""
    });
    // const [email, setEmail] = useState("")

    const handleText = (e)=>{
        setValue(prev =>{
            return {
                ...prev,  [e.target.name]: e.target.value,
                // [e.target.name]: e.target.checked
            }
        })
    }

const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(value)
    // console.log(e.target[0].value)
    // console.log(e.target[1].value)
    // console.log(e.target[2].checked)
    axios.post("https://63b3f7299f50390584a2c2aa.mockapi.io/crud",{
        e_name:value.name,
        e_email: value.email,
        e_age: value.Age

    })
    setValue({
        name:'',
        email: "",
        Age:"",
        checkbox: ""
    })
}

  return (
    <div>
        
    <div className='bg-secondary w-50 m-auto text-white'>
        <form onSubmit={handleSubmit}>
            <div className='App'>
            <label htmlFor="name">Name : </label>
            <input type="text" value={value.name} onChange={ handleText} placeholder='Enter the name' name='name' />

            <br></br>
            <label htmlFor="email"> Email : </label>
            <input type="email" placeholder='Enter the email' value={value.email} onChange={ handleText} name="email"/>

            <br></br>
            <label htmlFor="email"> Age : &nbsp;</label>
            <input type="number" placeholder='Enter the email' value={value.Age} onChange={ handleText} name="Age"/>

            <br></br>

            <div><input type="checkbox" name="checkbox"  value={value.checkbox} onChange={handleText} /> Accept the terms and condition</div>
            <Button input type="submit"> Post</Button>
            </div>
        </form>
        </div>
        <AxiosGet/>
    </div>
  )
}

export default ControlledForm