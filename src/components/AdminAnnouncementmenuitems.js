import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'

export const AdminAnnouncementMenuItems = [
    {
        title:'General',
        path:'/admin/postannouncement/general',
        // className:'dropdown-link',
        icon:<BiIcons.BiChurch />
    },

    {
        title: 'Youth',
        path: '/admin/postannouncement/youth',
        icon: <FcIcons.FcBusinessman />,
    },

    {
        title: 'Men',
        path: '/admin/postannouncement/men',
        icon: <FcIcons.FcManager />,
    },

    {
        title: 'Women',
        path: '/admin/postannouncement/women',
        icon: <FcIcons.FcBusinesswoman />,
    },

    {
        title: 'Teen',
        path: '/admin/postannouncement/teen',
        icon: <FaIcons.FaChild />,
    },

    {
        title: 'Children',
        path: '/admin/postannouncement/children',
        icon: <FaIcons.FaBaby />,
    }
]