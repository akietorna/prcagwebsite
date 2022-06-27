import React, {useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import './postSermon.css'

function ReadPrayerRequest(){
    const [prayer, setPrayer] = useState([])


    useEffect(() =>{
        fetch('/admin/prayer_request').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setPrayer(data)
        } )
    },[])

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
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
                                    <td id={item[0]}><MdIcons.MdDelete /></td>
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