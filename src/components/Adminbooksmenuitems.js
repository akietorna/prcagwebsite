import React from 'react'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'

export const AdminBooksMenuItems = [
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
        icon: <GiIcons.GiPrayer/>,
    },

    {
        title: 'Health',
        path: '/admin/postbook/health',
        icon: <GiIcons.GiStethoscope />,
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