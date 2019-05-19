import React from 'react'
import {Route, IndexRoute} from 'react-router'


const createRoutes = () => {
    return (
      <Router path='/' component={Template}></Router>
    )
}

const Routes = createRoutes()

export default Routes