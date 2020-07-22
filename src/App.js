import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../src/components/WhiskerNationHome'
import Dashboard from '../src/components/UserProfile'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/userDashboard' component={Dashboard}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
