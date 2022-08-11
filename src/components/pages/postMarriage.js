import React,{useState} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postSermon.css'
import {useNavigate} from 'react-router-dom'
import { server } from '../server'



function PostMarriage () {
    
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
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

    const handleAuthor =(event) =>{
        setAuthor(event.target.value)
    }

    const handleTopic =(event) =>{
        setTopic(event.target.value)
    }

    let data = new FormData();
    let image_file;
    let pdf_file;
    
    const handleImage =(event) =>{
        image_file = event.target.files[0];
        if (image_file != null){
            data.append('pictures', image_file)
        }
    }

    const handlePdf =(event) =>{
        pdf_file = event.target.files[0];
        if (pdf_file != null){
            data.append('book', pdf_file)
            data.append('name',name)
            data.append('author',author)
            data.append('topic',topic)
            data.append('dept_code','MAR')
        }
    }

    const handleUpload = () =>{       
        const token2 =localStorage.getItem('jwt-token')
        fetch(`${server}/admin/add_book`, {
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
              setAuthor('')
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
                    <h4>Upload a Marriage and Relationship book</h4>
                    <h6><strong>Take Note:</strong> The first file to choose is the image file of the book </h6>


                    <form className='the-sermon-form' onSubmit={handleSubmit}>
                        <p style={{"color":"blue"}}>{alertMessage}</p>
                        <input type="text" value={name} onChange={handleName} placeholder='Name'  required />
                        <br />
                        <input type="text" value={author} onChange={handleAuthor} placeholder=" Author's Name"  required />
                        <br />

                        <input type='text' value={topic} onChange={handleTopic} placeholder='Topic/Title'  required/>
                        <br />

                        <input type='file' value={image_file} onChange={handleImage} placeholder='Book cover page' required/>
                        <br />

                        <input type='file' value={pdf_file} onChange={handlePdf} placeholder='PDF here' required/>
                        <br />

                        <input type='submit' className='submit'/>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default PostMarriage