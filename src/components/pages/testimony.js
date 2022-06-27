import React , {useState, useEffect} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './prayer_request.css'
import {Carousel} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import "./sermons.css"
import prayerpics2 from '../pictures/prayerpics2.JPG'
import prayerpics3 from '../pictures/prayerpics3.JPG'

const Testimony =() =>{


    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [testimony, setTestimony] = useState('')
    const [alertMessage, setAlertMessage] = useState('')


    const handleName = (event)=>{
        setName(event.target.value)
    }

    const handlePhoneNumber = (event)=>{
        setPhoneNumber(event.target.value)
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleTestimony = (event)=>{
        setTestimony(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleLogIn();       
    }


    const handleLogIn = () =>{
        fetch('/add_testimony', {
            method:'POST',
            body:JSON.stringify({
                name:name,
                phone_number:phoneNumber,
                email:email,
                testimony:testimony,
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds =>responds.json())
          .then(message =>{
            setAlertMessage(message)
            setName('')
            setPhoneNumber('')
            setEmail('')
            setTestimony('')
        })
    }


    const [readTestimony, setReadTestimony] = useState([])


    useEffect(() =>{
        fetch('/admin/testimony').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setReadTestimony(data)
        } )
    },[])
    

    
    return (
        <div>
            <div className='row'>
                <div className='praying col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Carousel duration={4000}>
                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics2} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>A testifying heart is a heart that affirms God's goodness. Its answers are always perfect</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics3} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>And they overcame by their testimony</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='row'>
                <div className='prayer-form col-lg-6 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Send your Testimony</h4>
                    <h6>Please fill the form below with the necessary information.</h6>


                    <form className='the-prayer-form' onSubmit={handleSubmit}>
                        <p style={{color:'blue'}}> {alertMessage} </p>

                        <input type="text" value={name} onChange={handleName} placeholder='Full name (firstname first)' required />
                        <br />

                        <input type='text' value={phoneNumber} onChange={handlePhoneNumber} placeholder='Phone Number' required/>
                        <br />

                        <input type='email' value={email} onChange={handleEmail} placeholder='Email' required/>
                        <br />

                        <textarea value={testimony} onChange={handleTestimony} placeholder="Testimony"  required />

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

                    <h4 className='prayer-line'>Testimony Line</h4>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <h6 className='prayer-line'>(+233)244 000 000</h6>
                    <br />

                    <h4 className='email'>E-mail:</h4>
                    <h6> pentecostalrevivalcenter@gmail.com </h6>


                </div>
            </div>

            <hr />

            <br />


            <div className='row'>
                {readTestimony.map((item, index) =>{ 
                    return(
                        <div className='sermons w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>                                                            
                            <Card key={index} className='Card' style={{ width: '18rem' }}>
                                <Card.Body id={item[0]}>
                                    <Card.Title style={{ color:'rgba(10, 7, 182, 0.863)',fontWeight:'800', fontSize:'24px', fontFamily:'Times New Romans'}}>{item[5]}</Card.Title>
                                    <Card.Text style={{fontSize:'15px', color:'rgba(70, 68, 68, 0.986)', fontFamily:'Times New Romans'}}>
                                        {item[4]}
                                        <h6 className='signature'>By: {item[1]}</h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                                
                        
                        </div>
                    )})}
            </div>  
        


        </div>
    )
}

export default Testimony