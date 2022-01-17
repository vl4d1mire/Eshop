import React from 'react'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout