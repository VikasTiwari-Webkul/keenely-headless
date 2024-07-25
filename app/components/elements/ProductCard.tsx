import {Image} from '@shopify/hydrogen';
import Typography from './Typography';
import type {StorefrontAPI} from 'storefrontapi.generated';
import {Link} from '@remix-run/react';
import Thumbnails from './Thumbnail';
import {getFormattedPrice, isValidArray, isValidObject} from '~/utils/helper';
import BadgeRating from './BadgeRating';

export interface IProductCard {
  product: Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle'> & {
    priceRange: {
      minVariantPrice: Pick<StorefrontAPI.MoneyV2, 'amount' | 'currencyCode'>;
    };
    images: {
      nodes: Array<
        Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
      >;
    };

    variants: {
      nodes: Array<
        Pick<StorefrontAPI.ProductVariant, 'id' | 'image' | 'title'>
      >;
    };
  };
}

export const ProductCard = ({product}: IProductCard) => {
  const price =
    getFormattedPrice(
      Number(product?.priceRange?.minVariantPrice?.amount),
      product?.priceRange?.minVariantPrice?.currencyCode,
    ) ?? getFormattedPrice(0, 'USD');

  let variantStr = '';

  if (isValidArray(product?.variants?.nodes)) {
    product.variants.nodes.forEach((item, index) => {
      if (item.title === 'Default Title') {
        return null;
      }
      variantStr += `${item.title}${
        index === product?.variants?.nodes.length - 1 ? '' : ','
      }`;
    });
  }

  return (
    <div className=" bg-white w-full relative desk-sec:h-[22.5rem] tablet:h-[15.43rem] mobile:h-[13.3125rem]">
      <Link
        to={`products/${product.handle}`}
        className="flex flex-col h-full"
      >
        <div className="relative overflow-hidden rounded-t-md">
          <Thumbnails
            data={product.images.nodes[0]}
            width={100}
            height={100}
            alt={''}
            className="object-contain w-full  hover:scale-110 duration-300 rounded-t-md"
          />
          <div className="absolute bottom-2 left-2">
            <BadgeRating ratingCount={4.4} />
          </div>
        </div>
        <div className="w-full flex flex-col p-2 gap-y-1.5 bg-white  items-start justify-between text-start desk-sec:py-4 desk-sec:px-2 desk-sec:gap-y-2 desk-sec:-xl rounded-b-md">
          <div className="w-full line-clamp-2">
            <Typography
              variant="h4-mob"
              className="text-gray-950 w-full min-h-8 desk-sec:text-h5 desk-sec:min-h-11"
            >
              {product.title}
            </Typography>
          </div>
          <Typography
            variant="p3-mob"
            className="h-[15px] truncate w-full text-gray-800 desk-sec:text-p2 desk-sec:h-[19px]"
          >
            {variantStr}
          </Typography>
          <Typography
            variant="h4-mob"
            className="text-gray-950 h-[17px] desk-sec:text-h3 desk-sec:h-6"
          >
            {price}
          </Typography>
        </div>
      </Link>
    </div>
  );
};
