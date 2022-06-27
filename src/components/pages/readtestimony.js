import React, {useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'


function ReadTestimony(){
    
    const [testimony, setTestimony] = useState([])


    useEffect(() =>{
        fetch('/admin/testimony').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setTestimony(data)
        } )
    },[])


    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
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
                                    <td id={item[0]}><MdIcons.MdDelete /></td>
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