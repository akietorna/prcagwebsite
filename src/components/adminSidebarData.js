import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'
import * as FiIcons from 'react-icons/fi'

export const AdminSideBarData =[
    {
        title: 'Posts',
        path: '/admin/posts',
        icon: <AiIcons.AiFillHome />,      
    },

    {
        title: 'Sermons',
        path: '/admin/postsermons',
        icon: <GiIcons.GiPublicSpeaker />,
    },

    {
        title: 'Prayer Request',
        path: '/admin/read-prayer-request',
        icon: <GiIcons.GiPrayer />,
    },

    {
        title: 'Devotional',
        path: '/admin/post-devotional',
        icon: <FaIcons.FaBookReader />,
    },

    {
        title: 'Testimony',
        path: '/admin/read-testimony',
        icon: <FcIcons.FcPodiumWithSpeaker />,
    },


    {
        title: 'Announcement',
        path: '/admin/postannouncement',
        icon: <FcIcons.FcSpeaker />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title:'General',
                path:'/admin/postannouncement/general',
                className:'dropdown-link',
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
            },

        ]
    },


    {
        title: 'Books',
        path: '/admin/postbook',
        icon: <BiIcons.BiBookBookmark />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title: 'Sunday School',
                path: '/admin/postbook/sundayschool',
                icon: <BiIcons.BiBookReader />,
            },

            {
                title: 'Marriage',
                path: '/admin/postbook/marriage',
                icon: < GiIcons.GiBigDiamondRing/>,
            },

            {
                title: 'Prayer',
                path: '/admin/postbook/prayer',
                icon: <GiIcons.GiPrayer />,
            },

            {
                title: 'Health',
                path: '/admin/postbook/health',
                icon: <FaIcons.FaStethoscope />,
            },

            {
                title: 'Motivation',
                path: '/admin/postbook/motivation',
                icon: <FcIcons.FcPodiumWithSpeaker />,
            },

            {
                title: 'Christian Life',
                path: '/admin/postbook/christian-life',
                icon: <GiIcons.GiPrayer />,
            },

        ]
    },


    {
        title: 'Others',
        path: '/admin/readothers',
        icon: <AiIcons.AiOutlineSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title: 'Comments',
                path: '/admin/readothers/comments',
                icon: <BiIcons.BiPencil />,
            },

            {
                title: 'Log Out',
                path: '/admin/readothers/logout',
                icon: < FiIcons.FiLogOut />,
            },
            {
                title: 'Upcoming',
                path: '/admin/others/upcoming',
                icon: < BiIcons.BiHelpCircle />,
            },

            {
                title: 'About Us',
                path: '/admin/readothers/updateaboutus',
                icon: <FaIcons.FaHandshake />,
            },
            ]
    }
]