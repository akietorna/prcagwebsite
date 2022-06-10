import React, {useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import '../signin.css'
import theside from '../pictures/theside.jpg'
import { Link,useNavigate } from 'react-router-dom'


function LogIn(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    let Navigate = useNavigate()

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleUsername = (event)=>{
        setUsername(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleLogIn();       
    }

    const authenticate = (alert) =>{
        if (alert === "Log in successfully"){
            Navigate("/admin/posts",{replace : true})
        };
    }

    const handleLogIn = () =>{
        fetch('/admin', {
            method:'POST',
            body:JSON.stringify({
                username:username,
                password:password,
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds =>responds.json())
          .then(message =>{
            authenticate(message)
            setAlertMessage(message)
            setPassword('')
            setUsername('')
        })
    }


    return(
        <div className='side-image-container' >
            <div className='row'>
                <div className='side-image col-lg-6 col-md-6 col-sm-12 col-xs-12' >
                    <img src={theside} alt='the-side' />
                </div>

                <div className='sign-in-form-container col-lg-6 col-md-6 col-sm-12 col-xs-12'>

                    <form className='sign-in-form' onSubmit={handleSubmit} >
                        <p style={{"color":"red"}}> {alertMessage} </p>
                        <input name='username' value={username} onChange={handleUsername} type="text" placeholder='Username'  required />
                        <br />

                        <input name='password' value={password} onChange={handlePassword} type='password' placeholder='Password'  required/>
                        <br />

                        <Link to='/admin/get_username' className='forgot-password'>forgot password?</Link>

                        <input type='submit' value='Log In' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
        
    )
}


export default LogIn