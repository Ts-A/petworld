import React from 'react'
import '../../stylesheets/LandingPagePetTrade.css'
import TNavbar from './PetTradeNavbar'
import Footer from './Footer'

const Home = ()=>{
  return( 
      <div>
        <TNavbar/>
        <div className='ui container section section1'>
            <div className='row'>
                <div className='ui huge red ribbon label'>Hey there,welcome <i className="paw black icon"></i></div>
            </div>
            <span className='ui swipe huge brown right ribbon label'>Swipe down to know more <i className='hand point yellow down icon'></i></span>
            <section className='ui inverted  segment'>
                <div className='ui container inverted secondary segment'>
                    <div className="ui large centered header">Buying pets have become simple</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Suscipit tellus mauris a diam maecenas sed. Senectus et netus et malesuada fames.
                </div>
            </section>
        </div>
        <div className='ui container section section2'>
            <section className='ui inverted  segment'>
                <div className='ui container inverted secondary segment'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Suscipit tellus mauris a diam maecenas sed. Senectus et netus et malesuada fames.
                </div>
            </section>
        </div>    
        <div className='ui container section section3'>
            <section className='ui inverted  segment'>
                <div className='ui container inverted secondary segment'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Suscipit tellus mauris a diam maecenas sed. Senectus et netus et malesuada fames.
                </div>
            </section>
        </div>    
        <div className='ui container section section4'>
        </div>
        <Footer/>
      </div>
  )  
}

export default Home