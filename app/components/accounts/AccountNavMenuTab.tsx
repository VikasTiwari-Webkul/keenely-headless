import {AccountOverviewRouteList} from '@keenly/utils/contant';
import {isValidArray} from '@keenly/utils/helper';
import Typography from '../elements/Typography';
import {Link} from '@remix-run/react';
import { RightArrowIcon } from '../elements/Icons';

const AccountNavMenuTab = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 pb-4">
      {isValidArray(AccountOverviewRouteList) &&
        AccountOverviewRouteList.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-3xl py-2 px-4"
            >
              <Link to={item.url} className="flex justify-between items-center">
                <div>
                  <Typography variant="h4-mob" className="text-gray-800">
                    {item.title}
                  </Typography>
                </div>
                <div className="">
                  <RightArrowIcon />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AccountNavMenuTab;
