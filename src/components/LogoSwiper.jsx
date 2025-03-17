import { Swiper as SwiperLib, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../assets/logoui-nnova2 2.png';
import slide2 from '../assets/icon-cars.png';
import slide3 from '../assets/expo 2.png';
import slide4 from '../assets/gremlin.png';
import slide5 from '../assets/reclame-logo.png';
import slide6 from '../assets/active.png';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

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
        <div id="portfolio">
            <div className="d-flex justify-content-center align-items-center">
                <h2 className="gradient-font mt-5">U-innova Latest Projects</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-md-10 col-12 carousel-container-logos">
                    <SwiperLib
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        autoplay={{ delay: 2000 }}
                        onSwiper={handleSwiperInit}
                        className='swiper-slide'
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="carousel-card"
                                    onMouseEnter={pauseAutoplay}
                                    onMouseLeave={resumeAutoplay}
                                >
                                    <img
                                        src={slide}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </SwiperLib>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
