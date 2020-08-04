import React, { useContext , useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import '../../stylesheets/Dashboard.css'
import {userContext} from '../../contexts/userContext'
import {logout} from './Logout'
import moment from 'moment'

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
                <img src="https://images.unsplash.com/photo-1526848707818-825332fe55f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="user"/>
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
                <span>
                    <i className="user icon"></i>
                    {user.friends.length} Friends
                </span>
            </div>
        </div>
    </div>)
    : (
    <>
        404 Not found
    </>)
    return(
        <div>
            <div className="ui navbar segment">
                <nav className="ui stackable large secondary menu">
                    <Link to='/' className="item">Home of</Link>
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