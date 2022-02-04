import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import homepics1 from '../pictures/homepics1.jpg'
import homepics2 from '../pictures/homepics2.jpg'
import homepics3 from '../pictures/homepics3.jpg'
import homepics4 from '../pictures/homepics4.jpg'
import homepics5 from '../pictures/homepics5.jpg'

function NewCarousel (){
    
    return(
        <Carousel >
            <Carousel.Item>
                <img
                className="image-one"
                src={homepics1}
                alt="item-one"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-two"
                src={homepics2}
                alt="item-two"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-three"
                src={homepics3}
                alt="item-three"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-four"
                src={homepics4}
                alt="item-three"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image-five"
                src={homepics5}
                alt="item-five"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


export default NewCarousel