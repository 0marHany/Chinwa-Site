import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'

export default function LayOut() {
    return (<>
        {/* <NavBar /> */}
        <Nav/>
        <Outlet />
        <Footer />
    </>)
}
