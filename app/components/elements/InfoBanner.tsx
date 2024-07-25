import {Link} from '@remix-run/react';
import Typography from './Typography';
import {RightArrowIcon} from './Icons';
import { variantsMapping } from './Typography';

export interface IInfoBannerProps {
  title: string;
  subHeading: string;
  url: string;
  className?: string;
  titleVariantStyle?:string;
  subHeadingStyle?:string;
  gapBtwTitle?: string;
}

export const InfoSection = ({ title, subHeading, url, className,titleVariantStyle = '!text-h3',subHeadingStyle = '!text-p2',gapBtwTitle = 'gap-y-2' }: IInfoBannerProps) => {
  return (
    <div className={`w-full py-[1.18rem] px-[0.75rem] bg-white/90 opacity-90 absolute bottom-0 rounded-b-lg ${className}`}>
      <div className={`flex justify-between items-center`}>
        <div className={`flex flex-col ${gapBtwTitle} items-start desk-pri:gap-y-2 desk-sec:gap-y-2  line-clamp-1 w-full`}>
          <Typography  className={`text-gray-950 ${titleVariantStyle} line-clamp-1`}>
            {title}
          </Typography>
          <Typography  className={`text-gray-950 ${subHeadingStyle} line-clamp-1`}>
            {subHeading}
          </Typography>
        </div>
        <div className="p-2">
          <Link to={url}>
            <RightArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
