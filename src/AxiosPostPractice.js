import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'


function AxiosPostPractice() {
   const [my_title, setTitle] = useState('')
   const [my_body, setBody] = useState('')
   const handleSubmit = (e) =>{
       e.preventDefault()
    
        axios.post('https://jsonplaceholder.typicode.com/users',{

            title:my_title,
            body: my_body
        }).then((response)=> console.log(response))

        console.log(e.target[0].value)
        console.log(e.target[1].value)
        setTitle("")
        setBody("")
    }
  return (
    <div className='App bg-primary w-50 m-auto text-light'>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Title : </label>
            <input type="text" name="title" value={my_title} onChange={(e)=> setTitle(e.target.value)} id="" />
            </div>
            
            <div>
            <label htmlFor="">Body : </label>
            <input type="text" name="body" value={my_body} onChange={(e)=> setBody(e.target.value)} id="" />
            </div>

            <Button variant='danger' type='submit'>Post</Button>
        </form>
    </div>
  )
}

export default AxiosPostPractice