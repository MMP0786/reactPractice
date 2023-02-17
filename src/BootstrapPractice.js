import React, { useState } from 'react'
import {Alert, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function BootstrapPractice() {
    const [show, setShow] = useState(true)

    if(show){
    return (

        <Alert className='App' onClose={()=> setShow(false)} dismissible>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident error hic earum blanditiis iste quod quas, iure ab esse.
    </p>
    <Alert.Link href='google.com'>
        click to open link
    </Alert.Link>
</Alert>
         )
    }
  return (
      <div className='App'>
        <Button>Submit</Button>
        <Button variant='dark' size='lg'>Submit</Button>
        <Button variant='light' size='lg'>Submit</Button>
        <Button variant='warning' size='lg'>Submit</Button>
        <Button variant='success' size='lg'>Submit</Button>
        <Button variant='danger' size='sm'>Submit</Button>
    </div>
  )
}

export default BootstrapPractice