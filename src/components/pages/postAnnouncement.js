import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'


function PostAnnouncement(){
    
    const [post, setPost] = useState([])


    useEffect(() =>{
        fetch('/admin/post').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setPost(data)
        } )
    },[])

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                <Table striped bordered hover>
                    <thead>
                        <th></th>
                        <th>Time Posted</th>
                        <th>Posted By:</th>
                        <th>Topic/Title</th>
                        <th>Post Code</th>
                        <th>Announcement</th>                        
                        <th></th>
                        
                    </thead>

                    <tbody>
                        {post.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td id={item[0]}><MdIcons.MdDelete /></td>
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