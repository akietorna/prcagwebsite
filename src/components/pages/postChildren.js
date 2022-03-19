import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import './postDevotional.css'



const PostChildren =() =>{

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello your responds has been successfuly recorded. We will work on them.")
    }

    return (
        <div>
           
            <div className='row'>
                <div className='devotional-form col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                    <h4>Upload Devotional</h4>
                    <h6><strong>Take Note:</strong> The first file to choose is the image file of the sermon  </h6>

                    <form className='the-devotional-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' required />
                        <br />

                        <input type='text' placeholder='Topic/Title' required/>
                        <br />

                        <textarea  placeholder="Announcement"  required />

                        <input type='submit' className='submit'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PostChildren