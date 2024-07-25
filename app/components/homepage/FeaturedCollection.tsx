import {ShopNowBtn} from '../elements/Buttons';
import {Swiper, SwiperSlide} from 'swiper/react';
import Typography from '../elements/Typography';
import Thumbnails from '../elements/Thumbnail';
import {isValidArray} from '~/utils/helper';
import {Link} from '@remix-run/react';
import {Autoplay, Pagination, Navigation, EffectFade} from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import {
  FeaturedCollectionCardSecondary,
  FeaturedCollectionItemCard,
} from './FeaturedCollectionItemCard';
import {FeaturedCollectionsData} from '~/utils/contant';
import {FeaturedCollectionsDataType} from '../elements/types';

export const FeaturedCollectionCard = () => {
  return (
    <div className="bg-gray-50 rounded-lg h-[17.75rem]">
      <div className="flex h-[17.75rem] items-center">
        <div className="bg-gray-50 w-full flex  rounded-2xl items-center px-6">
          <div className="w-full flex flex-col justify-start gap-y-4">
            <Typography
              variant="banner-txt"
              className="text-start text-[1.68rem] leading-[2.03rem] text-gray-800"
            >
              New Arrival <br /> Women Jewellery
            </Typography>
            <div className="w-[5.66rem] block bg-black py-[9.65px] px-[15.29px] rounded">
              <Link to="/" className="block rounded">
                <Typography className="text-white font-semibold">
                  Shop Now
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <Thumbnails
          src="https://cdn.shopify.com/s/files/1/0661/5557/7529/files/demo_img_1200x.png?v=1720512564&width=2000&crop=center"
          alt="col_2"
          className="w-full h-full object-contain pr-3"
        />
      </div>
    </div>
  );
};

export const FeaturedCollectionAtSecondaryDesk = () => {

  return (
    <div className="w-full gap-x-7 hidden desk-sec:flex desk-sec:justify-between h-[36.62rem]">
      <Swiper
        className="w-full flex flex-col overflow-hidden"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        navigation={true}
        effect="fade"
      >
        {isValidArray(FeaturedCollectionsData) &&
          FeaturedCollectionsData.map((item: FeaturedCollectionsDataType) => (
            <SwiperSlide className="bg-gray-50 rounded-2xl px-10" key={item.id}>
              <FeaturedCollectionCardSecondary
                type="primary"
                title={item.title}
                url={item.url}
                image={item.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="w-[33%] flex flex-col gap-y-4">
        <Swiper
          className="bg-gray-50 rounded-lg h-full w-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          navigation={true}
          effect="fade"
        >
          {isValidArray(FeaturedCollectionsData) &&
            [...FeaturedCollectionsData]
              .reverse()
              .map((item: FeaturedCollectionsDataType) => (
                <SwiperSlide key={item.id}>
                  <FeaturedCollectionCardSecondary
                    type="secondary"
                    title={item.title}
                    url={item.url}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
        </Swiper>

        <Swiper
          className="bg-gray-50 rounded-lg h-full w-full"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          navigation={true}
          effect="fade"
        >
          {isValidArray(FeaturedCollectionsData) &&
            [...FeaturedCollectionsData]
              .sort(() => Math.random() - 0.5)
              .map((item: FeaturedCollectionsDataType) => (
                <SwiperSlide key={item.id}>
                  <FeaturedCollectionCardSecondary
                    type="secondary"
                    title={item.title}
                    url={item.url}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export const FeaturedCollection = ({data}: {data: any}) => {
  const slides: any = [];

  if (isValidArray(FeaturedCollectionsData)) {
    FeaturedCollectionsData.forEach((item) => {
      slides.push(
        <SwiperSlide className="bg-gray-50 w-full tablet:rounded-2xl desk-pri:rounded-3xl desk-sec:hidden h-full tablet:h-[25.37rem]">
          <FeaturedCollectionItemCard
            title={item.title}
            url={item.url}
            image={item.image}
          />
        </SwiperSlide>,
      );
    });
  }

  return (
    <div className="w-full tablet:px-4 desk-pri:px-20 desk-sec:px-40">
      {/** Featured at the desk (1440px) && tablet(760px) */}
      <div className="block desk-sec:hidden">
        <Swiper
          className="block desk-sec:hidden h-[35.25rem] tablet:h-[25.37rem] tablet:rounded-2xl desk-pri:h-[44.125rem]"
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          navigation={true}
          effect="fade"
        >
          {slides}
        </Swiper>
      </div>

      {/** Featured at the desk (1940px) and above*/}
      <FeaturedCollectionAtSecondaryDesk />
    </div>
  );
};
