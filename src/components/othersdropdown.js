import React from 'react';
import{ OthersMenuItems } from './othersmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'


function OthersDropdown(){
    return(
        <>
            <ul className= 'dopdown-menu' >
                {
                    OthersMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path} >
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