import Thumbnails from '@keenly/components/elements/Thumbnail';
import Typography from '../elements/Typography';
import ModelPlaceHolder from '@keenly/assets/images/model_img.png';

const PopularCategoryCard = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-y-1 desk-pri:gap-y-3 desk-sec:gap-y-3">
      {/* @TODO Need to update this component with the Thumbnails Component */}
      <img
        src={ModelPlaceHolder}
        width={100}
        height={100}
        alt="model_img"
        className="rounded w-full h-full object-cover desk-pri:rounded-lg desk-pri:h-[11.75rem] tablet:h-[6.75rem] mobile:h-20 desk-sec:h-[14.6rem]"
      />
      <div className="flex justify-center w-full h-[1.06rem] items-center tablet:h-6">
        <Typography
          variant="p2-mob"
          className="text-gray-950 tablet:h1-mob desk-pri:text-p1 desk-sec:text-h3 desk-sec:font-semibold"
        >
          Men
        </Typography>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
