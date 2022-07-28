import React, {useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'
import {useNavigate} from 'react-router-dom'


function ReadTestimony(){
    
    const [testimony, setTestimony] = useState([])
    const [alertMessage, setAlertMessage] = useState('')
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }


    useEffect(() =>{
        fetch('https://prcwebsite.pythonanywhere.com/admin/testimony').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setTestimony(data)
        } )
    },[])

    const handleDelete =(id)=>{
        alert('Are you sure you want to delete this post?')  
        deletePost(id)       
    }
    

    const deletePost =(id) =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch('https://prcwebsite.pythonanywhere.com/delete_posts',{
            method : 'POST',
            body: JSON.stringify({
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
          .then(data => {
            setAlertMessage(data)
            console.log(id)
          })
    }


    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
            <p style={{color:'blue'}}>{ alertMessage }</p>
                <Table striped bordered hover>
                    <thead>
                        <th></th>
                        <th>Post ID</th>
                        <th>Topic/Title</th>
                        <th>Posted By:</th>
                        <th>Time Posted</th>
                    </thead>

                    <tbody>
                        {testimony.map((item,index) =>{
                            return(
                                <tr key={index}>
                                    <td onClick={() => handleDelete(item[0]) }  ><MdIcons.MdDelete /></td>
                                    <td> {item[0]} </td>
                                    <td> {item[3]} </td>
                                    <td> {item[4]} </td>
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

export default ReadTestimony