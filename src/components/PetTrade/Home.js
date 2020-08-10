import React from 'react'
import '../../stylesheets/LandingPagePetTrade.css'
import TNavbar from './PetTradeNavbar'
import Footer from './Footer'
import { useHistory } from 'react-router-dom'

const Home = ()=>{
  const H = useHistory()
  return( 
      <div className='pet home page'>
        <TNavbar/>
        <div className='ui section section1'>
            <div className='row'>
                <span style={{position:'relative',top:0,left:"15vw"}} className='ui massive label'>Paw-Wow <i className="paw black icon"></i> Keep going down </span>
            </div>
            <section className='ui inverted segment' style={{backgroundColor:'#020512'}} > 
                <div className='ui container inverted tertiary segment'>
                    <div className="ui huge centered header">Buying pets have become simple</div>
                    <div className='ui center aligned grid'>
                       <span className="row">Finally you have decided to buy/sell pets and now you are looking for the right platform to do it online.</span>
                       <span className="row">Don't worry we have got you covered</span><button onClick={()=>H.push('/tradingPlatform')} className='ui inverted info button'>Jump right ahead now</button>
                    </div>  
                </div>
            </section>
        </div>
        <div className='ui section section2'>
            <section className='ui inverted  segment'>
                <div className='ui container inverted secondary segment'>
                    <div className="ui huge centered header">Everything happens in minutes</div>
                    <div className='ui center aligned grid'>
                       <span className="row">Create a user profile. Then head to our market platform to see all the cutest PAWPALs</span>
                       <span className="row">Confirm the price and all the other criteria twice before adding them to the market place to avoid mishaps</span>
                    </div>                  
                </div>
            </section>
        </div>    
        <div className='ui section section3'>
            <section className='ui inverted  segment'>
                <div className='ui container inverted secondary segment'>
                    <div className="ui huge centered header">Notifications</div>
                    <div className='ui center aligned grid'>
                       <span className="row">We will send emails to you to keep you in the loop</span>
                    </div>        
                </div>
            </section>
        </div>    
        <div className='ui section section4'>
        </div>
        <Footer/>
      </div>
  )  
}

export default Home