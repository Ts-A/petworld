import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Axios from 'axios'
import { userContext } from '../../contexts/userContext'
import Password from 'react-password-strength-bar'

const SignUp = ()=>{
    const {dispatch}                 = useContext(userContext) ,
            H                        = useHistory(),
            [firstname,setFirstname] = useState(undefined),
            [lastname,setLastname]   = useState(undefined),
            [username,setUsername]   = useState(`user__${Date.now()}`),
            [password,setPassword]   = useState(undefined),
            [email,setEmail]         = useState(undefined),
            [terms,setTerms]         = useState(false),
            [surveys,setSurveys]      = useState(false),
            [updates,setUpdates]     = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!username)
            username = `user__${Date.now()}`
        Axios.post('/user',{
            user : {
                firstname,
                lastname,
                username,
                password,
                email,
                terms,
                surveys,
                updates    
            }
        }).then(res=>
            {
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data.user))
                dispatch({type:'ADD_USER',value:res.data.user})
                H.push('/userDashboard')
            })
        .catch(e=>console.log(e.response.data.error))
        setUsername('')
        setPassword('')
        setEmail('')
        setTerms('')
        setSurveys('')
        setUpdates('')
    }
    return(
        <>
            <div className="ui segment">
                <div className="ui container navbar">
                    <nav className="ui four item stackable huge pointing menu">
                        <span className="item" onClick={()=>{H.goBack()}}><i className='ui angle double left icon'></i></span>
                        <Link to='/' className="item">Icon</Link>
                        <Link to='/userSignUp' className='active item'>SignUp</Link>
                        <Link to='/userLogin' className='item'>Login</Link>
                    </nav>
                </div>       
                <div className='ui raised segment container'>
                    <div className="ui attached message">
                        <div className="header">
                            Welcome to WhiskerNation
                        </div>
                    <p>Fill out the form below to sign-up for a new account</p>
                    </div>
                    <form onSubmit={(e)=>handleSubmit(e)} className="ui form attached fluid segment">
                        <div className="equal width form fields">
                            <div className="required field">
                                <label>First Name</label>
                                <input required onChange={(e)=>setFirstname(e.target.value)} id='firstname' placeholder="First Name" type="text"/>
                            </div>
                            <div className="required field">
                                <label>Last Name</label>
                                <input required onChange={(e)=>setLastname(e.target.value)} id='lastname' placeholder="Last Name" type="text"/>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor='username'>Username</label>
                            <input  onChange={(e)=>setUsername(e.target.value)} placeholder={username} id='username' type="text"/>
                        </div>
                        <div className='equal width form fields'>
                            <div className='required field'>
                                <label htmlFor='email'>Email</label>
                                <input required  onChange={(e)=>setEmail(e.target.value)} id='email' placeholder="email" type="email"/>
                            </div>
                            <div className="required field">
                                <label htmlFor='password'>Password</label>
                                <input required onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
                                <Password password={password} minLength={0} scoreWords={['Short','Better','Almost','Nice','Powerful']} />
                            </div>
                        </div>
                        <div className="required field">
                                <div className="ui checkbox">
                                    <input required type="checkbox" onClick={()=>setTerms(true)} id="terms"/>
                                    <label htmlFor="terms">I agree to the <Link to='/'>terms and conditions</Link></label>
                                </div>
                        </div>
                        <div className="inline field">
                            <div className="ui checkbox">
                                <input type="checkbox" onClick={()=>setUpdates(true)} id="subscriptions"/>
                                <label htmlFor="subscription">I would like to receive mail updates</label>
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui checkbox">
                                <input type="checkbox" onClick={()=>setSurveys(true)} id="surveys"/>
                                <label htmlFor="subscription">I would like to revceive surveys occasionally</label>
                            </div>
                        </div>
                        <button className="ui blue submit button">Submit</button>
                    </form>
                    <div className="ui bottom attached warning message">
                        <i className="icon help"></i>
                        Already signed up? <Link to="/userLogin">Login here</Link> instead.
                    </div>            
                </div>
            </div>
        </>        
    )
}

export default SignUp