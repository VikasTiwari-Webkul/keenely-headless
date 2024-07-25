import InputField from '@keenly/components/elements/InputField';
import {ButtonComponent} from '../elements/Buttons';
import AccountLoginButton from './AccountLoginButton';

export const AccountRegistrationForm = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <InputField
        label="First Name"
        placeholder="Enter the First Name"
        name="first_name"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
      />
      <InputField
        label="Last Name"
        placeholder="Enter the Last Name"
        name="last_name"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
      />
      <InputField
        label="Email"
        placeholder="Enter the Email"
        isRequired={true}
        name="email"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
      />
      <InputField
        label="Phone"
        placeholder="Enter the Phone"
        type={'text'}
        name="phone_number"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
      />
      <InputField
        label="Password"
        placeholder="Enter the Password"
        isRequired={true}
        type={'password'}
        name="password"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
      />
      <ButtonComponent variant="contained" className="mt-4 font-medium">
        Create An Account
      </ButtonComponent>
      <AccountLoginButton />
    </div>
  );
};
