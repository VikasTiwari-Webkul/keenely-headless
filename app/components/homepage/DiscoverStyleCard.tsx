import Thumbnails from '@keenly/components/elements/Thumbnail';
import {InfoSection} from '@keenly/components/elements/InfoBanner';
import {Link} from '@remix-run/react';

export const DiscoverStyleCard = () => {
  return (
    <div className="w-full ">
      <div className="rounded-lg relative overflow-hidden">
        <Link to={'/'} className="block">
          <Thumbnails
            src={
              'https://cdn.shopify.com/s/files/1/0642/3868/2266/files/dis_ver_750x.jpg?v=1721019799'
            }
            width={302}
            height={418}
            alt="dis_img"
            className="rounded-lg mobile:h-[418px] hover:scale-110 duration-300"
          />
        </Link>
        <Link className="block" to={'/'}>
          <InfoSection
            title={'Buy 1 Get 1 Free'}
            subHeading="Cosmatic Products"
            url="/"
            titleVariantStyle="!text-h3 !font-semibold"
            subHeadingStyle="!text-p2 !font-normal"
          />
        </Link>
      </div>
    </div>
  );
};

export const DiscoverStyleSectionCard = () => {
  return (
    <div className="w-full rounded-lg relative hover:scale-[1.01] duration-300 cursor-pointer">
      <Link to="/" className="block">
        <Thumbnails
          src={
            'https://cdn.shopify.com/s/files/1/0642/3868/2266/files/dis_banner_750x.png?v=1721030737'
          }
          width={344}
          height={230}
          alt="dis_banner"
          className="rounded-lg w-full h-full"
        />
        <InfoSection
          title="Mens Fashion"
          subHeading="New arrivals for men clothings"
          url={'/'}
          className="py-[6px] px-[12px] h-[52px] desk-pri:px-[0.75rem] desk-pri:py-[1.187rem] desk-pri:h-[5.56rem] desk-sec:px-[0.75rem] desk-sec:py-[1.18rem] desk-sec:h-[5.56rem]"
          titleVariantStyle="!text-h3-mob !font-semibold desk-pri:!text-h3 desk-pri:!font-semibold desk-sec:!text-h3"
          subHeadingStyle="!text-p3-mob desk-pri:!text-p2 !font-normal desk-sec:!text-p2"
          gapBtwTitle="gap-y-0.5"
        />
      </Link>
    </div>
  );
};
