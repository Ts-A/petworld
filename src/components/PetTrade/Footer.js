import React from 'react'
import '../../stylesheets/LandingPagePetTrade.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
            <div className="ui footer segment">
                <div className="ui container one column stackable grid">
                    <div className='row'>
                        <div className='column center aligned'>
                            <div className='ui medium list'>
                                <div className='item'>
                                    <Link to='#'>About Us</Link>
                                </div>
                                <div className='item'>
                                    <Link to='#'>About this project</Link>
                                </div>
                                <div className='item'>
                                    <Link to='#'>Want to make projects for your wesbite</Link>
                                </div>
                                <div className='item'>
                                    Check us out on 
                                    <span> <i className='large twitter icon'></i></span>
                                    <span> <i className='large facebook icon'></i></span>
                                    <span> <i className='large instagram icon'></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div> 
    )
}

export default Footer
