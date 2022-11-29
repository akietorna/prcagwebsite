import React, { useEffect,useState } from 'react'
import '../pages/forget_password.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { server } from '../server';

function GetUserName(){

    const [username, setUsername] =  useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)


    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }

    let navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true)
        handlePost();
    }

    const authenticate =(alert) =>{
        if (alert === "username received"){
            navigate("/admin/forget_password", {replace:true})
        };
    }

    const handlePost = () =>{
        fetch(`${server}/admin/forget_password`, {
            method:"POST",
            mode: 'cors',
            body:JSON.stringify({
                username:username
            }),
            headers :{
                "Content-type" : "application/json; charset-UTF-8"
            }
        }).then(responds => responds.json())
          .then(message =>{
                authenticate(message)
                setAlertMessage(message)
                setUsername(' ')
                setLoading(false)
        })
    }


    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

    return(
        <div>
            <div data-aos='fade-in' className='row'>
                <div className='container w-auto p-3  col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <Card style={{textAlign:'center' }}>
                        <Card.Body >
                            <Card.Title style={{ color:'rgba(4, 4, 107, 0.911)', fontSize: 'auto', textDecoration:'underline'}}>User Confirmation</Card.Title>
                            <Card.Text style={{fontSize:'auto', color:'rgba(95, 110, 243, 0.486)', fontFamily:'cursive'}}>
                            <small>Enter your username for confirmation </small>
                            <p style={{'color':"red"}}> {alertMessage} </p>
                                <form className='confirm-code' onSubmit={handleSubmit}>
                                    <input type='text' value={username} onChange={handleUsername} placeholder='Username' required />
                                    <br />
                                    {loading ? <input type='submit' value='Loading.....' className='submit'/> : <input type='submit' value='Submit' className='submit'/>}
                                </form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
    
}
export default GetUserName