import React from 'react'
import {Route, Switch} from 'react-router-dom'

import homePage from './pages/homePage/homePage'



const Routes = () => (    
        <Switch>
            <Route path='/' component={homePage}></Route>
          
        </Switch>    
)

export default Routes