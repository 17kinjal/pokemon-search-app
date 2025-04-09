import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-gray-50 w-full shadow-md text-white py-2.5 px-5 h-16 flex justify-center items-center">
      {children}
    </header>
  );
};

export default Header;