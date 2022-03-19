import React from 'react'
import { Table } from 'react-bootstrap'
import * as MdIcons from 'react-icons/md'
import '../post.css'


function ReadTestimony(){
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Are you sure you want to delete this item ?  ")
    }

    return(
        <div className='row'>
            <div className='posts col-lg-12 col-md-12 col-sm-12 col-xs-12' >
                <Table striped bordered hover>
                    <thead>
                        <th></th>
                        <th>Post ID</th>
                        <th>Topic/Title</th>
                        <th>Posted By:</th>
                        <th>Item</th>
                        <th>Time Posted</th>
                    </thead>

                    <tbody>
                        
                        <tr>
                            <td><MdIcons.MdDelete className={handleSubmit} /></td>
                            <td>12</td>
                            <td>Jesus Can Save</td>
                            <td>His Presence</td>
                            <td>Sermon</td>
                            <td>12-07-2021 19:24:12</td>
                        </tr>
                    </tbody>
                </Table>
            </div> 
        </div>
    )
}

export default ReadTestimony