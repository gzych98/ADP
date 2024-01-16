"use client";
import React, { useState } from "react";
import './carousel.css'


function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 6;
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
    console.log("Current slide: " + currentSlide + " Transition: " + isTransitionEnabled)

    const nextSlide = () => {
        if (currentSlide === totalSlides - 2) {
            setCurrentSlide(totalSlides - 1)
            setTimeout(() => {
                setIsTransitionEnabled(false); // wyłącz animację
                setCurrentSlide(1); // natychmiastowa zmiana slajdu
            }, 1500);

            setIsTransitionEnabled(true);

        } else {
            setCurrentSlide(prevSlide => prevSlide + 1);
            setIsTransitionEnabled(true);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(0)
            setTimeout(() => {
                setIsTransitionEnabled(false); // wyłącz animację
                setCurrentSlide(totalSlides - 2); // natychmiastowa zmiana slajdu

            }, 1500);
            setIsTransitionEnabled(true);
        } else {
            setCurrentSlide(prevSlide => prevSlide - 1);
            setIsTransitionEnabled(true);
        }
    };
    return (
        <carousel>
            <div className="slider" style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitionEnabled ? 'transform 1.5s ease-in-out' : 'none'
            }}>

                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,city" alt="" />
                </div>
                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,mountain" alt="" />
                </div>

                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
                </div>

                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,night" alt="" />
                </div>

                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,city" alt="" />
                </div>
                <div className="slide">
                    <img src="https://source.unsplash.com/random?landscape,mountain" alt="" />
                </div>

            </div>

            <button className="btn btn-next" onClick={nextSlide}>&gt;</button>
            <button className="btn btn-prev" onClick={prevSlide}>&lt;</button>
        </carousel >
    );
}

export default Carousel;