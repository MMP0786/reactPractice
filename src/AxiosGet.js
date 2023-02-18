import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosGet() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setItem(res.data));
      
  }, []);
  console.log(item)
  return (
    <>
      {/* <div>this is</div> */}
      <div>
        {item.map((text, i) => {
            return(
                <>
                <div key={i} className="bg-success text-light text-center mx-5 p-3">My name is {text.name} and email {text.email}</div>
                <h3  className="mx-5 text-info text-center bg-danger">{text.username}</h3>
                
                </>
            )
        }
        )}
      </div>
    </>
  );
}

export default AxiosGet;
