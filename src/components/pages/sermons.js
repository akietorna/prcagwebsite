import React from 'react'
import Typist from 'react-typist'
import '../arrows.css'
import { Span } from '../footer/styles/footer'

const Sermons =() =>{
    return (
        <>
           <div className='typing'>
                <Typist >
                        <span>{words.length}</span>
                        
                    
                </Typist>
            </div>
        </>
    )
}

const words = ['Looking for Bible Believing Church to attend ?','Worship with us every Wednesday,Friday @ 6:30 pm and Sunday @ 7am', 'We are passionate about your spiritual growth and wellbeing','And Other Areas of your life', 'We are pleased to have you here'];

export default Sermons