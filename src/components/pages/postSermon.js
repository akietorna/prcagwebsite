import React, {useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postSermon.css'
import {useNavigate} from 'react-router-dom'



const PostSermon =() =>{
    
    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }

    const handleName =(event) =>{
        setName(event.target.value)
    }

    const handleTopic =(event) =>{
        setTopic(event.target.value)
    }

    let data = new FormData();
    let image_file;
    let audio_file;
    
    const handleImage =(event) =>{
        image_file = event.target.files[0];
        if (image_file != null){
            data.append('picture', image_file)
        }
    }

    const handleSermon =(event) =>{
        audio_file = event.target.files[0];
        if (audio_file != null){
            data.append('sermon', audio_file)
            data.append('name',name)
            data.append('topic',topic)
        }
    }

    const handleUpload = () =>{       
        const token2 = localStorage.getItem('jwt-token')
        fetch("/admin/add_sermon", {
            method:'POST',
            body:data,
            headers:{
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
              setTopic('')
          })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpload();
    }

    return (
        <div >

            <div className='row'>
                <div className='sermon-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Upload a message</h4>
                    <h6><strong>Take Note:</strong> The first file to choose is the image file of the sermon  </h6>
                    <form className='the-sermon-form' onSubmit={handleSubmit}>
                        <p style={{"color":"blue"}}>{alertMessage}</p>
                        
                        <input type="text" value={name} onChange={handleName} placeholder='Name'  required />
                        <br />

                        <input type='text' value={topic} onChange={handleTopic} placeholder='Topic/Title'  required/>
                        <br />

                        <input type='file' value={image_file} onChange={handleImage} placeholder='Message picture' required/>
                        <br />

                        <input type='file' value={audio_file} onChange={handleSermon} placeholder='Sermon audio' required/>
                        <br />

                        <input type='submit' className='submit'/>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default PostSermon