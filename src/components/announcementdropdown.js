import React from 'react';
import{ AnnouncementMenuItems } from './announcementmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'

function AnnouncementDropdown(){
    
    return(
        <>
            <ul className= 'dopdown-menu'>
                {
                    AnnouncementMenuItems.map((item, index) =>{
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

export default AnnouncementDropdown;