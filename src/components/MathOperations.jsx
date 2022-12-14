import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const MathOperations = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button text='+' clickHandler={ onClickOperation } />
        <Button text='-' clickHandler={ onClickOperation } />
        <Button text='*' clickHandler={ onClickOperation } />
        <Button text='/' clickHandler={ onClickOperation } />
        <Button text='=' clickHandler={ onClickEqual } />
    </section>
)

MathOperations.prototypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations