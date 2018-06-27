import React from 'react'
import PropTypes from 'prop-types'


function Month(props){
  return(
    <div>
      <p>{props.month}</p>
      <ul>
        {props.selection}
      </ul>
      <hr/>
    </div>
  )
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Month
