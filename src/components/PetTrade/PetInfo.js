import React, { useEffect, useState } from 'react'
import TNavbar from './PetTradeNavbar'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Footer from './Footer'

const PetInfo = ()=>{
    const {pet_id}     = useParams(),
          [pet,setPet] = useState(undefined),
          [src,setSrc] = useState(undefined)
    console.log(pet_id)
    useEffect(()=>{
        Axios.get('/pet/' + pet_id)
        .then(data=>setPet(data.data.pet))
        .then(()=>setSrc("https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"))
        .catch(e=>console.log(e.response.data.error))
    },[pet_id])
    const petInfo = pet ? (
        <div className="ui stackable commerce grid">
            <div className="ui center aligned two wide column">
                <img onClick={e=>setSrc(e.target.src)} className="ui inline centered tiny image" alt="mini1" src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img onClick={e=>setSrc(e.target.src)} className="ui inline centered tiny image" alt="mini1" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"/>
                <img onClick={e=>setSrc(e.target.src)} className="ui inline centered tiny image" alt="mini1" src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img onClick={e=>setSrc(e.target.src)} className="ui inline centered tiny image" alt="mini1" src="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <img onClick={e=>setSrc(e.target.src)} className="ui inline centered tiny image" alt="mini1" src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
            </div>
            <div className="ui seven wide column">
                <img alt="pet" className="ui fluid image" src={src}/>
            </div>
            <div className="ui seven wide column">
                Details{pet.name}
                <a href="/transaction" className="positive ui button bottom attached">GO for it</a>
            </div>
        </div>
    ) : (
        <div className="ui active inverted dimmer">
            <div className="ui text loader"></div>
        </div>
    )
    return(
        <div>
            <TNavbar/>
            <div className="ui container segment">
                {petInfo}
            </div>
            <div className="ui container stackable grid">
                    <div className="ui segment ten column">
                        Comments <button className='ui yellow button'>Add a comment</button>
                    </div>
            </div>
            <Footer/>
        </div>     
    )
}

export default PetInfo