import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FormElement() {
  const [checked, setChecked] = useState("");
  const [hobyy, setHobby] = useState([]);
  const [drp, setDrp] = useState("")
  const [handleBox, setHandleBox] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleText(e) {
    setHandleBox({
      ...handleBox,
      [e.target.name]: e.target.value,
    });
  }

  const handlG = (e)=>{
    setChecked(e.target.checked)
    console.log(e.target.checked)
     console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[8].value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name : &nbsp;</label>
          <input
            type="text"
            name="name"
            value={handleBox.name}
            onChange={handleText}
          />
        </div>

        <div>
          <label htmlFor="">Email : &nbsp; </label>
          <input
            type="email"
            name="email"
            value={handleBox.email}
            onChange={handleText}
          />
        </div>
        <div>
          <label htmlFor="">Age : &nbsp; &nbsp;</label>
          <input
            type="number"
            name="age"
            value={handleBox.age}
            onChange={handleText}
          />
        </div>

        <div>
          <label htmlFor="">Gender : </label>
          <br></br>
          <label htmlFor=""> Male &nbsp;</label>
          <input
            type="radio"
            name="gender"
            value={"Male"}
            checked={checked}
            onChange={handlG}
          />

          <label htmlFor=""> &nbsp; Female &nbsp;</label>
          <input
            type="radio"
            name="gender"
            value={"Female"}
            checked={checked}
            onChange={handlG}
          />
        </div>

        <div>
          <label htmlFor="">Hobbies : </label>
          <br></br>
          <label htmlFor="">Reading &nbsp;</label>
          <input type="checkbox" name="hobby"  value={"Reading"} />

          <label htmlFor=""> &nbsp;Learning &nbsp;</label>
          <input type="checkbox" name="hobby"  value={"Learning"} />

          <label htmlFor=""> &nbsp;Walking &nbsp;</label>
          <input type="checkbox" name="hobby"  value={"Walking"} />
        </div>
        <br></br>

        <div>
          <label htmlFor="" value={drp} onChange={(e)=> setDrp(e.target.value)}>Country : &nbsp;</label>
          <select name="" id="">
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <br />

        <div>
          <label htmlFor="">FeedBack : &nbsp;</label>
          <textarea
            style={{ verticalAlign: "top" }}
            name="textarea"
            id=""
            cols="20"
            rows=""
          ></textarea>
        </div>
        <br></br>
        <div>
          <Button input type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormElement;
