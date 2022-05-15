import React from 'react'
import './Error.css'

const Error = ({ <pass down state of error msg set in fetch> }) => {

  return (
    errorMessage ? <p className='error-display' >{`${errorMessage}`}</p> : <p>''</p>
  )
}

export default Error;
