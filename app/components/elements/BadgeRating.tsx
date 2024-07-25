import {StarRating} from './Icons';
import Typography from './Typography';

const BadgeRating = ({ratingCount}: {ratingCount: Number | any}) => {
  return (
    <div className="w-full bg-gray-800 rounded p-0.5">
      <div className="w-full h-4 flex items-center gap-x-0.5">
        <StarRating />
        <Typography variant="h5-mob" className="text-gray-50">
          {ratingCount}
        </Typography>
      </div>
    </div>
  );
};

export default BadgeRating;
