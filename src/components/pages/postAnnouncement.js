import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'
import { useNavigate } from 'react-router-dom'
import { server } from '../server'


function PostAnnouncement(){
    
    
    const [post, setPost] = useState([])
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }

    const handleDelete =(id)=>{
        alert('Are you sure you want to delete this post?')
        deletePost(id)
    }


    useEffect(() =>{
        const token1 = localStorage.getItem('jwt-token')
        fetch(`${server}/admin/post`,{
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + token1
            }
        }).then(response =>{
            if(!response.ok){
                alert('You must log in first!!!!')
                return handleNavigate(true)
            }
            else {
                return response.json()
            }
        }).then(data => {
            setPost(data)
        } )
    },[])


    const deletePost =(id) =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch(`${server}/delete_announcement`,{
            method:'POST',
            body:JSON.stringify({
                id : id
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
          .then(data =>{
            alert(data)
          })
    }

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
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
                                    <td onClick={ () => handleDelete(item[0]) }><MdIcons.MdDelete /></td>
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