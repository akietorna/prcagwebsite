import React, { useEffect,useState } from 'react'
import '../slydeshowstyles.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import NewCarousel from '../newCarousel'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'



function Home (){
    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    const [upcoming, setUpcoming] = useState([])


    useEffect(() =>{
        fetch('https://prcwebsite.pythonanywhere.com/upcoming').then(response =>{
            if(response.ok){
                console.log('working')
                return response.json()
            }
        }).then(data => {
            setUpcoming(data)
        } )
    },[])

    return (
        <div >
            <NewCarousel className='carousel'/>
            <hr />

            <div data-aos='zoom-in-right' className='row'>
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

            <div  data-aos='zoom-in-right' className='row'>
                <h3   style={{ color:'rgba(4, 4, 107, 0.911)',textAlign:'center', fontSize: 'auto', textDecoration:'underline'}}>Upcoming Events</h3>
                <br />
                <br />
                <br />
                    {upcoming.map((item,index)=>{
                        return(
                            <div className='sermons w-auto p-3  col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            <Card key={index} className='Card' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item[4]} />
                                <Card.Body>
                                    <Card.Title style={{ color:'rgba(10, 7, 182, 0.863)', fontFamily:'sans-serif'}}>{item[2]}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        )
                    })}
                
            </div>
            
        </div>
    )
}

export default Home