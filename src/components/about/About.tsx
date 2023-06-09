import React from 'react'
import './about.scss'
import about from '../../assets/about.png'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <img src={about} alt="zdjęcie kobiety o włosach koloru blond, która się uśmiecha" className="about-img" />
                <div className="about-text">
                    <h2 className="about-text-title">I’m Amy, and I’d love to work on your next project</h2>
                    <p className="about-text-desc">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                    <a href="#" className="about-text-btn btn btn--secondary">Free Consultation</a>
                </div>
            </div>
        </section>
    )
}

export default About