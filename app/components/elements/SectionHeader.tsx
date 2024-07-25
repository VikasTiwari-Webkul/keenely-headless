import {RightArrowIcon} from './Icons';
import Typography from './Typography';
import {Link} from '@remix-run/react';

export interface ISectionHeaderProps {
  title: string;
  className?: string;
  url: string;
  subHeading?: string;
  titleStyle?: string;
  subHeadingStyle?: string;
}

const SectionHeader = ({
  title,
  className = '',
  url,
  subHeading,
  subHeadingStyle,
  titleStyle
}: ISectionHeaderProps) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="flex flex-col">
        <Typography variant="h3-mob" className={`text-gray-800 flex items-center ${titleStyle} desk-pri:text-h3 desk-sec:!text-h2 desk-sec:!font-bold`}>
          {title}
        </Typography>
        <Typography variant="p3-mob" className={`text-gray-600 mt-1 ${subHeadingStyle}`}>
          {subHeading}
        </Typography>
      </div>
      <div className="p-2">
        <Link to={url}>
          {' '}
          <RightArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default SectionHeader;
