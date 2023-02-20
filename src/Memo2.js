import React, { useMemo } from "react";
import Memorigatin from "./Memorigatin";

function Memo2() {
  const [count, setCount] = React.useState(0);
  console.log("from memorigation 2");

  const handleMethod = useMemo(()=>{
        console.log(" coming from 2 to 1")
      
  },[]) 
  return (
    <div>
      <p>Memo2</p>
      {count}

      <div>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>

      <Memorigatin name={"Mohd Musarraf"} and method={handleMethod} />
      {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
    </div>
  );
}

export default Memo2;
