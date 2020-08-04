import React, { useState, useEffect } from 'react'
import TNavbar from './PetTradeNavbar'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Footer from './Footer'
import $ from 'jquery'

const Trade = ()=>{
    const [pets,setPets] = useState(undefined)
    let   [recent,setRecent] = useState(false),
          [likes,setLikes]   = useState(false),
          [type,setType]     = useState(undefined),
          [age,setAge]       = useState(undefined)
    useEffect(()=>{
        // console.log(recent,likes,type,age)
        // let data = {
        //     recent,
        //     likes,
        //     type,
        //     age 
        // }
        // var sort = ''
        // for (const [key, value] of Object.entries(data)) {
        //     if(value)
        //         sort += key + ' '
        //   }
        // console.log(sort)
        Axios.get('/pets',{
            params:{
                sort  : 1,
                skip  : 0,
                limit : 3
            }
        })
        .then( data=> setPets(data.data.pets) )
        .catch( e => console.log(e) )
        // $('.ui.type.dropdown').dropdown()                  //Semantic ui Problem
    },[recent,likes,type,age])
    const petsContent = pets ?  pets.map(
        pet => {
            return(
                <div className="ui coloumn item" key={pet._id}>
                    <div className="image">
                        <img alt='pet' src="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"/>
                    </div>
                    <div className="content">
                        <Link to='' className="header">{pet.name}</Link>
                        <div className="meta">
                            <span className="cinema">owned by {pet.owner.lastname}</span>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.</p>
                        </div>
                        <div className="extra">
                            <div className="ui label">{pet.type}</div>
                            <Link to={'/petInfo/' + pet._id} className="ui basic green label"><i className="paw icon"></i>Buy</Link>
                            <div className="ui basic red label"><i className="heart icon"></i>Love it</div>
                        </div>
                    </div>
                </div>
            ) 
        } 
    ) : (
        <div className="ui active inverted dimmer">
            <div className="ui text loader"></div>
        </div>
    )
    return(
        <div className='main-component'>
            <TNavbar/>
            <main className='content'>
                <div className="ui container segment">Want to sell/donate your pet? <Link to="/petSell" className="ui violet button">Sure thing</Link></div>
                <div className="ui container segment">
                    <div className="ui commerce grid">
                        <form className="ui form vertical menu">
                            <div className='ui inline field item'>
                                <input type='checkbox' onClick={()=>setRecent(!recent)}/>
                                <label>Most Recent</label>
                            </div>
                            <div className='ui inline field item'>
                                <input type='checkbox' onClick={()=>setLikes(!likes)}/>
                                <label>Most Liked</label>
                            </div>
                                <select className='ui type dropdown' onChange={(e)=>setType(e.target.value)}>
                                    <option value={''}>Animals Type</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="fish">Fish/Aquarium</option>
                                    <option value="bird">Bird</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="horse">Horse</option>
                                </select>    
                            <div className='item'>
                            <select className='ui dropdown' onChange={(e)=>setAge(e.target.value)}>
                                    <option value={undefined}>Age</option>
                                    <option value={0}>&gt;=0</option>
                                    <option value={3}>&gt;=3</option>
                                    <option value={5}>&gt;=5</option>
                                    <option value={7}>&gt;=7</option>
                                    <option value={10}>&gt;=10</option>
                                </select>    
                            </div>
                        </form>    
                        <div className="twelve wide column">
                            <div className="ui divided items">
                            {petsContent}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Trade