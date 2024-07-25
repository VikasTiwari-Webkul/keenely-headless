import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isValidArray } from '~/utils/helper';

interface ISliderProps {
  swiperSlides: React.ReactNode;
  spacebtw?: number;
  sliderPerView?: number;
}

const Slider = ({spacebtw = 50,sliderPerView=3,swiperSlides }:ISliderProps) => {
  return (
    <Swiper
      spaceBetween={spacebtw}
      slidesPerView={sliderPerView}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
     {swiperSlides}
    </Swiper>
  );
};

export default Slider;