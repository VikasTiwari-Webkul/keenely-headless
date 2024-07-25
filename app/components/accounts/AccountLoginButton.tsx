import { ButtonComponent } from "../elements/Buttons";
import Typography from "../elements/Typography";

const AccountLoginButton = () => {
  return (
    <div className="flex flex-col py-4 gap-y-4">
      <Typography variant="p2-mob" className="text-gray-800">If you have an account, sign in with your email address.</Typography>
      <ButtonComponent className="!bg-gray-50 !text-gray-950 !font-medium">Sign In</ButtonComponent>
    </div>
  )
}

export default AccountLoginButton;