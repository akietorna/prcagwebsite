import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './prayer_request.css'
import {Carousel} from 'react-bootstrap'
import prayerpics2 from '../pictures/prayerpics2.JPG'
import prayerpics3 from '../pictures/prayerpics3.JPG'



const PrayerRequest =() =>{
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello!, your responds has been successfuly recorded. We will work on them.")
    }

    return (
        <div>
            <div className='row'>
                <div className='praying col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Carousel duration={4000}>
                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics2} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>Prayer enlarges the heart until it is capable of containing God's gift of himself</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics3} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>Prayer enlarges the heart until it is capable of containing God's gift of himself</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='row'>
                <div className='prayer-form col-lg-6 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Send your Prayer Request</h4>
                    <h6>Please fill the form below with the necessary information.</h6>


                    <form className='the-prayer-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Full name (firstname first)'  required />
                        <br />

                        <input type='number' placeholder='Phone Number'  required/>
                        <br />

                        <input type='email' placeholder='Email' />
                        <br />

                        <textarea  placeholder="Prayer Request"  required />

                        <input type='submit' className='submit'/>
                    </form>
                </div>

                <div className='contact col-lg-6 col-md-12 col-sm-12 col-xs-12'>

                    <h4 className='post-box'>Post Office Address:</h4>
                    <h6 className='postal-address'>Pentecostal Revival Center AG, <br />
                        P.O. Box 71, Aflao, <br />
                        Volta Region, <br />
                        Ghana.
                            </h6>
                
                    <br />

                    <h4 className='prayer-line'>Prayer Lines:</h4>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <br />

                    <h4 className='email'>E-mail:</h4>
                    <h6> pentecostalrevivalcenter@gmail.com </h6>


                </div>
            </div>
        </div>
    )
}

export default PrayerRequest