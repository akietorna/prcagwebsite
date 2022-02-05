import React, { useState } from 'react';
import{ OthersMenuItems } from './othersmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'


function OthersDropdown(){
    const [click, setClick] = useState(false);
    
    const handleclick = () => setClick(!click);
    return(
        <>
            <ul onClick={handleclick} className={click ? 'dropdown-menu-clicked' : 'dopdown-menu' }>
                {
                    OthersMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path} onClick={() => setClick(false)} >
                                   {item.icon} {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default OthersDropdown;