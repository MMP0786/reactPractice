import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, zero } from './action'

function NewApp() {
    const myState = useSelector((state)=> state.Inc_dec)
    const dispatch = useDispatch()
  return (
    <div className='App'>
        <input value={myState}/>
        <div><button onClick={()=> dispatch(increase())}>Add</button>
        <button onClick={()=> dispatch(decrease())}>MIN</button>
        <button onClick={()=> dispatch(zero())}>
            zero
        </button>
        </div>
    </div>
  )
}

export default NewApp