import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {userContext} from '../../contexts/userContext'
import {logout} from '../User/Logout'
import '../../stylesheets/LandingPagePetTrade.css'

const TNavbar = ()=>{
    const {user,dispatch} = useContext(userContext)
    const handleLogout = ()=>{
        logout()
        .then(data=>{
            console.log(data)
            dispatch({type:"REMOVE_USER"})
            localStorage.clear()
        }).catch(e=>console.log(e.reponse.data.error))
    }
    var userNav = user ? (
    <>
        <Link to='/userDashboard' className='right aligned item'>Signed in as {user.username}</Link>
        <Link onClick={handleLogout} className='item' to='/'>Logout</Link>
    </>
    ) : (
    <>
        <Link className='right aligned item' to='/userSignUp'>SignUp</Link>
        <Link className='item' to='/userLogin'>Login</Link>
    </>
    ) 

    return(
    <div className="ui navbar segment">
        <nav className="ui stackable large secondary menu">
            <Link to='/' className="item">Icon</Link>
            <Link to='/petTradeHome' className="item">THome</Link>
            <Link to='/tradingPlatform' className='item'>Trade</Link>
            <Link to='/transaction' className='item'>Transactions</Link>
            {userNav}
        </nav>
    </div>
    )
}

export default TNavbar