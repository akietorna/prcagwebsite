import React, {useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import './postSermon.css'
import {useNavigate} from 'react-router-dom'
import { server } from '../server'

function ReadPrayerRequest(){
    const [prayer, setPrayer] = useState([])
    const [alertMessage, setAlertMessage] = useState('')
    let Navigate = useNavigate()

    const handleNavigate = (item) =>{
        if (item === true){
            Navigate('/admin',{replace:true})
        }
    }


    useEffect(() =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch(`${server}/admin/prayer_request`,{
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + token2
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
            setPrayer(data)
        } )
    },[])


    const handleDelete =(id)=>{
        alert('Are you sure you want to delete this post?') 
        deletePost(id)       
    }
    

    const deletePost =(id) =>{
        const token2 = localStorage.getItem('jwt-token')
        fetch(`${server}/delete_prayer_request`,{
            method : 'POST',
            mode: 'cors',
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
          })
    }



    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
            <p style={{color:'blue'}}>{ alertMessage }</p>
                <Table striped bordered hover >
                    <thead>
                        <th></th>
                        <th>Post Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Prayer Request</th>
                        <th>Time Sent</th>
                        <th>Phone_number</th>
                    </thead>

                    <tbody>
                        {prayer.map((item,index) =>{
                            return(
                                <tr key={index}>
                                    <td onClick={() => handleDelete(item[0]) }  ><MdIcons.MdDelete /></td>
                                    <td> {item[0]} </td>
                                    <td> {item[1]} </td>
                                    <td> {item[3]} </td>
                                    <td> {item[4]} </td>
                                    <td> {item[5]} </td>
                                    <td> {item[2]} </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </Table>
            </div> 
        </div>
    )
}

export default ReadPrayerRequest