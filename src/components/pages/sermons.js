import React, {useState,useEffect} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import "./sermons.css"
import './prayer_request.css'
import {Carousel} from 'react-bootstrap'
import prayerpics2 from '../pictures/prayerpics2.JPG'
import prayerpics3 from '../pictures/prayerpics3.JPG'
import ReactAudioPlayer from 'react-audio-player'



function Sermons() {

    const [sermon, setSermon] = useState([])


    useEffect(() =>{
        fetch('https://prcwebsite.pythonanywhere.com/sermon').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setSermon(data)
            // console.log()
        } )
    },[])


    return(
        <div>
            <div className='row'>
                <div className='praying col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Carousel duration={4000}>
                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics2} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>This book of the law should not depart from your mouth
                                </h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img height={250} className='d-block w-100' src={prayerpics3} alt='item-one' />
                            <Carousel.Caption className='type'>
                                <h5>Meditate on it daily and your way shall be prosperous</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <hr/>

            <div className='row'>
                {sermon.map((item, index) =>{
                    return(
                        <div className='sermons w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <Card key={index} className='Card' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src={item[5]} />
                                <Card.Body>
                                    <Card.Title style={{ color:'rgba(10, 7, 182, 0.863)', fontFamily:'cursive'}}>{item[2]}</Card.Title>
                                    <Card.Text style={{fontSize:'20px', color:'rgba(70, 68, 68, 0.986)', fontFamily:'cursive'}}>
                                    <ReactAudioPlayer src={item[4]}  controls volume={1}/>
                                    <h6 className='signature'>By: {item[1]} </h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Sermons;