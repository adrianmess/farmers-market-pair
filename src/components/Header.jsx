import React from 'react'
import { Link } from 'react-router-dom'
function Header(){
  return(
    <div>
      <h1>Farmer's Market Circuit</h1>
      <Link to="/">Home</Link> | <Link to="/locationlist">See Diffrent Locations</Link> | <Link to="/monthlist">Diffrent Month produce</Link>

    </div>

  )
}

export default Header
