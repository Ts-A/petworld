import React, { useContext, useEffect, useState } from 'react'
import TNavbar from './PetTradeNavbar'
import { userContext } from '../../contexts/userContext'
import { useHistory ,useParams,Link } from 'react-router-dom'
import Footer from './Footer'
import Axios from 'axios'

const Transaction = ()=>{
    const {user}        = useContext(userContext),
          H             = useHistory(),
          [pet,setPet]  = useState(''),
          {pet_id}      = useParams()
    useEffect(()=>{
        if(!user)
        H.push('/userLogin')
        Axios.get('/pet/' + pet_id)
        .then(data=>setPet(data.data.pet))
        .catch(e=>console.log(e.response.data.error))
        console.log(pet)
    },[])

    const order = pet ? (
        <>  
            <div className='ui container sixteen wide column center aligned huge header button'>Purchase request sent to the owner<div className='ui grey label'><i className='certificate icon'></i>Wait until owner replies. Check your mail</div></div>
            <div className='ui container sixteen wide column center aligned medium header'>Pet:{pet.name}</div>
            <div className='ui container sixteen wide column center aligned medium header'>Gender:{pet.gender}</div>
            <div className='ui container sixteen wide column center aligned medium header'>Owner:Mr.{pet.owner.lastname}</div>
            <div className='ui container sixteen wide column center aligned medium header'>Buyer:Mr.{user.lastname},{user.email}</div>
            <button className='ui container sixteen wide column center aligned medium huge button'><Link to='/tradingPlatform'>Back to Trading platform</Link></button>
        </>
    ) : (
        <></>
    )

    return(
        <div className='pet transaction page'>
            <TNavbar/>
            <div className='ui container stackable grid piled segment pet transaction content'>
                    {order}
            </div>
            <Footer/>
        </div>
    )
}

export default Transaction