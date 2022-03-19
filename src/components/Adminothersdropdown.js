import React from 'react';
import{ AdminOthersMenuItems } from './Adminothersmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'


function AdminOthersDropdown(){
    return(
        <>
            <ul className= 'dopdown-menu' >
                {
                    AdminOthersMenuItems.map((item, index) =>{
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

export default AdminOthersDropdown;