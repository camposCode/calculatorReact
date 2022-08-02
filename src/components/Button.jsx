import React from 'react'
import PropTypes, { string } from 'prop-types'

const Button = ({ text, type, clickHandler }) => {
  return (
    <button className={ type } onClick={() => {clickHandler(text)}}>
        <span>
            {
              text
            }
        </span>
    </button>
  )
}

Button.prototypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
export default Button