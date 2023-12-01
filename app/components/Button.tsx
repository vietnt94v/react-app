'use-client';
import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'lg';
  disable?: boolean;
}

interface ButtonStyle {
  variant?: string;
  size?: string;
  disabled?: boolean;
}

const getButtonClassName = ({
  variant,
  size,
  disabled,
}: ButtonStyle): string => {
  let className = `px-3 py-1 rounded ${
    disabled ? 'cursor-not-allowed opacity-80' : 'transition'
  } `;

  const classNameObj = {
    primary:
      'bg-blue-500 hover:bg-blue-400 disabled:hover:bg-blue-500 text-white',
    secondary:
      'bg-gey-500 hover:bg-gray-400 disabled:hover:bg-gray-500 text-black',
    sm: 'text-sm',
    lg: 'text-lg',
  };

  switch (variant) {
    case 'primary':
      className +=
        ' bg-blue-500 hover:bg-blue-400 disabled:hover:bg-blue-500 text-white';
      break;
    case 'secondary':
      className +=
        ' bg-gray-500 hover:bg-gray-400 disabled:hover:bg-gray-500 text-black';
      break;
    default:
  }

  switch (size) {
    case 'sm':
      className += ' text-sm';
      break;
    case 'lg':
      className += ' text-xl';
      break;
    default:
  }

  return className;
};

const Button: FC<ButtonProps> = ({
  variant,
  size,
  disabled,
  children,
  ...rest
}) => {
  const buttonClassName = getButtonClassName({ size, variant, disabled });

  return (
    <button className={buttonClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
