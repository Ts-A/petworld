import React, { useState, useEffect } from 'react'
import TNavbar from './PetTradeNavbar'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

const PetSell = () => {
    const H  = useHistory()
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        H.push('/userSignUp')
    })
    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [price,setPrice] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/pet',{
            name,
            type,
            price
        },{
            headers : {
                "Authorization":"Bearer " + localStorage.getItem('token')
            }
        }).then(()=>H.push('/tradingPlatform'))
        .catch(e=>console.log(e.response.data.error))
    }
    return(
        <div>
            <TNavbar/>
            <form onSubmit={(e)=>handleSubmit(e)} className="ui container form">
                <div className="seven wide field">
                    <label>Pet Name</label>
                    <input type="text" name="petname" onChange={(e)=>setName(e.target.value)} placeholder="First Name"/>
                </div>
                <div className="three wide field">
                    <select className="ui dropdown" onClick={(e)=>setType(e.target.value)}  name="type">
                        <option value="">Type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="fish">Fish/Aquarium</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="horse">Horse</option>
                    </select>
                </div>
                <div className='three wide field'>
                    <div className="ui right labeled input">
                        <label className="ui label">Rs.</label>
                        <input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Amount" id="amount"/>
                        <div className="ui basic label">.00</div>
                    </div>
                </div>
                <button className="ui blue button" type="submit">Submit</button>
            </form>
            <button className="ui brown button">Check pet Stash</button>
        </div>
    )
}

export default PetSell