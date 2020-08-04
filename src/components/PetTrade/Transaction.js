import React, { useContext, useEffect } from 'react'
import TNavbar from './PetTradeNavbar'
import { userContext } from '../../contexts/userContext'
import { useHistory } from 'react-router-dom'

const Transaction = ()=>{
    const {user} = useContext(userContext)
    const H      = useHistory()
    useEffect(()=>{
        if(!user)
        H.push('/userLogin')
    })
    return(
        <div>
            <TNavbar/>
            Purchase it
        </div>
    )
}

export default Transaction