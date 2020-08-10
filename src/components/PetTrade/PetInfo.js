import React, { useEffect, useState, useContext } from 'react'
import TNavbar from './PetTradeNavbar'
import { useParams , Link  } from 'react-router-dom'
import Axios from 'axios'
import Footer from './Footer'
import moment from 'moment'
import '../../stylesheets/LandingPagePetTrade.css'
import $ from 'jquery'
import { userContext } from '../../contexts/userContext'
import logo from './LOGO ICO.ico'

const PetInfo = ()=>{
    const {pet_id}             = useParams(),
          {user}               = useContext(userContext),
          [pet,setPet]         = useState(undefined),
          [comment,setComment] = useState('Nudged'),
          handleSubmit = (e)=>{
            e.preventDefault()
            Axios.put(`/pet/${pet_id}/comment`,{
                comment
            },{
                headers : {
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res=>setPet(res.data.pet)).catch(e=>console.log(e.response.data.error))
            $('.comment-box').val('')
            setComment('')
        }

    useEffect(()=>{
        Axios.get('/pet/' + pet_id)
        .then(data=>setPet(data.data.pet))
        .catch(e=>console.log(e.response.data.error))
    },[pet_id,comment])
    
    const petInfo = pet ? (
        <div className="ui stackable commerce grid">
            <div className="ui seven wide column">
                <img alt="pet-image" className="ui fluid image" src={`/pet/${pet._id}/image`} />
            </div>
            <div className="ui seven wide column">
                <div className="ui item">
                    <div className="content">
                        <div className="ui center aligned header">{pet.name}</div>
                        <span className="time ui tiny teal right floated button">
                            Added {moment(pet.createdAt).fromNow()}
                        </span>
                        <span className="ui labeled button">
                                <Link onClick={()=>{                                    
                                    if(pet){
                                        Axios.post(`/pet/${pet.owner._id}`,{
                                        message : `Mr.${user.lastname} is interested in buying ${pet.name}. For negotiations send ${user.email} location and confirmation mail` 
                                        }).then(()=>console.log('message sent'))
                                        .catch(e=>console.log(e.response.data.error))
                                    }
                                }} to={`/transaction/${pet_id}`} className="ui purchase basic green button">
                                    <i className="shopping cart icon"></i>Purchase
                                </Link>
                                <Link onClick={()=>{                                    
                                    if(pet){
                                        Axios.post(`/pet/${pet.owner._id}`,{
                                        message : `Mr.${user.lastname} is interested in buying ${pet.name}. For negotiations send ${user.email} location and confirmation mail` 
                                        }).then(()=>console.log('message sent'))
                                        .catch(e=>console.log(e.response.data.error))
                                    }
                                }} to={`/transaction/${pet_id}`} className="ui green left pointing label">
                                    <i className="rupee icon"></i>{pet.price}
                                </Link>
                        </span>
                        <div className="description">
                            <div>Owned By <Link to='#'>{pet.owner.firstname} {pet.owner.lastname}</Link></div>
                            <blockquote>
                                <cite>Owner:</cite>
                                <q>{pet.description}</q>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            <div className='ui centered big header'><i className="stopwatch icon"></i>Loading</div>
        </>    
    )


    const comments = pet ? pet.comments.map(comment => 
        <div className="comment" key={comment._id}>
                <span className="avatar">
                    <img alt='im' src={logo} />
                </span>
                <div className="content">
                    <span className="author">{comment.user.username}</span>
                    <div className="metadata">
                        <span className="date">{moment(comment.date).fromNow()}</span>
                    </div>
                    <div className="text">
                        {comment.comment}
                    </div>
                </div>    
            </div>
        ) : 
        (
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
            <div className='ui centered big header'><i className="stopwatch icon"></i>Loading</div>
        </>    
        )
    return(
        <div className='pet sell page'>
            <TNavbar/>
            <div className='pet sell content'>
                <div className="ui container segment">
                    {petInfo}
                </div>
                <div className="ui grid">
                    <div className="ui centered twelve wide column segment" style={{margin:"0 auto"}}>
                        <div className="ui comments">
                            <h3 className="ui dividing header">Comments</h3>
                            {comments}
                        </div>
                        <form onSubmit={(e)=>handleSubmit(e)} className="ui reply form">
                            <div className="field">
                                <input className='comment-box' placeholder='Add a comment' onChange={(e)=>setComment(e.target.value)} ></input>
                            </div>
                            <button className="ui blue labeled submit icon button"><i className="icon edit"></i>Add Reply</button>
                        </form>    
                    </div>
                </div>
            </div>   
            <Footer/>
        </div>     
    )
}

export default PetInfo