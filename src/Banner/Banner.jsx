import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className='mt-28 md:mt-5 lg:mt-5'
            >
                <SwiperSlide>
                    <div className="image-container relative">
                        <img src="https://i.ibb.co/LzCRjyj/sandcastle-dreamssea-animal-photography-960396-5204.jpg" className="w-full h-[550px] rounded-xl" alt="Art 1" />
                        {/* <div className="absolute bottom-24 lg:bottom-64 md:bottom-64 left-6 lg:left-14 md:left-14 bg-black bg-opacity-50 p-4 rounded-lg animate__animated animate__fadeInDown animate__slow">
                            <h2 className="text-white text-xl font-bold mb-2 animate__animated animate__fadeInDown">Exploring the Beauty of Traditional Art</h2>
                            <p className="text-white text-sm ">Dive into the rich heritage of traditional art forms from around the world. Experience the vibrant colors, intricate patterns, and cultural stories embedded in each masterpiece.</p>
                            <button className="btn btn-accent mt-4 px-8 ">Discover</button>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container relative">
                        <img src="https://i.ibb.co/JxcNvCV/handcrafted-wooden-decorative-sculpture-23-2151003027.jpg" className="w-full h-[550px]" alt="Art 2" />
                        {/* <div className="absolute bottom-24 lg:bottom-64 md:bottom-64 left-6 lg:left-14 md:left-14 bg-black bg-opacity-50 p-4 rounded-lg animate__animated animate__fadeInDown animate__slow">
                            <h2 className="text-white text-xl font-bold mb-2 animate__animated animate__fadeInDown">Finding Serenity in Nature's Canvas</h2>
                            <p className="text-white text-sm">Embark on a journey through breathtaking landscapes captured by talented photographers. Let the tranquility of nature wash over you as you explore the beauty of our planet.</p>
                            <button className="btn btn-accent mt-4 px-8">Explore</button>
                        </div> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-container relative">
                        <img src="https://i.ibb.co/3p3HcRZ/watercolor-mountain-landscape-52683-76919.jpg" className="w-full h-[550px]" alt="Art 3" />
                        {/* <div className="absolute bottom-24 lg:bottom-64 md:bottom-64 left-6 lg:left-14 md:left-14 bg-black bg-opacity-50 p-4 rounded-lg animate__animated animate__fadeInDown animate__slow">
                            <h2 className="text-white text-xl font-bold mb-2 animate__animated animate__fadeInDown">Celebrating the Elegance of Floral Artistry</h2>
                            <p className="text-white text-sm">Immerse yourself in the enchanting world of floral arrangements. From vibrant bouquets to delicate petals, discover the artistry and grace of nature's most beautiful creations.</p>
                            <button className="btn btn-accent mt-4 px-8">Admire</button>
                        </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
