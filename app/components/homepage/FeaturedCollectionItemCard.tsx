import Typography from '@keenly/components/elements/Typography';
import {ShopNowBtn} from '@keenly/components/elements/Buttons';
import Thumbnails from '@keenly/components/elements/Thumbnail';
import {Link} from '@remix-run/react';

export interface IFeaturedCollectionItemCardPros {
  title: string | React.ReactNode;
  image: string | any;
  url: string;
}

export const FeaturedCollectionItemCard = ({
  title,
  image,
  url,
}: IFeaturedCollectionItemCardPros) => {
  return (
    <>
      <div className="bg-gray-50 w-full flex flex-col tablet:rounded-2xl tablet:flex-row tablet:items-center desk-pri:flex-row desk-pri:items-center desk-pri:rounded-3xl tablet:h-[25.37rem] desk-pri:h-[44.125rem]">
        <div className="w-full py-[1.62rem] px-[1.87rem] flex flex-col justify-start gap-y-2.5 desk-pri:gap-y-[2.375rem] desk-pri:pl-16">
          <Typography
            variant="banner-txt"
            className="text-start tablet:text-heading desk-pri:text-heading-pri"
          >
            {title}
          </Typography>
          <div className="w-24 tablet:w-32 desk-pri:w-56">
            <ShopNowBtn to={url} />
          </div>
        </div>

        <div className="w-full flex justify-center tablet:pr-[1.87rem] desk-pri:pr-16 items-end h-full">
          <Thumbnails
            src={image}
            alt="feat_col_1"
            className="object-contain w-full h-full min-w-40"
          />
        </div>
      </div>
    </>
  );
};

export interface IFeaturedCollectionCardSecondaryProps {
  type: 'primary' | 'secondary';
  title: string;
  image?: any;
  url: string;
}

export const FeaturedCollectionCardSecondary = ({
  type,
  title,
  image,
  url,
}: IFeaturedCollectionCardSecondaryProps) => {
  if (type === 'primary') {
    return (
      <div className="flex w-full rounded-2xl items-center overflow-hidden">
        <div className="w-full  flex flex-col justify-start gap-y-6">
          <Typography
            variant="banner-txt"
            className="text-start text-heading-sec text-gray-800 "
          >
            {title}
          </Typography>
          <div className="w-[11.5rem]">
            <ShopNowBtn to={url} />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Thumbnails src={image} alt="feat_col_1" className="object-cover h-[36.68rem]" />
        </div>
      </div>
    );
  }

  if (type === 'secondary') {
    return (
      <div className="bg-gray-50 rounded-lg h-[17.75rem]">
        <div className="flex h-[17.75rem] items-center">
          <div className="bg-gray-50 w-full flex  rounded-2xl items-center px-6">
            <div className="w-full flex flex-col justify-start gap-y-4">
              <Typography
                variant="banner-txt"
                className="text-start text-[1.68rem] leading-[2.03rem] text-gray-800"
              >
                {title}
              </Typography>
              <div className="w-[5.66rem] block bg-black py-[9.65px] px-[15.29px] rounded hover:bg-gray-800 hover:scale-105 duration-300 cursor-pointer">
                <Link to={url} className="block rounded w-full">
                  <Typography className="text-white font-semibold">
                    Shop Now
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
          <Thumbnails
            src={image}
            alt="col_2"
            className="w-full h-full object-contain pr-3"
          />
        </div>
      </div>
    );
  }

  return <></>;
};
