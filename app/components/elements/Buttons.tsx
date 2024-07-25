import React from 'react';
import {Link} from '@remix-run/react';
import Typography from './Typography';
import {ButtonVariantType} from './types';
import { ArrowIcon } from './Icons';

export interface IShopNowBtnProps {
  to: string;
  size?: 'small' | 'medium' | 'large';
}
export const ShopNowBtn = ({to}: IShopNowBtnProps) => {
  return (
    <Link
      to={to}
      className={`block w-full px-4 py-3 bg-black rounded tablet:px-[1.36rem] tablet:py-[0.86rem] tablet:rounded-lg desk-pri:px-[2.376rem] desk-pri:py-6 desk-pri:rounded-xl
        desc-sec:px-[1.95rem] desk-sec:py-[1.23rem] desk-sec:rounded-xl hover:scale-[1.005] duration-300  hover:bg-gray-800 hover:shadow-md
        `}
    >
      <Typography
        variant="label-mob"
        className="text-white font-medium tablet:font-semibold tablet:text-[1.06rem] tablet:leading-[1.305rem] desk-pri:text-[1.875rem] desk-pri:leading-[2.26rem]
        desk-sec:text-[1.54rem] desk-sec:leading-[1.87rem] text-center
        "
      >
        Shop Now
      </Typography>
    </Link>
  );
};

interface IButtonComponentProps {
  onClick?: () => void;
  className?: string;
  type?: string;
  label?: string;
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'fill';
  color?: string;
  isLoading?: boolean;
}

export const ButtonComponent: React.FC<IButtonComponentProps> = ({
  onClick,
  className,
  type,
  children,
  label = '',
  variant = 'contained',
  isLoading
}) => {
  const variantStyle = {
    contained: `bg-gray-950 text-white rounded-2xl px-4 py-2.5`,
    outlined: `bg-gray-50 text-950 rounded-2xl px-4 py-2.5 border border-gray-600`,
    fill:`bg-gray-50 text-950 rounded-2xl px-4 py-2.5`
  };

  const style = variantStyle[variant] || '';
    
  return (
    <button
      onClick={onClick}
      className={`py-3 px-2.5 text-body1 font-inter ${style} ${className} hover:scale-[1.005] duration-300 hover:shadow-md justify-center flex`}
      aria-label={label}
    >
      {isLoading ? "Loading..." :children}
    </button>
  );
};


export interface ITabButtonProps {
  title: string;
  onClick: () => void;
}


export const TabButton = ({title,onClick }:ITabButtonProps) => {
  return (
    <div className='w-full p-2.5 flex justify-between items-center border border-gray-200 rounded cursor-pointer' onClick={onClick}>
      <Typography variant='p3' className='text-gray-950'>{title}</Typography>
      <ArrowIcon></ArrowIcon>
    </div>
  )
}