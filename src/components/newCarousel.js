import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import homepics1 from '../pictures/homepics1.jpg'
import homepics2 from '../pictures/homepics2.jpg'
import homepics3 from '../pictures/homepics3.jpg'
import homepics4 from '../pictures/homepics4.jpg'
import homepics5 from '../pictures/homepics5.jpg'
import Typewriter from 'typewriter-effect'
import './typping.css'

class NewCarousel extends React.Component{
    
    render(){

    const welcomeMessage = ['Worship with us on Wednesdays,Fridays @ 6:30 pm and Sundays @ 7am','We are found Opposite The ECG Office, Aflao on the Diamond Cement Road', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];
        
    
    return(
            <>
                <div className='row'>
                    <div className='col-12' >
                        <Carousel interval={5000}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics1}
                                alt="item-one"
                                />
                                <Carousel.Caption  className='typping' >
                                    <Typewriter
                                        options={
                                            {
                                                strings:welcomeMessage[0],
                                                autoStart:true,
                                                loop:true,
                                                skipAddStyles:false,
                                            }
                                        }
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics2}
                                alt="item-two"
                                />
    
                                <Carousel.Caption className='typping' >
                                    <Typewriter
                                        options={
                                            {
                                                strings:welcomeMessage[1],
                                                autoStart:true,
                                                loop:true,
                                            }
                                        }
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics3}
                                alt="item-three"
                                />
    
                                <Carousel.Caption className='typping' >
                                    <Typewriter
                                        options={
                                            {
                                                strings:welcomeMessage[2],
                                                autoStart:true,
                                                loop:true,
                                                duration:4000,
                                            }
                                        }
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics4}
                                alt="item-three"
                                />
    
                                <Carousel.Caption className='typping' >
                                    <Typewriter 
                                        options={
                                            {
                                                strings:welcomeMessage[3],
                                                autoStart:true,
                                                loop:true,
                                            }
                                        }
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics5}
                                alt="item-five"
                                />
    
                                <Carousel.Caption className='typping' >
                                    <Typewriter 
                                        options={
                                            {
                                                strings:welcomeMessage[4],
                                                autoStart:true,
                                                loop:true,
                                            }
                                        }
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>


            </>
                
        )
    }
}


export default NewCarousel