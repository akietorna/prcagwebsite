import React, { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postDevotional.css'



function PostDevotional (){

    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [passage, setPassage] = useState('')
    const [message, setMessage] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const handleName =(event) =>{
        setName(event.target.value)
    }

    const handleTopic =(event) =>{
        setTopic(event.target.value)
    }

    const handlePassage =(event) =>{
        setPassage(event.target.value)
    }

    const handleMessage =(event) =>{
        setMessage(event.target.value)
    }

    let data = new FormData();
    let file;

    const handleFile =(event) =>{
        file = event.target.files[0];
        if (file != null){
            data.append('picture', file)
            data.append('name',name)
            data.append('topic',topic)
            data.append('message',message)
            data.append('passage',passage)
            console.log('it was successful')
            console.log(data)
        }
    }

    const handleUpload = () =>{       

        fetch("/admin/add_devotional", {
            method:'POST',
            body:data
        }).then(responds =>responds.json())
          .then(message =>{
              setAlertMessage(message)
              setMessage('')
              setName('')
              setPassage('')
              setTopic('')
          })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpload();
    }

    return (
        <div>
           
            <div className='row'>
                <div className='devotional-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Upload Devotional</h4>
                    <h6><strong>Take Note:</strong> The first file to choose is the image file of the sermon  </h6>

                    <form className='the-devotional-form' onSubmit={handleSubmit}>
                        <p style={{"color":"blue"}}>{alertMessage}</p>
                        <input type="text" value={name} onChange={handleName} placeholder='Name' required />
                        <br />

                        <input type='text' value={topic} onChange={handleTopic} placeholder='Topic/Title' required/>
                        <br />

                        <input type='text' value={passage} onChange={handlePassage} placeholder='Passage' required/>
                       
                        <br />

                        <textarea value={message} onChange={handleMessage}  placeholder="Message"  required />

                        <br />

                        <input type='file' value={file} onChange={handleFile} placeholder='Message picture' required/>

                        <input type='submit' value='Upload' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PostDevotional