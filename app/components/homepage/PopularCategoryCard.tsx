import Thumbnails from '@keenly/components/elements/Thumbnail';
import Typography from '../elements/Typography';
import {Link} from '@remix-run/react';

export interface IPopularCategoryCard {
  title: string;
  url: string;
  image: any;
}

const PopularCategoryCard = ({title, url, image}: IPopularCategoryCard) => {
  return (
    <div className="w-full flex flex-col justify-center gap-y-1 desk-pri:gap-y-3 desk-sec:gap-y-3 tablet:gap-y-1.5">
      <Link className="block" to={url}>
        <Thumbnails
          src={image}
          width={100}
          height={100}
          alt="model_img"
          className="rounded w-full h-full object-cover desk-pri:rounded-lg hover:scale-[1.02] duration-300"
        />
      </Link>
      <div className="flex justify-center w-full h-[1.06rem] items-center tablet:h-6">
        <Link className="block" to={url}>
          <Typography
            variant="p2-mob"
            className="text-gray-950 tablet:h1-mob desk-pri:text-p1 desk-sec:text-h3 desk-sec:font-semibold"
          >
            {title}
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
