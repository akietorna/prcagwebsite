import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postSermon.css'



const PostHealth =() =>{
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello!, your responds has been successfuly recorded. We will work on them.")
    }

    return (
        <div >

            <div className='row'>
                <div className='sermon-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Upload a Health books</h4>
                    <h6><strong>Take Note:</strong> The first file to choose is the image file of the book  </h6>

                    <form className='the-sermon-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name'  required />
                        <br />

                        <input type='text' placeholder='Topic/Title'  required/>
                        <br />

                        <input type='file' placeholder='Message picture' required/>
                        <br />

                        <input type='file' placeholder='Sermon audio' required/>
                        <br />

                        <input type='submit' className='submit'/>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default PostHealth