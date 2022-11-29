import React,{useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postDevotional.css'
import {useNavigate} from 'react-router-dom'
import { server } from '../server'



function PostTeen () {

    const postCode = "TEE"
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [announcement, setAnnouncement] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }


    const handleName = (event)=>{
        setName(event.target.value)
    }

    const handleTitle = (event)=>{
        setTitle(event.target.value)
    }

    const handleAnnouncement = (event)=>{
        setAnnouncement(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true)
        handleLogIn();       
    }


    const handleLogIn = () =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch(`${server}/admin/add_announcement` , {
            method:'POST',
            mode: 'cors',
            body:JSON.stringify({
                sender: name,
                post_code: postCode,
                title: title,
                announcement: announcement,
            }),
            headers:{
                "Content-type":"application/json",
                "Authorization": "Bearer "+ token2
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
            setTitle('')
            setAnnouncement('')
            setLoading(false)
        })
    }



    return (
        <div>           
            <div className='row'>
                <div className='devotional-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Upload Teen Announcement</h4>

                    <form className='the-devotional-form' onSubmit={handleSubmit}>
                        <p style={{color : "blue"}}> {alertMessage} </p>

                        <input type="text" value={name} onChange={handleName} placeholder='Name' required />
                        <br />

                        <input type='text' value={title} onChange={handleTitle} placeholder='Topic/Title' required/>
                        <br />

                        <textarea value={announcement} onChange={handleAnnouncement}  placeholder="Announcement"  required />

                        {loading ? <input type='submit' value='Loading.....' className='submit'/> : <input type='submit' className='submit'/>}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PostTeen