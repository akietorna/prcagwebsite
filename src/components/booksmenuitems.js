import React from 'react'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
import * as FcIcons from 'react-icons/fc'

export const BooksMenuItems = [
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
        icon: <GiIcons.GiPrayer/>,
    },

    {
        title: 'Health',
        path: '/book/health',
        icon: <GiIcons.GiStethoscope />,
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