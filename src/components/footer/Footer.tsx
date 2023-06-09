import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <img className='footer-logo' src={logo} alt="logo" />
                <a href="#" className="footer-btn btn btn--primary">Free Consultation</a>
            </div>
        </footer>
    )
}

export default Footer