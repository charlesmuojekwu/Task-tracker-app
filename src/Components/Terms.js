import React from 'react'
import { Link } from 'react-router-dom'

const center = {
    textAlign:'center',
    color: 'red'
}

const Terms = () => {
  return (
    <div>
        <h4 className={center} style={ center}>Terms & Conditions</h4>
        <Link to='/' >Back</Link>
    </div>
  )
}

export default Terms