import React, {useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import '../signin.css'
import theside from '../pictures/theside.jpg'
import { Link,useNavigate } from 'react-router-dom'
import { server } from '../server'


function LogIn(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)

    let Navigate = useNavigate()

    const handlePassword = (event)=>{
        setPassword(event.target.value)
    }

    const handleUsername = (event)=>{
        setUsername(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true);
        handleLogIn();       
    }


    const authenticate = (alert) =>{
        if (alert === true){
            Navigate("/admin/posts",{replace : true})
        };
    }

    const handleLogIn = () =>{
        fetch(`${server}/admin`, {
            method:'POST',
            mode: 'cors',
            body:JSON.stringify({
                username:username,
                password:password,
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds =>{
            if (responds.ok){
                return responds.json()
            }
        })
          .then(message =>{
            if (message === 'Invalid Credentials, Try again'){
                setAlertMessage(message)
            }
            else{
                authenticate(true)
                localStorage.setItem("jwt-token", message['token'])
            }
            
            setPassword('')
            setUsername('')
            setLoading(false)
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
                        <p style={{"color":"blue"}}> {alertMessage} </p>
                        <input name='username' value={username} onChange={handleUsername} type="text" placeholder='Username'  required />
                        <br />

                        <input name='password' value={password} onChange={handlePassword} type='password' placeholder='Password'  required/>
                        <br />

                        <Link to='/admin/get_username' className='forgot-password'>forgot password?</Link>

                        {loading ? <input type='submit' value='Loading.....' className='submit'/>: <input type='submit' value='Log In' className='submit'/> }
                    </form>
                </div>

            </div>
        </div>
        
    )
}


export default LogIn