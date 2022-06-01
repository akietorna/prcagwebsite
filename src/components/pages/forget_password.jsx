import React, { useEffect } from 'react'
import '../pages/forget_password.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

function ForgetPassword(){
    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    return(
        <div>
            <div data-aos='slide-up' className='row'>
                <div className='container w-auto p-3  col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Card style={{textAlign:'center' }}>
                        <Card.Body >
                            <Card.Title style={{ color:'rgba(4, 4, 107, 0.911)', fontSize: 'auto', textDecoration:'underline'}}>User Confirmation</Card.Title>
                            <Card.Text style={{fontSize:'auto', color:'rgba(95, 110, 243, 0.486)', fontFamily:'cursive'}}>
                               <small>A Confirmation code was sent to your E-mail address. Please check and type it in the box provided below. </small>
                                <form className='confirm-code' >
                                    <input type='number' placeholder='Confirmation code here' required />
                                    <br />
                                    <input type='button' value='Submit' className='submit'/>
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