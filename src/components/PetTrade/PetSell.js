import React, { useState, useEffect } from 'react'
import TNavbar from './PetTradeNavbar'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

const PetSell = () => {
    const H                            = useHistory(),
          [name,setName]               = useState(''),
          [age,setAge]                 = useState(1),  
          [type,setType]               = useState('dog'),
          [file,setFile]               = useState(''),
          [price,setPrice]             = useState(0),
          [gender,setGender]           = useState('male'),
          [description,setDescription] = useState('Hey Paws and Pals.This is my cute pet. Let me know if you are interested in buying.')
    useEffect(()=>{
        if(!localStorage.getItem('token'))
        H.push('/userSignUp')
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file',file)
        data.append('name',name)
        data.append('type',type)
        data.append('price',price)
        data.append('age',age)
        data.append('gender',gender)
        data.append('description',description)
        Axios.post('/pet',data,{
            headers : {
                "Authorization":"Bearer " + localStorage.getItem('token')
            }
        }).then(()=>{H.push('/tradingPlatform')})
        .catch(e=>console.log(e.response.data.error))
    }
    return(
        <div className='petsellform'>
            <TNavbar/>
        <form className="ui container form" onSubmit={(e)=>handleSubmit(e)}>
            <h4 className="ui dividing header">Pet Information</h4>
            <div className="two wide fields">
                <div className='required field'>
                    <label htmlFor='petname'>PetName</label>
                    <input required type="text" name="petname" id='petname' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='required field'>
                    <label htmlFor='petage'>Age</label>
                    <select required value={age} className='ui selection dropdown' onChange={(e)=>setAge(e.target.value)} >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                    </select>
                </div>
            </div>
            <h4 className="ui dividing header">Describe your pet</h4>
            <div className="two wide fields">
                <div className='field'>
                    <label htmlFor='description'>How'd you describe your pet</label>
                    <textarea rows='1' onChange={(e)=>setDescription(e.target.value)} style={{resize:"none"}} defaultValue={description} placeholder='Describe your pet and specify the quantity of the product'></textarea>
                </div>
                <div className='required field'>
                    <label htmlFor='image'>Add an Image(jpeg|jpg|png)</label>
                    <input style={{backgroundColor:"orange"}} required type='file' name='image' id='image' onChange={(e)=>
                        {
                            if (!e.target.files[0].name.match(/\.(jpeg|jpg|png)$/)){
                                e.target.value = ''
                        }   else{
                                setFile(e.target.files[0])    
                        }}} />
                </div>
            </div>
            <div className="fields">
                <div className="seven wide required field">
                    <label htmlFor='kind'>Type</label>
                    <select required value={type} className="ui search dropdown" id='kind' name="kind" onChange={(e)=>setType(e.target.value)}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="horse">Horse</option>
                        <option value="bird">Bird</option>
                        <option value="aquarium">Aquarium</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="hamster">Hamster</option>
                    </select>
                </div>
                <div className="three wide required field">
                    <label htmlFor='gender'>Gender</label>
                    <select value={gender} className="ui search dropdown" id='gender' name="gender" onChange={(e)=>setGender(e.target.value)} >
                        <option value="male">Male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div className="six wide required field">
                    <label htmlFor='price'>Price(in)</label>
                    <input id='price' name='price' type='number' value={price} min='0' step='100' required onChange={(e)=>setPrice(e.target.value)} />
                </div>
            </div>
            <button className="ui brown center aligned button">Submit Information</button>
        </form>
    </div>
    )
}

export default PetSell