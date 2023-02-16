import React from 'react'
import logo from '/images/airbnb-logo.png'

function Navbar(){
    return <nav className='navbar'>
        <img src={logo} alt='' className='airbnb-logo'/>
    </nav>
}

export default Navbar