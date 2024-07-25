import {ButtonComponent} from '../elements/Buttons';
import Typography from '../elements/Typography';
import AccountFieldHeadingSection from './AccountFieldHeadingSection';

const AccountAddressInfo = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="w-full py-4 border-b border-gray-200">
          <Typography variant="h4-mob" className="text-center">
            Address Book
          </Typography>
        </div>

        <AccountFieldHeadingSection
          title="You have no configured addresses."
          subTitle="Goto “Address Book” to configure them!"
        />

        <ButtonComponent onClick={() => {}} variant="fill" className="mt-2">
          <Typography variant="h6">Manage Address</Typography>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AccountAddressInfo;
