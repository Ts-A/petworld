import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'
import Axios from 'axios'
import $ from 'jquery'

const Login = ()=>{
    const {dispatch} = useContext(userContext)
    const H = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        Axios.post('/user/login',{
            email,
            password
        }).then(res=>
            {
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data.user))
                dispatch({type:'ADD_USER',value:res.data.user})
                H.push('/userDashboard')
            })
        .catch(e=>console.log(e.response.data.error))
        $('#email').val('')
        $('#password').val('')
        setEmail('')
        setPassword('')
    }
    return(
        <>
            <div className="ui segment">
                <div className="ui container navbar">
                    <nav className="ui four item stackable huge pointing menu">
                        <span className="item" onClick={()=>{H.goBack()}}><i className='ui angle double left icon'></i></span>
                        <Link to='/' className="item">Icon</Link>
                        <Link to='/userSignUp' className='item'>SignUp</Link>
                        <Link to='/userLogin' className='active item'>Login</Link>
                    </nav>
                </div>       
                <div className='ui raised segment container'>
                    <div className="ui attached message">
                        <div className="header">
                            Welcome to WhiskerNation
                        </div>
                    <p>Enter your credentials or <Link to="/userSignUp">SignUp</Link> instead?</p>
                    </div>
                    <form onSubmit={(e)=>handleSubmit(e)} className="ui form attached fluid segment">
                        <div className='equal width form fields'>
                            <div className='required field'>
                                <label htmlFor='email'>Email</label>
                                <input required  onChange={(e)=>setEmail(e.target.value)} id='email' placeholder="email" type="email"/>
                            </div>
                            <div className="required field">
                                <label htmlFor='password'>Password</label>
                                <input required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id='password' />
                            </div>
                        </div>
                        <button className="ui blue submit button">Submit</button>
                    </form>
                    <div className="ui bottom attached warning message">
                        <i className="icon help"></i>
                        Forgot your credentials: <Link to="/userLogin">Reset Password</Link>               
                    </div>            
                </div>
            </div>
        </>        
    )
}

export default Login