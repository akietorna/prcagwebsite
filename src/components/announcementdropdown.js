import React, { useState } from 'react';
import{ AnnouncementMenuItems } from './announcementmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'

function AnnouncementDropdown(){
    const [click, setClick] = useState(false);
    
    const handleclick = () => setClick(!false);
    return(
        <>
            <ul onclick={handleclick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
                {
                    AnnouncementMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path} onclick={() => setClick(false)} >
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