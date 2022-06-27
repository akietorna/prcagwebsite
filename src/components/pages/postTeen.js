import React,{useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postDevotional.css'



function PostTeen () {

    const postCode = "TEE"
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [announcement, setAnnouncement] = useState('')
    const [alertMessage, setAlertMessage] = useState('')


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
        handleLogIn();       
    }


    const handleLogIn = () =>{
        fetch('/admin/add_announcement', {
            method:'POST',
            body:JSON.stringify({
                sender: name,
                post_code: postCode,
                title: title,
                announcement: announcement,
            }),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds =>responds.json())
          .then(message =>{
            setAlertMessage(message)
            setName('')
            setTitle('')
            setAnnouncement('')
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

                        <input type='submit' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PostTeen