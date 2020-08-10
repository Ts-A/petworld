import React, { useState, useEffect, useContext } from 'react'
import TNavbar from './PetTradeNavbar'
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import Footer from './Footer'
import { userContext } from '../../contexts/userContext'
import $ from 'jquery'
import moment from 'moment'

const Trade = ()=>{
    const {user}             = useContext(userContext),
          H                  = useHistory(),
          [pets,setPets]     = useState(undefined),
          [recent,setRecent] = useState(false),
          [price,setPrice]   = useState(false),
          [sort,setSort]     = useState(''),
          [skip,setSkip]     = useState(0)

    useEffect(()=>{
        if(recent===true){ 
            setPrice(false)
            setSort('-createdAt')
            $('#price').prop('checked',false)
        }
        else if( recent===false && price===false ){
            setSort('createdAt')
        }
    },[recent])

    useEffect(()=>{
        if(price===true){ 
            setRecent(false)
            setSort('price')
            $('#recent').prop('checked',false)
        }
        else if(price===false && recent===false ){
            setSort('createdAt')
        }
    },[price])

    useEffect(()=>{
        console.log(sort)
        Axios.get('/pets',{
            params:{
                sort,
                skip,
                limit : 5
            }
        })
        .then( data=> setPets(data.data.pets) )
        .catch( e => console.log(e) )
    },[sort,skip])
    
    const petsContent = pets && pets.length ? pets.map(
        pet => {
            return(
                <div className="ui coloumn item" key={pet._id}>
                    <div className="image">
                        <img alt='pet' src={`/pet/${pet._id}/image`}/>
                        <div className='ui red circular left floating label'>{pet.likes.length}</div>
                    </div>
                    <div className="content">
                        <Link to='' className="header">{pet.name}</Link>
                        <div className="meta">
                            <span>owned by {pet.owner.lastname}</span>
                            <span>uploaded {moment(pet.createdAt).fromNow()}</span>
                        </div>
                        <div className="description">
                            <p>{pet.description}...</p>
                        </div>
                        <div className="extra">
                            <div className="ui label">{pet.type}</div>
                            { user ? 
                             pet.likes.find( item => item._id === user._id ) ? (
                                <button onClick={()=>{
                                    Axios.put('/pet/'+pet._id+'/unlike',{},{headers:{'Authorization' : 'Bearer ' + localStorage.getItem('token')}}).then(res=>console.log(res)).catch(e=>console.log(e))
                                    window.location.reload(false)
                                }} className="ui basic small black button"><i className='close icon'></i>:|</button>
                                ) : (
                                <button onClick={()=>{
                                    Axios.put('/pet/'+pet._id+'/like',{},{headers:{'Authorization' : 'Bearer ' + localStorage.getItem('token')}}).then(res=>console.log(res)).catch(e=>console.log(e))
                                    window.location.reload(false)
                                }} className="ui basic small red button"><i className='heart icon'></i>Aww;)</button>
                            )  : (
                                <button onClick={ ()=> H.push('/userLogin')  } className="ui basic small red button"><i className='heart icon'></i>Aww;)</button>                                
                            ) }
                            <div className="ui basic label"><i className='rupee icon'></i>{pet.price}</div>
                            {  pet.owner._id === user._id ? (<div onClick={()=>{
                                Axios.delete(`/pet/${pet._id}`,{
                                    headers : {
                                        'Authorization' : 'Bearer ' + localStorage.getItem('token')
                                    }
                                }).then(()=>window.location.reload(false))
                            }} style={{cursor:"pointer"}} className="ui label"><i className="trash icon"></i>Sold? Want to remove</div>) : ( 
                                <Link to={'/petInfo/' + pet._id} className="ui basic green label"><i className="paw icon"></i>Buy</Link>
                             ) }
                        </div>
                    </div>
                </div>
            ) 
        } 
    ) : (
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
        <div className='pet trading page'>
            <TNavbar/>
            <main className='pet trading content'>
                <div className="ui container segment">Want to sell/donate your pet? <Link to="/petSell" className="ui basic violet button">Sure thing</Link></div>
                <div className="ui container segment">
                    <div className="ui commerce stackable grid">
                        <form className="ui inverted segment four wide column form vertical menu">
                            <div className='ui center aligned inverted segment'>
                                <span className='ui inverted orange button'>Select Any One Query to Sort</span>
                                <div className='ui inverted pagination menu segment'>
                                    <span onClick={()=>setSkip(0)} className='ui inverted orange button'>Home<i className='left arrow icon'></i></span>
                                    <span onClick={()=>setSkip(prev=>prev+5)} className='ui inverted orange button'>Next<i className='right arrow icon'></i></span>
                                </div>
                            </div>
                            <div className='ui inline field item inverted orange button'>
                                <input id='recent' type='checkbox' onChange={()=>setRecent(recent => !recent)}/>
                                <label>Most Recent</label>
                            </div>
                            {/* <div className='item'>
                                <select className='ui type dropdown' onChange={(e)=>setType(e.target.value)}>
                                    <option value={''}>Kind</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="fish">Fish/Aquarium</option>
                                    <option value="bird">Bird</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="horse">Horse</option>
                                </select>   
                            </div>     
                            <div className='item'>
                                <select className='ui dropdown' onChange={(e)=>setAge(e.target.value)}>
                                    <option value={undefined}>Age</option>
                                    <option value={0}>&gt;=0</option>
                                    <option value={3}>&gt;=3</option>
                                    <option value={5}>&gt;=5</option>
                                    <option value={7}>&gt;=7</option>
                                    <option value={10}>&gt;=10</option>
                                </select>    
                            </div> */}
                            <div className='ui inline field item inverted orange button'>
                                <input id='price' type='checkbox' onClick={()=>setPrice(price => !price)}/>
                                <label>Lowest Price</label>
                            </div>
                            <div className='ui divider'></div>
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