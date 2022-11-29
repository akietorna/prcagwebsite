import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
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
    // const [clicked, setClicked] = useState(false)
    const [announcementDropdown, setAnnouncementDropdown] = useState(false);
    const [booksDropdown, setBooksDropdown] = useState(false);
    const [othersDropdown, setOthersDropdown] = useState(false);
    const [hover, setHover] = useState(false);


    // const handleClick = () => setClicked(!click);
    

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
        <nav className='navbar'    >
            <ul className= 'nav-menu'>
                <li className='nav-item'>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})}  to="/" > <AiIcons.AiFillHome  /> <span>Home</span>  </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/sermons'   > <GiIcons.GiPublicSpeaker /> <span>Sermons</span> </NavLink> 
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/prayer-request'   > <GiIcons.GiPrayer /> <span>Prayer Request</span></NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/devotional'   > <FaIcons.FaBookReader /> <span>Devotional</span> </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/testimony'   > <FcIcons.FcPodiumWithSpeaker /> <span>Testimony</span> </NavLink>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnterAnnouncement} onMouseLeave={onMouseLeaveAnnouncement} onClick = {onClickAnnouncement }>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/announcement'  > <FcIcons.FcSpeaker /> <span>Announcement</span>  <RiIcons.RiArrowDownSFill /> </NavLink>
                    {announcementDropdown && <AnnouncementDropdown />}
                </li>
            
                
                <li className='nav-item' onMouseEnter={onMouseEnterBooks} onMouseLeave={onMouseLeaveBooks} onClick={onClickBooks}>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/book'   > <BiIcons.BiBookBookmark /> <span>Books</span>  <RiIcons.RiArrowDownSFill /> </NavLink>
                    {booksDropdown && <BooksDropdown />}
                </li>
                

                <li className='nav-item' onMouseEnter={onMouseEnterOthers} onMouseLeave={onMouseLeaveOthers} onClick={onClickOthers}>
                    <NavLink className='nav-links'  style={({isActive}) => ({ borderBottom : isActive ? "4px solid white" : ""})} to='/others'   > <AiIcons.AiOutlineSetting /> <span> Others</span> <RiIcons.RiArrowDownSFill /> </NavLink>
                    {othersDropdown && <OthersDropdown />}
                </li>
                
            </ul>
        </nav >
        
        
    </>   
)

}



export default NavBar;