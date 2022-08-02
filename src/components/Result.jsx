import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {

  return (
    <div>
      <div className="result">
        { value }
      </div>
    </div>
  )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: '0'
}

export default Result
