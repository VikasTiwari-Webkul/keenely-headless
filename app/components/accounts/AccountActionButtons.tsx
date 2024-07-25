import {ButtonComponent} from '@keenly/components/elements/Buttons';
import Typography from '@keenly/components/elements/Typography';
/**
 * It used for edit user details and changing the password
 */

export interface IAccountActionEditAndPassButton {
  onEditDetails: () => void;
  onChangePassword: () => void;
}

export const AccountActionEditAndPassButton = ({
  onEditDetails,
  onChangePassword,
}: IAccountActionEditAndPassButton) => {
  return (
    <div className="flex justify-between w-full gap-x-2">
      <ButtonComponent onClick={onEditDetails} className="w-full" variant='outlined'>
        <Typography>Edit Details</Typography>
      </ButtonComponent>
      <ButtonComponent onClick={onChangePassword} className="w-full" variant='fill'>
        <Typography>Change Password</Typography>
      </ButtonComponent>
    </div>
  );
};
