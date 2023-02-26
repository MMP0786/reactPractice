import React, { useMemo } from "react";
import Memorigatin from "./Memorigatin";

function Memo2() {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  console.log("from memorigation 2");

  // const nethod = React.useMemo(()=>{
  //   setCount1((count11)=> count11 +1)

        console.log(" coming from 2 to 1")

        // let age = prompt('How old are you?',  );
        // let res = window.confirm("Are you confirm ??");
        // alert(`You are ${res} and ${ age} years old!`); 
      
  // },[setCount1]) 
  return (
    <div>
      <p>Memo2</p>
      {count}
      <br></br>
      {count1}

      <div>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>

      <Memorigatin name={"Mohd Musarraf"} and method={"handleMethod"} />
      {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
    </div>
  );
}

export default Memo2;
