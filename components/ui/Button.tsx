import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline' | 'icon'; // Added variant prop
  size?: 'default' | 'sm' | 'lg' | 'icon'; // Added size prop
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-colors';

  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800',
    icon: 'bg-transparent hover:bg-gray-100 text-gray-800', // Added icon variant
  };

  const sizeStyles = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-5 py-3 text-lg',
    icon: 'h-10 w-10', // Added icon size
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  );
}
