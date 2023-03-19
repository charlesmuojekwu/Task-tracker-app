import React from 'react'

const Button = ({color, text, onAddButton}) => {
  return (
    <div>
        <button style={{ backgroundColor: color }} className='btn' onClick={onAddButton}>{text}</button>
    </div>
  )
}

export default Button