import React from 'react';
import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../assets/uinnova.png';
import slide2 from '../assets/carsjp.png';
import slide3 from '../assets/expo.png';
import slide4 from '../assets/gremlin.png';
import slide5 from '../assets/reclame.png';
import slide6 from '../assets/line2.png';

const slides = [
    {
        src: slide1,
        alt: 'U-innova Software',
        description: 'U-Innova is a web app for outsourcing recruitment. It simplifies the process, manages applications, and ensures reliable performance with updates and bug fixes.',
    },
    {
        src: slide2,
        alt: 'CarsJP',
        description: 'CarsJP provides a platform for buying and selling cars with ease and transparency.',
    },
    {
        src: slide3,
        alt: 'Expo Premium',
        description: 'Expo Premium was a web-based software designed for event management, including an official event website, ticket sales, and attendee registration. It streamlined operations, providing a seamless experience for both organizers and attendees.',
    },
    {
        src: slide4,
        alt: 'Gremlin Bell',
        description: 'Gremlin Bell is a platform for motorcycle enthusiasts to find the best routes, share adventures, connect with other riders, and join a social network for motorcyclists.',
    },
    {
        src: slide5,
        alt: 'ReclameJP',
        description: 'Reclame JP is a feedback platform where users can give feedback on companies and the companies can respond to address issues and resolve problems, improving customer relationships.',
    },
    {
        src: slide6,
        alt: 'LINE Bot with AI integrated',
        description: 'Custom LINE bot development built using the OpenAI API, with integrated audio processing and speech recognition to enhance business communication and engagement.',
    },
];

const Carousel = () => {
    let swiperInstance = null;

    const handleSwiperInit = (swiper) => {
        swiperInstance = swiper;
    };

    const pauseAutoplay = () => {
        if (swiperInstance) swiperInstance.autoplay.stop();
    };

    const resumeAutoplay = () => {
        if (swiperInstance) swiperInstance.autoplay.start();
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="col-10 carousel-container">
                <SwiperLib
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 2000 }}
                    onSwiper={handleSwiperInit}
                    className='swiper-slide'
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="carousel-card"
                                onMouseEnter={pauseAutoplay}
                                onMouseLeave={resumeAutoplay}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                                <div className="description mt-3 text-center">
                                    <h5>{slide.alt}</h5>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </SwiperLib>
            </div>
        </div>
    );
};

export default Carousel;
