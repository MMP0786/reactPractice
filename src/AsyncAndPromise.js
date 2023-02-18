import React from 'react'

function AsyncAndPromise() {
    const p =  new Promise (function(resolve, reject){
        let a = 10;
        if(a>=10){
            resolve("this is resolve")
        }else{
            reject("error from reject")
        }
    })

    p.then(res=>{
        return res
    }).then((rest)=>{
        console.log(rest + "also rest")
    }).catch((err)=>{
        console.log(err)
    })

const fn= async()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    res = res.json()
    console.log(res)
}

  return (
    <div>
       this is promise
    </div>
  )
}

export default AsyncAndPromise