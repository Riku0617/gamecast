import React from 'react'

const Initializer = (playAmount:number) => {

    if (playAmount === 0){
        fetch("http://localhost:9091/drives",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({})
    }).then(() => {
        console.log("Post initial drive!")
    })
    }
  return null
}

export default Initializer
