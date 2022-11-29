import React,{useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './prayer_request.css'
import {Carousel} from 'react-bootstrap'
import prayerpics2 from '../pictures/prayerpics2.JPG'
import prayerpics3 from '../pictures/prayerpics3.JPG'
import { server } from '../server'
import { Link } from 'react-router-dom'


const Comments =() =>{
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [loading, setloading] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    

    const handleName = (event)=>{
        setName(event.target.value)
    }


    const handleComment = (event)=>{
        setComment(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setloading(true)
        handleLogIn();       
    }


    const handleLogIn = () =>{
        fetch(`${server}/add_comment`, {
            method:'POST',
            mode: 'cors',
            body:JSON.stringify({
                name:name,
                comment:comment,
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(responds =>  responds.json())
          .then(message =>{
            setAlertMessage(message)
            setName('')
            setComment('')
            setloading(false)
        })
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
                        <p style={{color:'blue'}} > {alertMessage} </p>
                        <input type='text' value={name} onChange={handleName} placeholder='Name' required/>
                        <br />

                        <textarea value={comment} onChange={handleComment}  placeholder="Comment"  required />

                        {loading ? <input type='submit' value='Loading.....' className='submit'/> : <input type='submit' className='submit'/>}
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

                    <h4 className='prayer-line'>Church Contacts</h4>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <br />

                    <h4 className='email'>E-mail:</h4>
                    <h6> <Link>pentecostalrevivalcenter@gmail.com</Link> </h6>


                </div>
            </div>
        </div>
    )
}

export default Comments