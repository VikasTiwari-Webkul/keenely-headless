import {redirect, type ActionFunctionArgs} from '@shopify/remix-oxygen';
import Typography from '@keenly/components/elements/Typography';
import {AccountRegistrationForm} from '@keenly/components/accounts/AccountRegistrationForm';
import InputField from '@keenly/components/elements/InputField';
import {ButtonComponent} from '@keenly/components/elements/Buttons';
import AccountLoginButton from '@keenly/components/accounts/AccountLoginButton';
import CollectionListAtAccount from '@keenly/components/accounts/FeaturedCollections';
import { useFetcher } from '@remix-run/react';
import { useEffect } from 'react';

export async function loader() {
  return null;
}

export async function action({context}: ActionFunctionArgs) {
  return null;
}

export const AccountRegistrationAtMobile = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 p-4 desk-sec:hidden desk-pri:hidden">
      <Typography variant="h2-mob" className="text-center">
        Create Account
      </Typography>
      <div className="w-full">
        <AccountRegistrationForm />
      </div>
    </div>
  );
};
export const AccountRegistrationAtDesktop = () => {
  return (
    <div className="w-full flex justify-center mt-24 mobile:hidden tablet:hidden">
      <div className="w-[30%] flex flex-col gap-y-4">
        <Typography variant="h1">Sign up</Typography>
        <div className="flex flex-col gap-y-5 relative">
          <Typography variant="p2">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </Typography>
          <InputField
            type="text"
            placeholder="Enter the First Name"
            name="first_name"
            label="First Name"
            className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
          />
          <InputField
            type="text"
            placeholder="Enter the Last Name"
            name="first_name"
            label="Last Name"
            className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
          />
          <InputField
            type="email"
            placeholder="Enter the Email"
            name="email"
            label="Email"
            isRequired={true}
            className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
          />
          <InputField
            type="password"
            placeholder="Enter the Password"
            name="password"
            label="Password"
            isRequired={true}
            className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
          />
          <InputField
            type="text"
            placeholder="Enter the Phone Number"
            name="phone_number"
            label="Phone"
            className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
          />

          <ButtonComponent variant="contained" className="mt-4 font-medium">
            Sign up
          </ButtonComponent>
        </div>
        <AccountLoginButton />
      </div>
    </div>
  );
};

export default function Register() {
  const {load, data} = useFetcher();

  useEffect(() => {
    load('/api/collections');
  }, []);
  
  return (
    <>
      <CollectionListAtAccount data ={data} />
      <AccountRegistrationAtMobile />
      <AccountRegistrationAtDesktop />
    </>
  );
}
