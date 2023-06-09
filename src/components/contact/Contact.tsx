import React from 'react'
import './contact.scss'


const Contact = () => {
    return (
        <section className='contact'>
            <div className="container">
                <div className="contact-text">
                    <h2 className="contact-text-title">Book a call with me</h2>
                    <p className="contact-text-desc">I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
                </div>
                <a href="#" className="contact-btn btn btn--secondary">Free Consultation</a>
            </div>
        </section>
    )
}

export default Contact