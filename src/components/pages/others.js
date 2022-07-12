import React, {useEffect} from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import NewCarousel from '../newCarousel'
import '../typping.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../slydeshowstyles.css'


const Others =() =>{
    useEffect(() =>{
        Aos.init({duration:1000});
    },[])

        
    
    return(
            <>
                <NewCarousel className='carousel' />
            </>
    )
}

export default Others