import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'
import {useNavigate} from 'react-router-dom'


function PostBooks(){
    
    const [post, setPost] = useState([])
    const [alertMessage, setAlertMessage] = useState('')
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }


    useEffect(() =>{
        const token1 = localStorage.getItem('jwt-item')
        fetch('https://prcwebsite.pythonanywhere.com/books',{
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
            console.log(data)
            setPost(data)
        } )
    },[])

    const handleDelete =(id)=>{
        alert('Are you sure you want to delete this post?')
        deletePost(id)
    }

    const deletePost =(id) =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch('https://prcwebsite.pythonanywhere.com/delete_book',{
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
            setAlertMessage(data)
          })
    }

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                <p style={{color : 'blue'}}>{ alertMessage }</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Time Posted</th>
                            <th>Posted By:</th>
                            <th>Topic/Title</th>
                            <th>Post Code</th>
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
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </Table>
            </div> 
        </div>
    )
}

export default PostBooks