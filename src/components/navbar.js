import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";
import  AnnouncementDropdown from "./announcementdropdown";
import  BooksDropdown from "./booksdropdown";
import  OthersDropdown from "./othersdropdown";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'

function NavBar() {
    const [click, setClick] = useState(false);
    const [announcementDropdown, setAnnouncementDropdown] = useState(false);
    const [booksDropdown, setBooksDropdown] = useState(false);
    const [othersDropdown, setOthersDropdown] = useState(false);
    const [hover, setHover] = useState(false);
    // const [clicked, setClicked] = useState(false);


    // const handleClick = () => setClick(!click);
    

    const onClickAnnouncement = () =>{
        click  ? setAnnouncementDropdown(false) : setAnnouncementDropdown(true);
        setClick(!click);
    }

    const onClickBooks = () =>{
        click ? setBooksDropdown(false) : setBooksDropdown(true);
        setClick(!click);
    }

    const onClickOthers = () =>{
        click ? setOthersDropdown(false) : setOthersDropdown(true);
        setClick(!click);
    }

    const onMouseEnterAnnouncement = () =>{
        hover ? setAnnouncementDropdown(true) : setAnnouncementDropdown(true);
        setHover(!hover);
    }

    const onMouseLeaveAnnouncement = () =>{
        hover ? setAnnouncementDropdown(false) : setAnnouncementDropdown(false);
        setHover(!hover);

    }

    const onMouseEnterBooks = () =>{
        hover ? setBooksDropdown(true) : setBooksDropdown(true);
        setHover(!hover);

    }

    const onMouseLeaveBooks = () =>{
        hover ? setBooksDropdown(false) : setBooksDropdown(false);
        setHover(!hover);

    }

    const onMouseEnterOthers = () =>{
        hover ? setOthersDropdown(true) : setOthersDropdown(true);
        setHover(!hover);

    }

    const onMouseLeaveOthers = () =>{
        hover ? setOthersDropdown(false) : setOthersDropdown(false);
        setHover(!hover);

    }



   return(
        <>
            <nav className='navbar'>
                <ul className='nav-menu'>
                    <li className='nav-item' >
                        <Link to="/" className={'nav-links'} > <AiIcons.AiFillHome /> <span>Home</span>  </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/sermons'  className='nav-links' > <GiIcons.GiPublicSpeaker /> <span>Sermons</span> </Link> 
                    </li>
                    <li className='nav-item' >
                        <Link to='/prayer-request'  className='nav-links' > <GiIcons.GiPrayer /> <span>Prayer Request</span></Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/devotional'  className='nav-links' > <FaIcons.FaBookReader /> <span>Devotional</span> </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='/testimony'  className='nav-links' > <FcIcons.FcPodiumWithSpeaker /> <span>Testimony</span> </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnterAnnouncement} onMouseLeave={onMouseLeaveAnnouncement} onClick = {onClickAnnouncement }>
                        <Link to='/announcement' className='nav-links' > <FcIcons.FcSpeaker /> <span>Announcement</span>  <RiIcons.RiArrowDownSFill /> </Link>
                        {announcementDropdown && <AnnouncementDropdown />}
                    </li>
                
                    
                    <li className='nav-item' onMouseEnter={onMouseEnterBooks} onMouseLeave={onMouseLeaveBooks} onClick={onClickBooks}>
                        <Link to='/book'  className='nav-links' > <BiIcons.BiBookBookmark /> <span>Books</span>  <RiIcons.RiArrowDownSFill /> </Link>
                        {booksDropdown && <BooksDropdown />}
                    </li>
                    

                    <li className='nav-item' onMouseEnter={onMouseEnterOthers} onMouseLeave={onMouseLeaveOthers} onClick={onClickOthers}>
                        <Link to='/others'  className='nav-links' > <AiIcons.AiOutlineSetting /> <span> Others</span> <RiIcons.RiArrowDownSFill /> </Link>
                        {othersDropdown && <OthersDropdown />}
                    </li>
                    
                </ul>

            </nav>

            
        </>   
   )

}

export default NavBar;