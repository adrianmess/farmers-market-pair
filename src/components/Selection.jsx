import React from 'react'
import PropTypes from 'prop-types'
import Month from './Month'


function Selection(props){
  return(
    <div>
      <ul>
        <h3>{props.month}</h3>
          <hr/>
        {props.selection.map((produce, index) =>
          <li>{produce}</li>
        )}

      </ul>
      <hr/>
    </div>
  )
}

Selection.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired

}

export default Selection
