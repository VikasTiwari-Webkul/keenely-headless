import Typography from '../elements/Typography';
import {AccountActionEditAndPassButton} from './AccountActionButtons';
import AccountAddressInfo from './AccountAddressInfo';
import AccountFieldHeadingSection from './AccountFieldHeadingSection';

const AccountInfoSection = () => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="w-full py-4 flex items-center justify-center border-b border-gray-200">
        <Typography variant="h4-mob">Account Information</Typography>
      </div>

      <div className="w-full flex flex-col gap-y-1">
        <AccountFieldHeadingSection title="Name" subTitle="Tester Webkul" />
        <AccountFieldHeadingSection title="Email" subTitle="admin@webkul.com" />
        <AccountActionEditAndPassButton
          onEditDetails={() => {}}
          onChangePassword={() => {}}
        />
      </div>
      <div className="py-4">
        <AccountAddressInfo />
      </div>
    </div>
  );
};

export default AccountInfoSection;
