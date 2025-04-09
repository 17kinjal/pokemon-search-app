import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-none flex-grow outline-none font-semibold tracking-wider text-gray-600 text-base bg-white ${className || ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;