import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.button}>
      <button onClick={() => props.setIsInvalid(false)}>{props.title}</button>
    </div>
  )
}

export default Button
