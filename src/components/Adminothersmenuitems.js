import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'

export const AdminOthersMenuItems=[
    {
        title: 'Comments',
        path: '/admin/readothers/comments',
        icon: <BiIcons.BiPencil />,
    },

    {
        title: 'Log Out',
        path: '/admin/readothers/logout',
        icon: < BiIcons.BiHelpCircle />,
    },

    {
        title: 'Upcoming',
        path: '/admin/readothers/upcoming',
        icon: < BiIcons.BiHelpCircle />,
    },

    {
        title: 'About Us',
        path: '/admin/readothers/update-about-us',
        icon: <FaIcons.FaHandshake />,
    },
]