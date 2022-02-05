import React, {useState} from 'react';
import{ AnnouncementMenuItems } from './announcementmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'

function AnnouncementDropdown(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    
    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked': 'dopdown-menu'}>
                {
                    AnnouncementMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path} onClick={() => setClick(false)} >
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