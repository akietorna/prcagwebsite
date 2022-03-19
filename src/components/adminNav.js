import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import AdminAnnouncementDropdown from './AdminAnnouncementDropdown';
import AdminBooksDropdown from './Adminbooksdropdown';
import AdminOthersDropdown from './Adminothersdropdown';




function AdminNavBar() {
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
            <li className='nav-item'>
                <Link className='nav-links' to="/admin/posts" > <AiIcons.AiFillHome /> <span>Post</span>  </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/admin/postsermons'   > <GiIcons.GiPublicSpeaker /> <span>Sermons</span> </Link> 
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/admin/read-prayer-request'   > <GiIcons.GiPrayer /> <span>Prayer Request</span></Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/admin/post-devotional'   > <FaIcons.FaBookReader /> <span>Devotional</span> </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/admin/read-testimony'   > <FcIcons.FcPodiumWithSpeaker /> <span>Testimony</span> </Link>
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnterAnnouncement} onMouseLeave={onMouseLeaveAnnouncement} onClick = {onClickAnnouncement }>
                <Link className='nav-links' to='/admin/postannouncement'  > <FcIcons.FcSpeaker /> <span>Announcement</span>  <RiIcons.RiArrowDownSFill /> </Link>
                {announcementDropdown && <AdminAnnouncementDropdown />}
            </li>
        
            
            <li className='nav-item' onMouseEnter={onMouseEnterBooks} onMouseLeave={onMouseLeaveBooks} onClick={onClickBooks}>
                <Link className='nav-links' to='/admin/postbook'   > <BiIcons.BiBookBookmark /> <span>Books</span>  <RiIcons.RiArrowDownSFill /> </Link>
                {booksDropdown && <AdminBooksDropdown />}
            </li>
            

            <li className='nav-item' onMouseEnter={onMouseEnterOthers} onMouseLeave={onMouseLeaveOthers} onClick={onClickOthers}>
                <Link className='nav-links' to='/admin/readothers'   > <AiIcons.AiOutlineSetting /> <span> Others</span> <RiIcons.RiArrowDownSFill /> </Link>
                {othersDropdown && <AdminOthersDropdown />}
            </li>
            
        </ul>

    </nav >
        
        
    </>   
)

}

export default AdminNavBar;