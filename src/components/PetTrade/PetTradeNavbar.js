import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {userContext} from '../../contexts/userContext'
import {logout} from '../User/Logout'
import '../../stylesheets/LandingPagePetTrade.css'
import logo from './LOGO ICO.ico'

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
    <div className="ui tertiary navbar segment" style={{backgroundColor:'#EFEAEA'}}>
        <nav className="ui stackable large secondary menu">
            <Link to='/' className="ui logo item"><img src={logo} alt='logo' /></Link>
            <Link to='/tradingPlatform' className='item'>Trade</Link>
            {userNav}
        </nav>
    </div>
    )
}

export default TNavbar