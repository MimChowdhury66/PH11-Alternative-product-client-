import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import bg1 from '../../../public/slider-1.jpg';
import bg2 from '../../../public/slider-2.jpg';
import 'animate.css';

const Slider = () => {
    return (


        < div className='mb-10' >
            <Swiper navigation={true} autoplay={{ delay: 5000 }} modules={[Navigation, Autoplay]} className="mySwiper">

                <SwiperSlide>
                    <div className="hero min-h-screen " style={{ backgroundImage: `url(${bg1})` }}>
                        <div className=" text-center">
                            <h1 className="mb-5 lg:text-5xl font-bold animate__animated animate__backInDown">Alternate products consist of <br /> one or more components that <br /> make up the managed product
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown font-bold">Go and find the alternative product what you are looking for...</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen " style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="text-center">
                            <h1 className="mb-5 lg:text-5xl font-bold animate__animated animate__backInDown">People trust InformaTica because <br /> it is where they go to ask questions, <br /> find answers for making alternative decision.
                            </h1>
                            <p className="mb-5 animate__animated animate__backInDown font-bold">Recommendation will give  you find a better alteration of your desired product</p>
                        </div>

                    </div>
                </SwiperSlide>





            </Swiper>
        </div >
    );
};

export default Slider;