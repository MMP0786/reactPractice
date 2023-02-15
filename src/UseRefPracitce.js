import React, { useEffect, useRef } from 'react'

function UseRefPracitce() {
    const myRef = useRef()
    const myEmailRef = useRef()
    const btnRef = useRef()
    let count = useRef(0)

    useEffect(()=>{
       btnRef.current.style.color= "red"
        btnRef.current.style.margin= "10px"
        btnRef.current.style.padding= "5px"
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(myRef.current.value)
        console.log(myEmailRef.current.value)

    }
    const handleClick = ()=>{
        count.current = count.current + 1
        
        console.log("fn called")
        console.log("fn called")
    }

  return (

    <div className='App'>
        <p>{count.current}</p>
        <button onClick={handleClick}>Count</button>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="">Name : </label>
            <input ref={myRef} type="text" placeholder='Enter the Name'/>
   
            </div>
            <div>
            <label htmlFor="">Email : </label>
            <input ref={myEmailRef} type="email" placeholder='Enter the Email'/>
   
            </div>

            <input ref={btnRef} type="submit" value={"Submit"} />
        </form>
    </div>
  )
}

export default UseRefPracitce