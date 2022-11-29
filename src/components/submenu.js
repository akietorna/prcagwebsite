import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBarLink = styled(Link)`
    display:flex;
    color:white;
    justify-content: space-between;
    align-item:center;
    padding:10px;
    list-style:none;
    height: 50px;
    text-decoration:none;
    font-size: 16px;
    
    &:hover{
        background:white;
        border-left: 4px solid rgb(126, 126, 233);
        cursor: pointer;
        color: rgb(126, 126, 233)
    }
`;

const SidebarLabel =styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: rgb(126, 126, 233);
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size:10px;

    &:hover{
        background:white;
        cursor: pointer;
        color: rgb(126, 126, 233)
    }
`

const SubMenu = ({ item }) =>{
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
            <SideBarLink to={item.path} onClick={ item.dropDownItems && showSubnav }>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    { item.dropDownItems && subnav ? item.iconOpened : item.dropDownItems ? item.iconClosed : null}
                </div>
                
            </SideBarLink>
            
            {subnav && item.dropDownItems.map((item, index) =>{
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel> 
                    </DropdownLink>
                    );
            })}
        </>
        
    )
}

export default  SubMenu;