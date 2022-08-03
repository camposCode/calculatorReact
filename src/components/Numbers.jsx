import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

// DRY Code
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button text={number.toString()} clickHandler={onClickNumber} key={number}/>
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.prototypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers