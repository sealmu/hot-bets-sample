import React from 'react'
import {Route,Switch} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import homePage from './pages/homePage/homePage'
import sportPage from './pages/sportPage/sportPage'
import locationPage from './pages/locationPage/locationPage'
import leaguePage from './pages/leaguePage/leaguePage';
import gamePage from './pages/gamePage/gamePage'

function App() {
    return(
     <Layout>
       <Switch>
          <Route path='/:sport/:location/:league/:game' exact component={gamePage}></Route>
          <Route path='/:sport/:location/:league' exact component={leaguePage}></Route>
          <Route path='/:sport/:location' exact component={locationPage}></Route>
          <Route path='/:sport' component={sportPage}></Route>
          <Route path='/' exact component={homePage}></Route>

       </Switch>
  
     </Layout>
    )
    }
    
  
  
  export default App;