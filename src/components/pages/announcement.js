import React, {useEffect} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import homepics1 from '../pictures/homepics1.jpg'
import homepics2 from '../pictures/homepics2.jpg'
import homepics3 from '../pictures/homepics3.jpg'
import homepics4 from '../pictures/homepics4.jpg'
import homepics5 from '../pictures/homepics5.jpg'
import '../typping.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Announcement =() =>{

            useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    const welcomeMessage = ['Worship with us on Wednesdays,Fridays @ 6:30 pm and Sundays @ 7am','We are found Opposite The ECG Office, Aflao on the Diamond Cement Road', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];
        
    
    return(
            <>
                <div className='announcement'>
                    <div className='col-12' >
                        <Carousel interval={5000}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics1}
                                alt="item-one"
                                />
                                <Carousel.Caption data-aos='slide-up' className='typping' >
                                    <h3>{welcomeMessage[0]}</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics2}
                                alt="item-two"
                                />
    
                                <Carousel.Caption data-aos='slide-up' className='typping' >
                                    <h3>{welcomeMessage[1]}</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics3}
                                alt="item-three"
                                />
    
                                <Carousel.Caption data-aos='slide-up' className='typping' >
                                    <h3>{welcomeMessage[2]}</h3>
                                    
                                </Carousel.Caption>

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics4}
                                alt="item-four"
                                />
    
                                <Carousel.Caption data-aos='slide-up' className='typping' >
                                    <h3>{welcomeMessage[3]}</h3>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={homepics5}
                                alt="item-five"
                                />
    
                                <Carousel.Caption data-aos='slide-up' className='typping' >
                                    <h3>{welcomeMessage[4]}</h3>
                                    
                                </Carousel.Caption>
                    
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                

            </>
                

    )
}

export default Announcement