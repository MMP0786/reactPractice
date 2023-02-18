import React, { useEffect, useState } from "react";
import AxiosGet from "./AxiosGet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Update() {
   let navigate=  useNavigate()
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

 

  console.log(localStorage.getItem("age"));

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"))
  }, []);


  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put(`https://63b3f7299f50390584a2c2aa.mockapi.io/crud/${id}`,{
      e_name:name,
      e_email: email,
      e_age: age

  }).then(()=> navigate("/read") )
  }

  return (
    <div>
      <div className="bg-secondary w-50 m-auto text-white">
        <form onSubmit={handleSubmit}>
          <div className="App">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the name"
              name="name"
            />

            <br></br>
            <label htmlFor="name">Id : </label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter the name"
              name="name"
            />

            <br></br>
            <label htmlFor="email"> Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email"
              name="email"
            />

            <br></br>
            <label htmlFor="email"> Age : &nbsp;</label>
            <input
              type="number"
              value={age}
              onChange={(e)=> setAge(e.target.age)}
              placeholder="Enter the email"
              name="Age"
            />

            <br></br>

            {/* <div><input type="checkbox" name="checkbox"  value={value.checkbox} onChange={handleText} /> Accept the terms and condition</div> */}
            <Button input type="submit" variant="warning" className="text-danger">
              Update
            </Button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Update;
