import React from 'react'
import AdminNavBar from './adminNav'
import AdminSideBar from './adminSidebar'

const AdminFinalNav =()=>{

    if (window.innerWidth <1300){
       return (
        <>
            <AdminSideBar />
        </>
        
       ) 
    }
    else{
        return(
            <>
             <AdminNavBar />
            </>
            
        )
    }

    
   
}

export default AdminFinalNav