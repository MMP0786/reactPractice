import React from 'react'

function Memorigatin(props) {
    console.log("from memorigation")
  return (
    <div>
        <div>Memorigatin of which named {props.name} </div>
    <button onClick={props.method}> Click to update</button>

    </div>
  )
}

export default React.memo(Memorigatin);
