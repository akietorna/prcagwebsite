import React, { useEffect } from 'react'
import '../slydeshowstyles.css'
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
                            <Card.Text style={{fontSize:'auto', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
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
            
            <div data-aos='fade-up' className='row '>
            <h5 className='pastors-heading'> Pastors </h5>
                <div className='pastors w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={revdavid} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmail.com</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


                <div className='pastors w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev Remus Nyatsikor</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Associate Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='pastors w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mama Christiana Tsormanya</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Lay Pastor <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                
            </div>

            <hr />

            <div data-aos='slide-up' className='row '>
                <h5 className='leaders-heading'> Church Leaders </h5>
                <div className='leaders w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem' , }}>
                        <Card.Img variant="top" src={deacon_bright} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Dcn. Bright Akligo</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Church secretary <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                    <Card.Img variant="top" src={mama_vic} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Dcn. Victoria Adzimah</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Treasurer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                        
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Dcn. Divine Tsorlenyanu</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Vice Church secretary <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem' , }}>
                        <Card.Img variant="top" src={revdavid} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Dcn. Mary Gomez</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Vice Treasurer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='leaders w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Dcn. Philip Akakposah</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Property Overseer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                
            </div>

            <hr />

            <div data-aos='slide-up' className='row '>
                <h5 className='departments-heading'> Departmental Leaders </h5>
                <div className='departments w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem' , }}>
                        <Card.Img variant="top" src={mrfrancis} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mr Francis Sodzi</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Men Ministry President <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamaenyo} />
                        <Card.Body>
                            <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mrs Enyonam Dogbe</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                            Woen Ministry President <br />
                             <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                             <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                         </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={commander} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mr Adams Atsu Attachey</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Youth Ministry President <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem' , }}>
                        <Card.Img variant="top" src={sirjerry} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mr. Jerry Samson Demorto</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head Children Teacher <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={revremus} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev Remus Nyatsikor</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Choir Master <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={rev_jerome} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev Jerome Agbodjive</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Sunday School Superitendent <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mr Kwame</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head of Technical Team <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mr Alfred Kpeglo</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head Usher <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                
                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head of Pulicity Team <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head Organizer <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Mrs Matilda Etoo</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
                                Head Decorator <br />
                                <Card.Link href='#' style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>(00233) 240 000 000</Card.Link> <br />
                                <Card.Link href='#'style={{textDecoration:'none',fontSize:'16px', color:'rgb(14, 14, 124)' }}>akitestapps@gmsil.com</Card.Link>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                
                <div className='departments w-auto p-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                    <Card style={{ width: '18rem'  }}>
                        <Card.Img variant="top" src={mamachristy} />
                        <Card.Body>
                        <Card.Title style={{ color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>Rev David Kporha</Card.Title>
                            <Card.Text style={{fontSize:'20px', color:'rgba(170, 12, 99, 0.87)', fontFamily:'cursive'}}>
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

export default Home