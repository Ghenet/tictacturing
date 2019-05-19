import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'

const createRoutes = () => {
    return (
      <Route path='/' component={Template}></Route>
    )
}

const Routes = createRoutes()

export default Routes