import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import theside from '../components/pictures/theside.jpg'
import { Link } from 'react-router-dom'

function LogIn(){
    return(
        <div className='side-image-container' >
            <div className='row'>
                <div className='side-image col-lg-6 col-md-6 col-sm-12 col-xs-12' >
                    <img src={theside} alt='the-side' />
                </div>

                <div className='sign-in-form-container col-lg-6 col-md-6 col-sm-12 col-xs-12'>

                    <form className='sign-in-form' >
                        <input name='username' type="text" placeholder='Username'  required />
                        <br />

                        <input name='password' type='password' placeholder='Password'  required/>
                        <br />

                        <Link to="/admin/forget_password" className='forgot-password'>forgot password?</Link>

                        <input type='button' value='Log In' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
        
    )
}


export default LogIn