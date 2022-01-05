import React from 'react'
import Button from './Button'

const PopUpWindow = (props) => {
  return (
    <div className>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <Button title='Okay'/>
    </div>
  )
}

export default PopUpWindow
