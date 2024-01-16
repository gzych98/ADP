'use client';
import React, { useState } from 'react';
import './carousel.css';

type CarouselProps = {
    images: string[];
};

const Carousel2: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious} className="btn btn-prev">&lt;</button>
            <div
                className="slide"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
                {/* Usunięto element <img> i dodano stylowanie tła dla div.slide */}
                <div className="carousel-content">
                    <h1>Akademia Debat Profilaktycznych</h1>
                    <p>Edukacja przez dyskusję</p>
                    <button className="carousel-button">Dołącz do debaty!</button>
                </div>
            </div>
            <button onClick={goToNext} className="btn btn-next">&gt;</button>
        </div>
    );
};

export default Carousel2;
