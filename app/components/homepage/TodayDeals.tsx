import SectionHeader from '@keenly/components/elements/SectionHeader';
import {isValidArray} from '~/utils/helper';
import {ProductCard} from '../elements/ProductCard';
import {Swiper, SwiperSlide} from 'swiper/react';

const TodayDeals = ({product}: {product: any}) => {
  const slides: any = [];

  if (isValidArray(product.nodes)) {
    [...product.nodes, ...product.nodes, ...product.nodes].forEach((item) => {
      slides.push(
        <SwiperSlide className="w-34 h-[213px] desk-sec:h-[22.5rem] rounded bg-white desk-pri:h-[18.75rem] tablet:h-[15.43rem]">
          <ProductCard product={item} />
        </SwiperSlide>,
      );
    });
  }

  return (
    <div className="w-full">
      <div
        className="w-full pt-4 pb-8 px-2 tablet:px-4 tablet:py-2 desk-pri:pt-10 desk-pri:px-20 desk-pri:pb-0 desk-sec:py-10 desk-sec:px-40 flex flex-col tablet:gap-y-1 desk-pri:gap-y-2 desk-pri:py-10
      desk-pri:h-[26.875rem] desk-sec:gap-y-2
      "
      >
        <SectionHeader title="Today's Deals" url="/" />
        <div className="w-full hidden  grid-cols-2 gap-y-2 gap-x-2 mobile:grid bg-white">
          {isValidArray(product?.nodes) &&
            [...product.nodes, ...product.nodes]
              .slice(0, 4)
              .map((item: any) => {
                return (
                  <div className="" key={item.id}>
                    <ProductCard product={item} />
                  </div>
                );
              })}
        </div>

        <div className="block mobile:hidden">
          <Swiper
            spaceBetween={16}
            breakpoints={{
              300: {slidesPerView: 2.3, spaceBetween: '16'},
              400: {slidesPerView: 2.3, spaceBetween: '16'},
              500: {slidesPerView: 3, spaceBetween: '16'},
              600: {slidesPerView: 4, spaceBetween: '16'},
              768: {slidesPerView: 4, spaceBetween: '16'},
              1400: {slidesPerView: 6, spaceBetween: '16'},
              1900: {slidesPerView: 6, spaceBetween: '12'},
            }}
            draggable={false}
            className="w-full"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TodayDeals;
