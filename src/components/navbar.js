import React,{ useState } from 'react';
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

    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onClickAnnouncement = () =>{
        {click  ? setAnnouncementDropdown(false) : setAnnouncementDropdown(true)};
        setClick(!click);
    }

    const onClickBooks = () =>{
        {click ? setBooksDropdown(false) : setBooksDropdown(true)};
        setClick(!click);
    }

    const onClickOthers = () =>{
        {click ? setOthersDropdown(false) : setOthersDropdown(true)};
        setClick(!click);
    }

    const onMouseEnterAnnouncement = () =>{
        {window.innerWidth <960 ? setAnnouncementDropdown(false) : setAnnouncementDropdown(true)};
    }

    const onMouseLeaveAnnouncement = () =>{
        {window.innerWidth <960 ? setAnnouncementDropdown(false) : setAnnouncementDropdown(false)};
    }

    const onMouseEnterBooks = () =>{
        {window.innerWidth <960 ? setBooksDropdown(false) : setBooksDropdown(true)};
    }

    const onMouseLeaveBooks = () =>{
        {window.innerWidth <960 ? setBooksDropdown(false) : setBooksDropdown(false)};
    }

    const onMouseEnterOthers = () =>{
        {window.innerWidth <960 ? setOthersDropdown(false) : setOthersDropdown(true)};
    }

    const onMouseLeaveOthers = () =>{
        {window.innerWidth <960 ? setOthersDropdown(false) : setOthersDropdown(false)};
    }
    



   return(
    <>

        <nav className='navbar'>

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item' >
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}> <AiIcons.AiFillHome /> <span>Home</span>  </Link>
                </li>
                <li className='nav-item' >
                    <Link to='/sermons'  className='nav-links' onClick={closeMobileMenu}> <GiIcons.GiPublicSpeaker /> <span>Sermons</span> </Link> 
                </li>
                <li className='nav-item' >
                    <Link to='/prayer-request'  className='nav-links' onClick={closeMobileMenu}> <GiIcons.GiPrayer /> <span>Prayer Request</span></Link>
                </li>
                <li className='nav-item' >
                    <Link to='/devotional'  className='nav-links' onClick={closeMobileMenu}> <FaIcons.FaBookReader /> <span>Devotional</span> </Link>
                </li>
                <li className='nav-item' >
                    <Link to='/testimony'  className='nav-links' onClick={closeMobileMenu}> <FcIcons.FcPodiumWithSpeaker /> <span>Testimony</span> </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnterAnnouncement} onMouseLeave={onMouseLeaveAnnouncement} onClick={onClickAnnouncement}>
                    <Link to='/announcement' className='nav-links' > <FcIcons.FcSpeaker /> <span>Announcement</span>  <RiIcons.RiArrowDownSFill /> </Link>
                    {announcementDropdown && <AnnouncementDropdown />}
                </li>
              
                
                <li className='nav-item' onMouseEnter={onMouseEnterBooks} onMouseLeave={onMouseLeaveBooks} onClick={onClickBooks}>
                    <Link to='/book' onClick={closeMobileMenu} className='nav-links' > <BiIcons.BiBookBookmark /> <span>Books</span>  <RiIcons.RiArrowDownSFill /> </Link>
                    {booksDropdown && <BooksDropdown />}
                </li>
                

                <li className='nav-item' onMouseEnter={onMouseEnterOthers} onMouseLeave={onMouseLeaveOthers} onClick={onClickOthers}>
                    <Link to='/others'  className='nav-links' onClick={closeMobileMenu}> <AiIcons.AiOutlineSetting /> <span> Others</span> <RiIcons.RiArrowDownSFill /> </Link>
                    {othersDropdown && <OthersDropdown />}
                </li>
                
            </ul>

        </nav>
    </>   
   );
}

export default NavBar;