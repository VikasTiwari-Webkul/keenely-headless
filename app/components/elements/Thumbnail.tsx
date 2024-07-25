import {Image} from '@shopify/hydrogen';
import PlaceHolder from '@keenly/assets/images/placeholder_img.png';
import type {StorefrontAPI} from 'storefrontapi.generated';

export interface IThumbnails {
  data?:Array<Pick<StorefrontAPI.Image,'id' | 'url' | 'altText' | 'width' | 'height'>> | any;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  src?: string;
}

const Thumbnails = ({data, width, height, alt,className,src}: IThumbnails) => {
  return (
    <Image
      data={data}
      alt={alt}
      height={height}
      width={width}
      src ={src}
      className={className}
    />
  );
};

export default Thumbnails;
