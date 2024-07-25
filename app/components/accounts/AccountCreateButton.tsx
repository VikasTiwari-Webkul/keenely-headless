import {Link} from '@remix-run/react';
import Typography from '../elements/Typography';
import {ButtonComponent} from '../elements/Buttons';

export const AccountCreateButton = () => {
  return (
    <div className="w-full flex flex-col text-center gap-y-4 tablet:p-4 mobile:p-4">
      <Typography variant="h2-mob" className="text-gray-800">
        New Account
      </Typography>
      <Typography variant="p2-mob" className="text-gray-800 font-normal">
        Creating an account has many benefits: check out faster, keep more than
        one address, track orders and more.
      </Typography>
      <ButtonComponent className="!bg-gray-50 !text-gray-950 !font-medium">
        <Link to="/account/register">Create Account</Link>
      </ButtonComponent>
    </div>
  );
};
