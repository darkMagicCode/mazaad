import React from 'react';
import notification from '@/public/icons/notification.svg';
import CircleIcon from '@/public/icons/CircleIcon';
import Image from 'next/image';

const UserActions: React.FC = () => {
  return (
    <div className="flex gap-8 items-center my-auto font-bold max-md:max-w-full">
      <div className="flex gap-6 items-center self-stretch my-auto text-sm text-center text-white min-w-[240px]">
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        <CircleIcon/>
        <div className="shrink-0 w-0 border border-solid bg-orange-100 border-orange-100 h-[22px]" />

        <Image loading="lazy" alt="Notification" width={24} height={24}  src={notification} className="flex shrink-0 self-stretch my-auto w-6 h-6 " />
        <div className="shrink-0 w-0 border border-solid bg-orange-100 border-orange-100 h-[22px]" />

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a4bd463335ea8b0eddd9998ddf3b22d685f27d?placeholderIfAbsent=true&apiKey=18537419d5fe4eeaabfa1c85fdb64ef1"
          className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full aspect-square"
          alt="User avatar"
        />
        <div className="flex flex-col self-stretch my-auto w-[172px]">
          <button className="flex flex-col justify-center px-4 py-3 w-full rounded-xl bg-[linear-gradient(90deg,#D20653_0%,#FF951D_100%)]">
            <div className="flex gap-1 justify-center items-center">
              <div className="flex shrink-0 self-stretch my-auto h-[18px] w-[18px]" />
              <span>Add new product</span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex gap-2.5 items-end self-stretch my-auto text-lg leading-none whitespace-nowrap text-zinc-800">
        <div className="flex shrink-0 w-6 h-6" />
        <div className="shrink-0 w-0 border border-solid bg-neutral-200 border-neutral-200 h-[22px]" />
        <div>EN</div>
      </div>
    </div>
  );
};

export default UserActions;