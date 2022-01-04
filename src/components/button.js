import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button(){
    return(
        <Link to='search-box'>
            <button className='search-button'>Search</button>
        </Link>
        
    );
}