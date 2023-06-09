import React from 'react'
import './navbar.scss'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <img className='navbar-logo' src={logo} alt="logo" />
                    <a href="#" className="navbar-btn btn btn--primary">Free Consultation</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar