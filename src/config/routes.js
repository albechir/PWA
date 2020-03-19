import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Landing from '../screens/Landing'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
