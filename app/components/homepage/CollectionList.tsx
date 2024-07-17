import {isValidArray} from '~/utils/helper';
import {Image} from '@shopify/hydrogen';
import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import Thumbnails from '../elements/Thumbnail';
import {Swiper, SwiperSlide} from 'swiper/react';
import Typography from '../elements/Typography';

const CollectionList = ({
  collectionList,
}: {
  collectionList: [FeaturedCollectionFragment];
}) => {
  const slides: any = [];

  if (isValidArray(collectionList)) {
    collectionList.forEach((item: any) => {
      slides.push(
        <SwiperSlide key={item.id}>
          <div className="w-full flex flex-col justify-center items-center gap-y-1">
            {item.image && (
              <Thumbnails
                data={item.image}
                alt={item.image.altText || `${item.handle}_img`}
                className="w-full h-full"
                width={100}
                height={100}
              />
            )}
            <Typography variant="h5-mob" className="text-gray-950">
              {item.title}
            </Typography>
          </div>
        </SwiperSlide>,
      );
    });
  }

  return (
    <div className="w-full">
      <div className="w-full px-2 pb-4 h-24 tablet:px-4 tablet:pb-0 desk-pri:px-20 desk-pri:h-36 desk-sec:px-[18.63rem] desk-sec:h-36">
        <Swiper
          breakpoints={{
            250: {slidesPerView: 5, spaceBetween: '8'},
            360: {slidesPerView: 5, spaceBetween: '8'},
            460: {slidesPerView: 6, spaceBetween: '12'},
            760: {slidesPerView: 10, spaceBetween: '16'},
            1400: { slidesPerView: 10, spaceBetween: '32' },
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionList;
