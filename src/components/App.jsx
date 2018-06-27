import React from 'react'
import Header from './Header'
import Body from './Body'
import { Switch, Route } from 'react-router-dom'

function App(){
  return(
    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={Body} />
        
      </switch>
    </div>
  )
}
export default App
