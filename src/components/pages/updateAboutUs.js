import React,{useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postDevotional.css'
import {useNavigate} from 'react-router-dom'



function UpdateAboutUs () {

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    let Navigate = useNavigate()


    const handleName = (event)=>{
        setName(event.target.value)
    }


    const handleAbout = (event)=>{
        setAbout(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        handleLogIn();       
    }

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }


    const handleLogIn = () =>{
        const token = localStorage.getItem('jwt-token')
        fetch('https://prcwebsite.pythonanywhere.com/admin/add_about', {
            method:'POST',
            body:JSON.stringify({
                name: name,
                about: about
            }),
            headers:{
                "Content-type":"application/json",
                "Authorization": "Bearer "+ token
            }
        }).then(responds => {
            if (!responds.ok){
                alert('You must log in first!!!')
                return handleNavigate(true)
            }
            else {
                return responds.json()
            }
        })
          .then(message =>{
            setAlertMessage(message)
            setName('')
            setAbout('')
        })
    }



    return (
        <div>           
            <div className='row'>
                <div className='devotional-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Update About Us</h4>

                    <form className='the-devotional-form' onSubmit={handleSubmit}>
                        <p style={{color : "blue"}}> {alertMessage} </p>

                        <input type="text" value={name} onChange={handleName} placeholder='Writer' required />
                        <br />

                        <textarea value={about} onChange={handleAbout}  placeholder="About"  required />

                        <input type='submit' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default UpdateAboutUs