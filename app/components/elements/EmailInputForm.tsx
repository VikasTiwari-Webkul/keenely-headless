import {ChangeEvent} from 'react';
import InputField from './InputField';
import {ButtonComponent} from './Buttons';

const EmailInputForm = () => {
  return (
    <div className="flex h-[2.68rem] w-full">
      <InputField
        name={''}
        placeholder={'Enter your email id'}
        type={''}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        className={'p-3 rounded-l-md truncate w-full min-w-11'}
      />
      <div className="relative">
        <ButtonComponent
          type="submit"
          className={
            'rounded-r-md font-medium h-[2.68rem] flex items-center  truncate w-full rounded-l-none'
          }
          variant='contained'
        >
          Subscribe
        </ButtonComponent>
      </div>
    </div>
  );
};

export default EmailInputForm;
