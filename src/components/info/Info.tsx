import React from 'react'
import './info.scss'

const Info = () => {


    const elements = [
        {
            id: 1,
            name: 'Graphic Design'
        },
        {
            id: 2,
            name: 'UI/UX'
        },
        {
            id: 3,
            name: 'Apps'
        },
        {
            id: 4,
            name: 'Illustrations'
        },
        {
            id: 5,
            name: 'Photography'
        },
        {
            id: 6,
            name: 'Motion Graphics'
        },
    ]

    return (
        <section className='info'>
            <div className="container">
                <div className="info-header">
                    <h1 className="info-header-title">Design solutions made easy</h1>
                    <p className="info-header-desc">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
                </div>
                <div className="info-elements"></div>

            </div>
        </section>
    )
}

export default Info