import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'

export const AnnouncementMenuItems = [
    {
        title:'General',
        path:'/announcement/general',
        icon:<BiIcons.BiChurch />
    },

    {
        title: 'Youth',
        path: '/announcement/youth',
        icon: <FcIcons.FcBusinessman />,
    },

    {
        title: 'Men',
        path: '/announcement/men',
        icon: <FcIcons.FcManager />,
    },

    {
        title: 'Women',
        path: '/announcement/women',
        icon: <FcIcons.FcBusinesswoman />,
    },

    {
        title: 'Teen',
        path: '/announcement/teen',
        icon: <FaIcons.FaChild />,
    },

    {
        title: 'Children',
        path: '/announcement/children',
        icon: <FaIcons.FaBaby />,
    }
]