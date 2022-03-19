import React from 'react';
import{ AdminBooksMenuItems } from './Adminbooksmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'

function AdminBooksDropdown(){
    return(
        <>
            <ul  className='dopdown-menu' >
                {
                    AdminBooksMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className='dropdown-link' to={item.path}  >
                                   {item.icon} {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default AdminBooksDropdown;