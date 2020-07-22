import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/Dashboard.css'

const Dashboard = ()=>{
    return(
        <div>
            <div className="ui navbar segment">
                <nav className="ui stackable large secondary menu">
                    <Link to='' className="item">Home</Link>
                    <Link to='' className="item">Messages</Link>
                    <Link to='' className="item">Friends</Link>
                </nav>
            </div>
            <div className='ui hidden divider'></div>
            <div className='ui dashboard container stackable grid'>
                <div className='aligned six wide column'>
                    <img className='ui medium circular image' src="https://images.unsplash.com/photo-1526848707818-825332fe55f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='avatar' />
                </div>
                <div className='center aligned ten wide column'>
                    userProfile
                </div>
            </div>
        </div>
    )
}

export default Dashboard