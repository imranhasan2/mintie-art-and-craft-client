import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "./Banner";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='lg:mt-6 md:mt-6 mt-28 '>

            < Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }
                }
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
               
                <SwiperSlide>
                    <img src="https://i.ibb.co/JxcNvCV/handcrafted-wooden-decorative-sculpture-23-2151003027.jpg" className="w-full h-[600px]" alt="Art 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3p3HcRZ/watercolor-mountain-landscape-52683-76919.jpg" className="w-full h-[600px]" alt="Art 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-[600px]" src="https://img.freepik.com/premium-photo/sunset-with-mountain-river-background_1069975-57579.jpg?w=360" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LzCRjyj/sandcastle-dreamssea-animal-photography-960396-5204.jpg" className="w-full h-[600px] rounded-xl" alt="Art 1" />
                </SwiperSlide>
            </Swiper >

        </div >
    );
};

export default Banner;
