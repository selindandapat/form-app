import React from 'react'
import { useLocation } from 'react-router-dom'
import './Display.css'

const Display=({formValue})=> {    
    const loc = useLocation()
    console.log(loc.state)

  return (
    <>
    <div className="content">
      <h1>Hello, {formValue.name} ! Welcome!</h1>
      </div>
      <h3>Your Details </h3>
      <div className='elements'>
        <div className='box'>
      
      <p>Age : {formValue.age}</p>
      <p>Email Address : {formValue.email} </p>
      <p>Mobile Number : {formValue.number}</p>
      </div>
      </div>
    </>
  )
}

export default Display
