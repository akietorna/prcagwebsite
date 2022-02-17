import React from 'react';
import{ BooksMenuItems } from './booksmenuitems';
import { Link } from 'react-router-dom';
import './dropdown.css'

function BooksDropdown(){
    return(
        <>
            <ul  className='dopdown-menu' >
                {
                    BooksMenuItems.map((item, index) =>{
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

export default BooksDropdown;