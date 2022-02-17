import React from 'react'
import '../slydeshowstyles.css'
import Deck from '../deck'
import NewCarousel from '../newCarousel'

function Home (){
    return (
        <div className='carousel'>
            {/* <Deck /> */}
            <NewCarousel />
        </div>
    )
}

export default Home