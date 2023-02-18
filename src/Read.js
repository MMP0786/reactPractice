import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Read() {
    const [name, setName] = useState([])

   const setFn = (id, name, email, age)=>{
      localStorage.setItem("id", id)
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("age", age)
   }

    function getData(){
        axios.get("https://63b3f7299f50390584a2c2aa.mockapi.io/crud")
        .then((res)=> setName(res.data))
    }

    function handleDelete(id){
        axios.delete(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`)
        .then(()=> getData())
        console.log("first")
    }


    useEffect(()=>{
        getData()
    }, [])

    // localStorage.clear()
    console.log(name)
  return (
    <div>
        <div className="row App">
            <div className="col-md-12">
                <div className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {name.map(item => {
                    return(
                        <>
                        <tr>                 
                            <td>{item.id}</td>
                            <td>{item.e_name}</td>
                            <td>{item.e_email}</td>
                            <td>{item.e_age}</td>
                            <td><Button onClick={()=> setFn(item.id, item.e_name,item.e_email,item.e_age)}  href="http://localhost:3000/update">Edit</Button></td>
                            <td><Button variant='danger' onClick={()=> {if(window.confirm("Are you want delete data")){handleDelete(item.id)}}}>Delete</Button></td>
                        </tr>

                        </>
                    )
                    // <h3>{item.e_name}</h3>)}
                    })}
                    {/* <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Age</td>
                            <td><Button>Edit</Button></td>
                            <td><Button variant='danger'>Delete</Button></td>
                        </tr> */}
                    </tbody>
                </div>
            </div>
        </div>
        {/* {name.map(item => <h3>{item.e_name}</h3>)}
        this is comming from the read comp */}
    </div>
  )
}

export default Read