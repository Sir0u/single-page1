import React, { useRef } from 'react'
import './portfolio.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import slide1 from '../../assets/slide1.webp'
import slide2 from '../../assets/slide2.webp'
import slide3 from '../../assets/slide3.webp'
import slide4 from '../../assets/slide4.webp'
import slide5 from '../../assets/slide5.webp'

import arrow from '../../assets/arrow.svg'

const Portfolio = () => {


    const sliderRef = useRef<Slider>(null);


    const portfolioItems = [
        {
            id: 1,
            img: slide1,
            alt: 'slide1'
        },
        {
            id: 2,
            img: slide2,
            alt: 'slide2'
        },
        {
            id: 3,
            img: slide3,
            alt: 'slide3'
        },
        {
            id: 4,
            img: slide4,
            alt: 'slide4'
        },
        {
            id: 5,
            img: slide5,
            alt: 'slide5'
        },
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        paddingBetweenSlides: 20,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };

    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <section className="portfolio">
            <h3 className="portfolio-title">My Work</h3>
            <Slider ref={sliderRef}  {...settings} className="portfolio-slider">
                {portfolioItems.map(({ id, img, alt }) => (
                    <img style={{ width: 'clamp(16.875rem, 10.9331rem + 25.3521vw, 33.75rem)' }} src={img} alt={alt} key={id} />
                ))}
            </Slider>
            <div className="portfolio-arrows">
                <button className='portfolio-arrows-arrow' onClick={goToPrevSlide}><img src={arrow} alt="strzałka w lewo" /></button>
                <button className='portfolio-arrows-arrow' onClick={goToNextSlide}><img src={arrow} alt="strzałka w prawo" /></button>
            </div>

        </section>
    )
}

export default Portfolio