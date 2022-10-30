import React from 'react'

const Button = (props) => {
  return (
    
    <button className='btn pt-3 my-5 d-flex justify-content-center align-items-center'>

        
       <p className='h4'>{props.content}</p>

       
    </button>
  )
}

export default Button