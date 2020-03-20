import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Landing from '../screens/Landing'
import BeforeCat from "../screens/BeforeCat";
import Informations from "../screens/Informations";
import Question from "../screens/Question";
import Categories from "../screens/Categories";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/before' component={BeforeCat}></Route>
        <Route exact path='/question/:themeid/:questionid' component={Question}></Route>
        <Route exact path='/help' component={Informations}></Route>
        <Route exact path='/summary' component={Categories}></Route>
      </Switch>
    </Router>
  )
}

export default Routes
