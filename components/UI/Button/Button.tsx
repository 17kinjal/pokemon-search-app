import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  search?: boolean;
}

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, search, ...props }, ref) => {
    const baseClasses = `
      py-3
      px-4
      bg-blue-900
      rounded-r-lg
      text-white
      h-14
      w-24
      text-base
      font-bold
      cursor-pointer
    `;

    const searchClasses = search
      ? `
        order-3
        self-end
      `
      : '';

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${searchClasses} ${className || ''}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;