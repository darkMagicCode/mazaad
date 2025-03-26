import React from 'react';

import { UserInsidesProps } from './UserInsides.types';

import './UserInsides.css';
import Image from 'next/image';
import userTick from '@/public/icons/user-tick.svg';


export const UserInsides: React.FC<UserInsidesProps> = () => {
    return   <>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <div className="flex relative flex-col justify-center items-center bg-orange-50 rounded-2xl h-[59px] w-[108px]">
      <div className="flex gap-1.5 items-center">
        <div>
          <Image  width={20} height={20} src={userTick} className="" alt="" />
        </div>  
          
        <div className="flex flex-col">
          <div className="text-sm font-bold text-neutral-700">5</div>
          <div className="text-xs text-amber-500">Following</div>
        </div>
      </div>
    </div>
  </>
};
