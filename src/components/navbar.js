import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav className='navbar' sticky='top'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link className='nav-links' to="/" > <AiIcons.AiFillHome /> <span>Home</span>  </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to='/sermons'   > <GiIcons.GiPublicSpeaker /> <span>Sermons</span> </Link> 
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to='/prayer-request'   > <GiIcons.GiPrayer /> <span>Prayer Request</span></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to='/devotional'   > <FaIcons.FaBookReader /> <span>Devotional</span> </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-links' to='/testimony'   > <FcIcons.FcPodiumWithSpeaker /> <span>Testimony</span> </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnterAnnouncement} onMouseLeave={onMouseLeaveAnnouncement} onClick = {onClickAnnouncement }>
                    <Link className='nav-links' to='/announcement'  > <FcIcons.FcSpeaker /> <span>Announcement</span>  <RiIcons.RiArrowDownSFill /> </Link>
                    {announcementDropdown && <AnnouncementDropdown />}
                </li>
            
                
                <li className='nav-item' onMouseEnter={onMouseEnterBooks} onMouseLeave={onMouseLeaveBooks} onClick={onClickBooks}>
                    <Link className='nav-links' to='/book'   > <BiIcons.BiBookBookmark /> <span>Books</span>  <RiIcons.RiArrowDownSFill /> </Link>
                    {booksDropdown && <BooksDropdown />}
                </li>
                

                <li className='nav-item' onMouseEnter={onMouseEnterOthers} onMouseLeave={onMouseLeaveOthers} onClick={onClickOthers}>
                    <Link className='nav-links' to='/others'   > <AiIcons.AiOutlineSetting /> <span> Others</span> <RiIcons.RiArrowDownSFill /> </Link>
                    {othersDropdown && <OthersDropdown />}
                </li>
                
            </ul>

        </nav >
        
        
    </>   
)

}

export default NavBar;