import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'


function PostAnnouncement(){
    
    const [post, setPost] = useState([])
    const [alertMessage, setAlertMessage] = useState('')


    useEffect(() =>{
        fetch('/admin/post').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setPost(data)
        } )
    },[])

    const deletePost =(id) =>{
        fetch('/delete_announcement',{
            method:'POST',
            body:JSON.stringify({
                id : id
        }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }).then(responds => responds.json())
          .then(data =>{
            setAlertMessage(data)
          })
    }

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                <p style={{color:'blue'}}>{ alertMessage }</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Posted</th>
                            <th>Posted By:</th>
                            <th>Topic/Title</th>
                            <th>Post Code</th>
                            <th>Announcement</th>                        
                        </tr>
                    </thead>

                    <tbody>
                        {post.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td onClick={ () => deletePost(item[0]) }><MdIcons.MdDelete /></td>
                                    <td> {item[4]} </td>
                                    <td> {item[2]} </td>
                                    <td> {item[3]} </td>
                                    <td> {item[1]} </td>
                                    <td> {item[5]} </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </Table>
            </div> 
        </div>
    )
}

export default PostAnnouncement