import {isValidArray} from '~/utils/helper';
import {
  TrustDollarIcon,
  TrustHeadPhoneIcon,
  TrustProductIcon,
  TrustReturnIcon,
} from '../elements/Icons';
import Typography from '../elements/Typography';
export const TrustBanner = () => {
  const trustCollection = [
    {
      id: 0,
      title: '30 Days',
      subTitle: 'Money Back Guarantee',
      icon: <TrustDollarIcon />,
    },

    {
      id: 1,
      title: '100%',
      subTitle: 'Original Products',
      icon: <TrustProductIcon />,
    },

    {
      id: 2,
      title: '15 Days',
      subTitle: 'Return Policy',
      icon: <TrustReturnIcon />,
    },

    {
      id: 3,
      title: '24x7',
      subTitle: 'Customer Supports',
      icon: <TrustHeadPhoneIcon />,
    },
  ];

  return (
    <div className="w-full h-full flex px-2 flex-col tablet:px-4 tablet:grid tablet:grid-cols-2 desk-pri:px-20 desk-pri:pt-10  desk-pri:flex-row  desk-sec:px-40 desk-sec:flex-row desk-sec:pt-10 ">
      {isValidArray(trustCollection) &&
        trustCollection.map((item) => {
          return (
            <div
              className="h-22 w-full p-4 flex items-center gap-x-4"
              key={item.id}
            >
              {item.icon}
              <div className="h-10 flex flex-col gap-y-1">
                <Typography variant="h2-mob" className="text-gray-800">
                  {item.title}
                </Typography>
                <Typography variant="h6" className="text-gray-800">
                  {item.subTitle}
                </Typography>
              </div>
            </div>
          );
        })}
    </div>
  );
};
