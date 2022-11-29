import React, { useEffect, useState } from 'react'
import '../pages/forget_password.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { server } from '../server';

function ForgetPassword(){

    const [confirmCode, setConfirmCode] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    const handleConfirmCode = (event) =>{
        setConfirmCode(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setLoading(true)
        handleCodeSend()
    }

    const authenticate = (alert) =>{
        if (alert === "verification successful"){
            navigate("/admin/reset_password",{replace : true})
        };
    }


    const handleCodeSend = () =>{
        fetch(`${server}/admin/confirmation_code`, {
            method : 'POST',
            mode: 'cors',
            body:JSON.stringify({
                confirm_code : confirmCode
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds => responds.json())
          .then(message =>{
            authenticate(message)
            setAlertMessage(message)
            setConfirmCode('')
            setLoading(false)
          })
    }

    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    return(
        <div>
            <div data-aos='fade-in' className='row'>
                <div className='container w-auto p-3  col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Card style={{textAlign:'center' }}>
                        <Card.Body >
                            <Card.Title style={{ color:'rgba(4, 4, 107, 0.911)', fontSize: 'auto', textDecoration:'underline'}}>User Confirmation</Card.Title>
                            <Card.Text style={{fontSize:'auto', color:'rgba(95, 110, 243, 0.486)', fontFamily:'cursive'}}>
                               <small>A Confirmation code was sent to your E-mail address. Please check and type it in the box provided below. </small>
                               <p style={{'color':'red'}}>{alertMessage}</p>
                                <form className='confirm-code' onSubmit={ handleSubmit } >
                                    
                                    <input type='text' value={confirmCode} onChange={handleConfirmCode} placeholder='Confirmation code here' required />
                                    <br />
                                    {loading ? <input type='submit' value='Loading.....' className='submit'/> : <input type='submit' value='Submit' className='submit'/>}
                                </form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}
export default ForgetPassword