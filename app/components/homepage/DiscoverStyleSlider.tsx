import SectionHeader from '@keenly/components/elements/SectionHeader';
import {DiscoverStyleCard} from './DiscoverStyleCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {isValidArray} from '~/utils/helper';

const DiscoverStyleSlider = () => {
  const placeHolder = new Array(15).fill(101);

  const slides: any = [];

  if (isValidArray(placeHolder)) {
    placeHolder.forEach((item) => {
      slides.push(
        <SwiperSlide className="rounded-md bg-white w-[302px] h-[418px]">
          <DiscoverStyleCard />
        </SwiperSlide>,
      );
    });
  }

  return (
    <div className="pt-4 pb-8 pl-2 tablet:pt-10 tablet:pl-4 tablet:pb-0 desk-pri:pt-10 desk-pri:pl-20 desk-pri:pb-0 desk-sec:pl-40 desk-sec:pt-10">
      <div className="flex flex-col gap-y-2">
        <div className="w-full desk-sec:pr-40">
          <SectionHeader
            title="Discover your style"
            url="/"
            subHeading="Step into a world of fashion at Keenly!"
            subHeadingStyle="!text-p3"
            titleStyle="!text-h3"
          />
        </div>
        <Swiper
          breakpoints={{
            360: {slidesPerView: 1.2, spaceBetween: '24'},
            450: {slidesPerView: 1.6, spaceBetween: '24'},
            500: {slidesPerView: 2.3, spaceBetween: '24'},
            768: {slidesPerView: 2.3, spaceBetween: '24'},
            800: {slidesPerView: 3.3, spaceBetween: '24'},
            1440: {slidesPerView: 4.3, spaceBetween: '24'},
            1540: {slidesPerView: 5, spaceBetween: '24'},
            1640: {slidesPerView: 5.2, spaceBetween: '24'},
            1920: {slidesPerView: 5.4, spaceBetween: '24'},
          }}
          className="w-full"
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscoverStyleSlider;
