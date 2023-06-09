import React from 'react'
import './info.scss'
import graphicDesign from '../../assets/Graphic-Design.svg'
import uiUX from '../../assets/Ui-Ux.svg'
import apps from '../../assets/Apps.svg'
import illustrations from '../../assets/Illustrations.svg'
import photography from '../../assets/Photography.svg'
import motionGraphics from '../../assets/Motion-Graphics.svg'

const Info = () => {


    const elements = [
        {
            id: 1,
            name: 'Graphic Design',
            img: graphicDesign
        },
        {
            id: 2,
            name: 'UI/UX',
            img: uiUX
        },
        {
            id: 3,
            name: 'Apps',
            img: apps
        },
        {
            id: 4,
            name: 'Illustrations',
            img: illustrations
        },
        {
            id: 5,
            name: 'Photography',
            img: photography
        },
        {
            id: 6,
            name: 'Motion Graphics',
            img: motionGraphics
        },
    ]

    return (
        <section className='info'>
            <div className="container--s">
                <div className="info-header">
                    <h1 className="info-header-title">Design solutions made easy</h1>
                    <p className="info-header-desc">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
                </div>
            </div>
            <div className="container">
                <div className="info-elements">
                    {elements.map(({ id, name, img }) => (
                        <div className='element' key={id}>
                            <img src={img} alt={name} />
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Info