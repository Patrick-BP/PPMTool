import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar'

function Landingpage() {
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}

export default Landingpage
