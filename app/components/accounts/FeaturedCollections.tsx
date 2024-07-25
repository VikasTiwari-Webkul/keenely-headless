import {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {isValidArray} from '~/utils/helper';
import Typography from '../elements/Typography';
import { Link } from '@remix-run/react';

const CollectionListAtAccount = ({
  data,
}: {
  data: [FeaturedCollectionFragment] | any;
}) => {
  return (
    <div className="w-full flex justify-center fixed bg-white/90 z-50 h-12 mobile:hidden tablet:hidden">
      <div className="flex justify-center gap-x-2.5">
        {isValidArray(data?.collectionList) &&
          data?.collectionList.map((item: FeaturedCollectionFragment) => {
            return (
              <div key={item.id} className='py-1.5 px-2 underline-hover'>
                <Link to={`collections/${item.handle}`}>
                <Typography variant='p1' className='font-normal hover:text-gray-600'>{item.title}</Typography>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CollectionListAtAccount;
