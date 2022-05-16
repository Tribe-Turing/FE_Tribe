import React from 'react'
import './Error.css'

const Error = ({ errorMessage }) => {

  return (
    errorMessage ? <p className='error-display' >{`${errorMessage}`}</p> : <p>''</p>
  )
}

export default Error;
