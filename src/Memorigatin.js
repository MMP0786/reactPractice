import React from 'react'

function Memorigatin() {
    console.log("from memorigation")
  return (
    <div>Memorigatin</div>

  )
}

export default React.memo(Memorigatin);
