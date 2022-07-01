import React,{useEffect,useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import "./sermons.css"
import './prayer_request.css'
import {Carousel} from 'react-bootstrap'
import prayerpics2 from '../pictures/prayerpics2.JPG'
import prayerpics3 from '../pictures/prayerpics3.JPG'


function ChristianLife () {
    const [book, setBook] = useState([])


    useEffect(() =>{
        fetch('/christian_life').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setBook(data)
            // console.log()
        } )
    },[])

    const download = (path) =>{
        fetch('/download_book',{
            method: 'POST',
            body: JSON.stringify({
                path:path
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(responds =>responds.json())
    }


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
                {book.map((item, index) =>{
                    return(
                        <div className='sermons w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <Card key={index} className='Card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item[6]} />
                                <Card.Body>
                                    <Card.Title style={{ color:'rgba(10, 7, 182, 0.863)',textAlign:'left',fontWeight:'450', fontFamily:'sans-serif'}}>{item[3]}</Card.Title>
                                    <Card.Text style={{fontSize:'20px', color:'rgba(70, 68, 68, 0.986)', fontFamily:'cursive'}}>
                                        <h6 className='signature'>By: {item[2]} </h6>
                                        <p onClick={() => download(item[5]) } style = {{color:'blue',fontSize:'18px',cursor:'pointer', textAlign:'left', textDecoration:'underline'}}> Download here ... </p>
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

export default ChristianLife