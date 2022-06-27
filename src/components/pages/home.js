import React, { useEffect } from 'react'
import '../slydeshowstyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import NewCarousel from '../newCarousel'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import mamachristy from '../pictures/mamachristy.jpg'



function Home (){
    useEffect(() =>{
        Aos.init({duration:1000});
    },[])
    return (
        <div >
            <NewCarousel className='carousel'/>
            <hr />

            <div data-aos='slide-up' className='row'>
                <div className='container w-auto p-3  col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Card style={{textAlign:'center' }}>
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(4, 4, 107, 0.911)', fontSize: 'auto', textDecoration:'underline'}}>Weekly Activity</Card.Title>
                            <Card.Text style={{fontSize:'auto', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Monday: Departmental meeting @ 6:00pm <br />
                                Wednesday: Bible Studies @ 6:00pm<br />
                                Friday: <br />
                                Morning: Tarrying @ 9:00am <br />
                                Evening: Prayers @ 6:00pm <br />
                                Sunday: First Service @ 7:00am, Second Service @ 10:00am
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>


            <hr />

            <div  className='row'>
                <h3   style={{ color:'rgba(4, 4, 107, 0.911)',textAlign:'center', fontSize: 'auto', textDecoration:'underline'}}>Upcoming Events</h3>
                <br />
                <br />
                <br />
                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <Card style={{ width: '22rem'}}>
                            <Card.Img variant="top" src={mamachristy} />
                            <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mrs Matilda Etoo</Card.Title>
                                <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                    Head Decorator <br />
                                    <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                    <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>

            
        </div>
    )
}

export default Home