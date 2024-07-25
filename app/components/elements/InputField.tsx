import React, {useState} from 'react';
import {EyeIcon} from './Icons';

interface InputFieldProps {
  label?: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelStyle?: string;
  isRequired?: boolean;
}

const InputField = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  className,
  labelStyle = '',
  isRequired,
}: InputFieldProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="form-group relative">
      {label && (
        <label
          htmlFor="input-field"
          className={`font-inter text-[0.875rem] leading-[1.5rem] ${labelStyle}`}
        >
          {label} {isRequired && <span className="text-red-600">*</span>}
          <br />
        </label>
      )}
      <input
        type={isShowPassword ? 'text' : type}
        name={name}
        className={`border border-gray-400 bg-gray-50 p-2.5 outline-none h-[2.68rem] text-p2 font-inter font-normal placeholder:text-gray-800 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === 'password' && (
        <span
          className="absolute right-4 top-1/2 cursor-pointer"
          onClick={() => setIsShowPassword((isShowPassword) => !isShowPassword)}
        >
          <EyeIcon type={isShowPassword ? 'filled' : 'outlined'} />
        </span>
      )}
    </div>
  );
};

export default InputField;
