
import React from 'react';
import logo from '@/public/images/logo.png';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Image
      loading="lazy"
      src={logo}
      className="object-contain shrink-0 max-w-full aspect-[2.51] w-[108px]"
      alt="Company Logo"
    />
  );
};

export default Logo;