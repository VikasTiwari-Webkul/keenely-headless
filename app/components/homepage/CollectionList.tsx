import {isValidArray} from '~/utils/helper';
import {Image} from '@shopify/hydrogen';
import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import Thumbnails from '../elements/Thumbnail';
import {Swiper, SwiperSlide} from 'swiper/react';
import Typography from '../elements/Typography';
import {useEffect, useState} from 'react';
import {Link} from '@remix-run/react';

const CollectionList = ({
  collectionList,
}: {
  collectionList: [FeaturedCollectionFragment];
}) => {
  const slides: any = [];
  const [enableSwiper, setEnableSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEnableSwiper(true);
    }, 100);
  }, []);

  if (isValidArray(collectionList)) {
    collectionList.forEach((item: any) => {
      slides.push(
        <SwiperSlide key={item.id}>
          <div className="w-full flex flex-col justify-center items-center gap-y-1 group">
            {item.image && (
              <Link to={item.handle} className="block w-full h-full rounded-[3rem] px-0.5 overflow-hidden group-hover:shadow-md">
                <Thumbnails
                  data={item.image}
                  alt={item.image.altText || `${item.handle}_img`}
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  width={100}
                  height={100}
                />
              </Link>
            )}
            <Typography variant="h5-mob" className="text-gray-950 group-hover:text-gray-800">
              <Link to={item.handle} className="block w-full h-full">
                {item.title}
              </Link>
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
            361: {slidesPerView: 6, spaceBetween: '16'},
            500: {slidesPerView: 6.5, spaceBetween: '16'},
            550: {slidesPerView: 7, spaceBetween: '16'},
            600: {slidesPerView: 8, spaceBetween: '16'},
            700: {slidesPerView: 9, spaceBetween: '16'},
            760: {slidesPerView: 10, spaceBetween: '16'},
            1400: {slidesPerView: 10, spaceBetween: '32'},
          }}
        >
          {enableSwiper ? slides : 'Loading...'}
        </Swiper>
      </div>
    </div>
  );
};

export default CollectionList;
