import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    console.log("Renderizacion de Result");
  return (
    <div>
      <div className="result">
        { value }
      </div>
    </div>
  )
}

Result.propTypes = {
    value: PropTypes.string
}

export default Result
