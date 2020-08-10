import React, { useContext , useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../../stylesheets/Dashboard.css'
import {userContext} from '../../contexts/userContext'
import {logout} from './Logout'
import moment from 'moment'
import logo from './LOGO ICO.ico'

const Dashboard = ()=>{   
    const {user,dispatch} = useContext(userContext),
          H               = useHistory()
    if(!user)
        H.push('/userLogin')
    useEffect(() => {
        console.log(user)
}, [user])
    const handleLogout = ()=>{
        logout()
        .then((data)=>{
            console.log(data)
            localStorage.clear()
            dispatch({type:'REMOVE_USER'})
        })
        .catch(e=>console.log(e))
    }
    const userContent = user ? (
    <div className='ui container centered dashboard stackable grid'>
        <div className="ui eight wide column fluid link card">
            <div className=" image">
                <img src={logo} alt="user"/>
            </div>
            <div className="content">
                <div className="ui huge header">{user.username}</div>
                <div className='ui medium header'>{user.firstname} {user.lastname}</div>
                <div className="description">
                    {user.description}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                   { `Joined ${moment(user.createdAt).fromNow()}` }
                </span>
            </div>
        </div>
    </div>)
    : (
        <>
            <div className="ui fluid placeholder">
            <div className="image header">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="paragraph">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            </div>
            <div className='ui centered big header'><i className="stopwatch icon"></i>No pets available currently try changing your query</div>
        </>    
)
    return(
        <div className='user home page'>
            <div className="ui home navbar segment">
                <nav className="ui stackable large secondary menu">
                    <Link to='/' className="item">Home</Link>
                    { user ? (
                        <>
                            <div className="right aligned item">Signed in as {user.username}</div>
                            <Link to="/" onClick={handleLogout} className="item">Logout</Link>                    
                        </>
                    ) : (
                        <>
                            <Link to='/userSignUp' className="right aligned item">SignUp</Link>
                            <Link to='/userLogin' className="item">Login</Link>
                        </>
                    ) }
                </nav>
            </div>
            <div className='ui hidden divider'></div>
            {userContent}   
       </div>
    )
}

export default Dashboard