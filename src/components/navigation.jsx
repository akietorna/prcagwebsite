import React from 'react'
import NavBar from './navbar'
import SideBar from './sidebar'

const FinalNav =()=>{

    if (window.innerWidth <1300){
       return (
        <>
            <SideBar />
        </>
        
       ) 
    }
    else{
        return(
            <>
             <NavBar />
            </>
            
        )
    }

    
   
}

export default FinalNav