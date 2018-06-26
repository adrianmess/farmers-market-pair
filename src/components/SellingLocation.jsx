import React from 'react'
import PropTypes from 'prop-types'

function SellingLocation (props){
  return(
    <div>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  )
}

SellingLocation.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
}
export default SellingLocation
