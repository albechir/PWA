import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../screens/Login'
import PrivateRoute from './privateRoute'
import SimpleHome from '../screens/Home'
import MoviePreview from '../screens/Preview'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <PrivateRoute
          exact
          path='/preview'
          component={MoviePreview}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path='/simplehome'
          component={SimpleHome}
        ></PrivateRoute>
      </Switch>
    </Router>
  )
}

export default Routes
