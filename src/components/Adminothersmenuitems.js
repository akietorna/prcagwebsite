import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'

export const AdminOthersMenuItems=[
    {
        title: 'Comments',
        path: '/readothers/comments',
        icon: <BiIcons.BiPencil />,
    },

    {
        title: 'Log Out',
        path: '/readothers/logout',
        icon: < BiIcons.BiHelpCircle />,
    },

    {
        title: 'Upcoming',
        path: '/others/upcoming',
        icon: < BiIcons.BiHelpCircle />,
    },

    {
        title: 'About Us',
        path: '/readothers/update-about-us',
        icon: <FaIcons.FaHandshake />,
    },
]