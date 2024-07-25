import {ProductCard} from './ProductCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import type {RecommendedProductsQuery} from 'storefrontapi.generated';
import {isValidArray} from '~/utils/helper';

const ProductSlider = ({
  products,
}: {
  products: RecommendedProductsQuery['products'];
}) => {
  const slides: any = [];

  if (isValidArray(products.nodes)) {
    [...products.nodes, ...products.nodes, ...products.nodes].forEach(
      (item) => {
        slides.push(
          <SwiperSlide className="w-34 h-[13.3125rem] desk-sec:h-[22.5rem]  bg-white desk-pri:h-[18.75rem] desk-pri:rounded-b-lg tablet:h-[15.43rem]">
            <ProductCard product={item} />
          </SwiperSlide>,
        );
      },
    );
  }

  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{
        300:{slidesPerView:2.3},
        360: {slidesPerView: 2.3},
        400: {slidesPerView: 3.3},
        600: {slidesPerView: 5, spaceBetween: '8'},
        768: {slidesPerView: 5.2, spaceBetween: '8'},
        1400: {slidesPerView: 6, spaceBetween: '16'},
      }}
      draggable={false}
      className="w-full"
    >
      {slides}
    </Swiper>
  );
};

export default ProductSlider;
