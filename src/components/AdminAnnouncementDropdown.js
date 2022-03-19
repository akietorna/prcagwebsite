import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css'
import { AdminAnnouncementMenuItems } from './AdminAnnouncementmenuitems';

function AdminAnnouncementDropdown(){
    
    return(
        <>
            <ul className= 'dopdown-menu'>
                {
                    AdminAnnouncementMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path} >
                                  {item.icon}  {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default AdminAnnouncementDropdown;