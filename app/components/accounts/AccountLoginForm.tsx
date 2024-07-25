import Typography from '../elements/Typography';
import InputField from '../elements/InputField';
import {Link} from '@remix-run/react';
import {ButtonComponent} from '../elements/Buttons';
import { useState } from 'react';

export const AccountLoginForm = () => {
  const [loading,setLoading] = useState(false);
  return (
    <form className="w-full flex flex-col gap-y-4">
      <Typography variant="p2-mob">
        If you have an account, sign in with your email address.
      </Typography>
      <InputField
        label="Email"
        placeholder="Enter your email"
        type="email"
        name="email"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
        labelStyle="font-noraml"
        isRequired={true}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        name="password"
        className="w-full border border-gray-200 rounded bg-white !text-[0.875rem] !leading-[1.5rem]"
        isRequired={true}
      />
      <Link to="/account/forgetpassword" className="block w-max">
        <Typography className="!text-[0.875rem] !leading-[1.5rem] text-blue-col">
          Forget Your Password?
        </Typography>
      </Link>
      <ButtonComponent variant="contained" className="font-medium" isLoading={loading} onClick={() => setLoading(true)}>
        Login
      </ButtonComponent>
    </form>
  );
};

