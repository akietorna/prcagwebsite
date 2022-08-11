import React, { useEffect, useState } from 'react'
import '../pages/forget_password.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { server } from '../server';

function ResetPassword(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }

    let navigate = useNavigate()


    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }


    const handleConfirmPassword = (event) =>{
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleResetPassword()
    }

    const authenticate = (alert) =>{
        if (alert === "Password successfully reset"){
            navigate("/admin/posts",{replace : true})
        };
    }


    const handleResetPassword = () =>{
        fetch(`${server}/admin/set_password`,{
            method : 'POST',
            body:JSON.stringify({
                username:username,
                password:password,
                confirm_password:confirmPassword
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds =>responds.json())
        .then(message =>{
            authenticate(message)
            setAlertMessage(message)
            setUsername('')
            setPassword('')
            setConfirmPassword('')
        })
    }


    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    return(
        <div>
            <div data-aos='slide-up' className='row'>
                <div className='container w-auto p-3  col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Card style={{textAlign:'center' }}>
                        <Card.Body >
                            <Card.Title style={{ color:'rgba(4, 4, 107, 0.911)', fontSize: 'auto', textDecoration:'underline'}}>Reset Password</Card.Title>
                            <Card.Text style={{fontSize:'auto', color:'rgba(95, 110, 243, 0.486)', fontFamily:'cursive'}}>
                                <small className='reset' >Please enter your new password</small>
                                <form className='reset-password' onSubmit={handleSubmit}>
                                    <p style={{"color":"red"}}> {alertMessage} </p>
                                    <input type='text' name='username' value={username} onChange={handleUsername} placeholder='Username' required />
                                    <br />
                                    <input type='text' name='password' value={password} onChange={handlePassword} placeholder='New password' required />
                                    <br />
                                    <input type='text' value={confirmPassword} onChange={handleConfirmPassword} placeholder='Confirm password' required />
                                    <br />
                                    <input type='submit' value='Update' className='update'/>

                                </form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}
export default ResetPassword