import React, { useEffect,useState } from 'react'
import '../slydeshowstyles.css'
import '../pages/sermons.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import NewCarousel from '../newCarousel'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import revdavid from '../pictures/revdavid.JPG'
import revremus from '../pictures/revremus.JPG'
import mamachristy from '../pictures/mamachristy.jpg'
import deacon_bright from '../pictures/deacon_bright.jpg'
import commander from '../pictures/commander.jpg'
import mama_vic from '../pictures/mama_vic.jpg'
import mamaenyo from '../pictures/mamaenyo.jpg'
import mrfrancis from '../pictures/mrfrancis.jpg'
import rev_jerome from '../pictures/rev_jerome.jpg'
import sirjerry from '../pictures/sirjerry.jpg'


function About () {
    const [aboutUs, setAboutUs] = useState([])


    useEffect(() =>{
        fetch('/others/about_us').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            console.log(data)
            setAboutUs(data)
        } )
    },[])


    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    


    

    return (
        <div >
            <NewCarousel className='carousel'/>
            <hr />

            <div className='row' style={{textAlign:'center'}}>
                {aboutUs.map((item,index)=>{
                    return(
                        <div data-aos='zoom-in-right' className='row'>
                            <div  className='about w-75 p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                                <Card key={index} className='Card' style={{ width: 'auto' }}>
                                    <Card.Body>
                                        <Card.Title style={{ color:'rgba(10, 7, 182, 0.863)', fontFamily:'sans-serif'}}>Brief History of the Church</Card.Title>
                                        <Card.Text style={{fontSize:'20px', color:'rgba(70, 68, 68, 0.986)', fontFamily:'sans-serif'}}> { item[5] }                                        
                                         { item[2] }                                        
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )
                })}
                
            </div>

            <br />

            <hr />
            
            <div data-aos='zoom-in-right' className='row '>
            <h5 className='pastors-heading'> Pastors </h5>
                <div className='pastors w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card className='Card' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={revdavid} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmail.com</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


                <div className='pastors w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev Remus Nyatsikor</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Associate Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='pastors w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mama Christiana Tsormanya</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Lay Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                
            </div>

            <hr />

            <div data-aos='zoom-in-right' className='row '>
                <h5 className='leaders-heading'> Church Leaders </h5>
                <div className='leaders w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '16rem' , }}>
                        <Card.Img variant="top" src={deacon_bright} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Dcn. Bright Akligo</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Church secretary <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                    <Card.Img variant="top" src={mama_vic} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Dcn. Victoria Adzimah</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Treasurer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Dcn. Divine Tsorlenyanu</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Vice Church secretary <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '16rem' , }}>
                        <Card.Img variant="top" src={revdavid} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Dcn. Mary Gomez</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Vice Treasurer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Dcn. Philip Akakposah</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Property Overseer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                
            </div>
            <br />
            <br />

            <hr />

            <div data-aos='zoom-in-right' className='row '>
                <h5 className='departments-heading'> Departmental Leaders </h5>
                <div className='departments w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={mrfrancis} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mr Francis Sodzi</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Men Ministry President <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamaenyo} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mrs Enyonam Dogbe</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                            Women Ministry President <br />
                             <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                             <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                         </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={commander} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mr Adams Atsu Attachey</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Youth Ministry President <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '16rem' , }}>
                        <Card.Img variant="top" src={sirjerry} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mr. Jerry Samson Demorto</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head Children Teacher <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev Remus Nyatsikor</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Choir Master <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={rev_jerome} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev Jerome Agbodjive</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Sunday School Superitendent <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mr Kwame</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head of Technical Team <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Mr Alfred Kpeglo</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head Usher <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                
                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head of Pulicity Team <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head Organizer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
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
                
                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{marginLeft:'10px'}}>
                    <Card style={{ width: '16rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'sans-serif'}}>
                                Head Security <br />
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

export default About