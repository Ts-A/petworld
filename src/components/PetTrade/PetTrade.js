import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Trade from './TradingPlatform'
import PetInfo from './PetInfo'
import Transaction from './Transaction'
import PetSell from './PetSell'
import { userContext } from '../../contexts/userContext'

const PetTrade = ()=>{
    const {user} = useContext(userContext)
    return(
        <div>
            <Route exact path='/petTradeHome' component={Home} />
            <Route exact path='/tradingPlatform' component={Trade} />
            <Route exact path='/petInfo/:pet_id' component={PetInfo} />
            <Route exact path='/transaction'>
                {user ? <Transaction/>  : <Redirect to='/userLogin'/>}
            </Route>
            <Route exact path='/petSell'>
                {user ? <PetSell/>  : <Redirect to='/userLogin'/>}
            </Route>
        </div>    
    )
}

export default PetTrade