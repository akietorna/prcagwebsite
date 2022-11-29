import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SideBarData } from './sidebardata'
import SubMenu from './submenu'
import { IconContext } from 'react-icons/lib'



const Nav = styled.div`
    background: rgb(14, 14, 124);
    height:80px;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    top: 0px;
    bottom:0px;
    left:0px;
`

const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:65px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const SideBarNav = styled.nav `
    background: rgb(14, 14, 124);
    width:260px;
    height:100vh;
    display: flex;
    justify-content:center;
    position:fixed;   
    top:0;
    left: ${({sidebar}) =>(sidebar ? '0' : '-100%')};
    transition: 0.5s ease-out;
    z-index: 10;

`
const SideBarWrap = styled.div `
    width:100%;
`

const SideBar = () =>{
    const [sidebar,setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color:`white` }}>
            <Nav >
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={handleSidebar} />
                </NavIcon>
            </Nav>
            
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose style={{marginLeft:'160px'}} onClick={handleSidebar} />
                    </NavIcon>
                    {SideBarData.map((item, index) =>{
                        return (<SubMenu item={item} key={index} onClick={()=> handleSidebar()} />);
                    })}
                </SideBarWrap>
            </SideBarNav>
            </IconContext.Provider>
        </>
    )
}

export default SideBar