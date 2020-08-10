import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './components/User/UserProfile'
import PetTrade from './components/PetTrade/PetTrade'
import SignUp from '../src/components/User/SignUp'
import Login from '../src/components/User/Login'
import UserContextProvider from './contexts/userContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Route exact path='/userDashboard' component={Dashboard}/>
          <Route exact path='/userSignUp' component={SignUp}/>
          <Route exact path='/userLogin' component={Login}/>
          <PetTrade/>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
