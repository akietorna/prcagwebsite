import React, { useEffect } from 'react'
import '../pages/forget_password.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

function ResetPassword(){
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
                                <small className='reset'>Please enter your new password</small>
                                <form className='reset-password' >
                                    <input type='text' name='username' placeholder='Username' required />
                                    <br />
                                    <input type='email' name='email' placeholder='Username' required />
                                    <br />
                                    <input type='text' name='password' placeholder='New password' required />
                                    <br />
                                    <input type='text' placeholder='Confirm password' required />
                                    <br />
                                    <input type='button' value='Update' className='update'/>

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