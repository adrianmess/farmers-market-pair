import React from 'react'
import PropTypes from 'prop-types'


function Month(props){
  return(
    <div>
      <p>{props.month}</p>
      
      <hr/>
    </div>
  )
}

Month.propTypes = {
  month: PropTypes.string,
}

export default Month
