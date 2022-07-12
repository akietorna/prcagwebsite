import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'
import * as BiIcons from 'react-icons/bi'

export const SideBarData =[
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,      
    },

    {
        title: 'Sermons',
        path: '/sermons',
        icon: <GiIcons.GiPublicSpeaker />,
    },

    {
        title: 'Prayer Request',
        path: '/prayer-request',
        icon: <GiIcons.GiPrayer />,
    },

    {
        title: 'Devotional',
        path: '/devotional',
        icon: <FaIcons.FaBookReader />,
    },

    {
        title: 'Testimony',
        path: '/testimony',
        icon: <FcIcons.FcPodiumWithSpeaker />,
    },


    {
        title: 'Announcement',
        path: '/announcement',
        icon: <FcIcons.FcSpeaker />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title:'General',
                path:'/announcement/general',
                className:'dropdown-link',
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
            },

        ]
    },

    {
        title: 'Books',
        path: '/book',
        icon: <BiIcons.BiBookBookmark />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title: 'Sunday School',
                path: '/book/sundayschool',
                icon: <BiIcons.BiBookReader />,
            },

            {
                title: 'Marriage',
                path: '/book/marriage',
                icon: < GiIcons.GiBigDiamondRing/>,
            },

            {
                title: 'Prayer',
                path: '/book/prayer',
                icon: <GiIcons.GiPrayer />,
            },

            {
                title: 'Health',
                path: '/book/health',
                icon: <FaIcons.FaStethoscope />,
            },

            {
                title: 'Motivation',
                path: '/book/motivation',
                icon: <FcIcons.FcPodiumWithSpeaker />,
            },

            {
                title: 'Christian Life',
                path: '/book/christian-life',
                icon: <GiIcons.GiPrayer />,
            },

        ]
    },

    {
        title: 'Others',
        path: '/others',
        icon: <AiIcons.AiOutlineSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        dropDownItems:[
            {
                title: 'Comments',
                path: '/others/comments',
                icon: <BiIcons.BiPencil />,
            },

            {
                title: 'About Us',
                path: '/others/about-us',
                icon: <FaIcons.FaHandshake />,
            },
            ]
    }
]