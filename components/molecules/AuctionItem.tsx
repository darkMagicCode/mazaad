import React from 'react';
import CountdownTimer from '../atoms/CountdownTimer';
import Image from 'next/image';
import heart from '@/public/icons/fillHeart.svg';

interface AuctionItemProps {
  imageUrl: any;
  title: string;
  startingPrice: number;
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
}

const AuctionItem: React.FC<AuctionItemProps> = ({
  imageUrl,
  title,
  startingPrice,
  daysLeft,
  hoursLeft,
  minutesLeft
}) => {
  return (
    <div className="relative p-2 w-full bg-white h-[143px] rounded-[34px] ">
      <div className="flex gap-6">
        <Image width={0} height={0}   src={imageUrl} alt="" className=" " />
        <div className="flex flex-col gap-2 py-2 flex-[grow]  max-w-screen">
          <div className="leading-normal text-[capitalize] text-zinc-800 text-wrap text-sm md:text-lg">
            {title}
          </div>
          <div className="font-bold leading-normal text-[capitalize] text-zinc-800">
            <span className="text-sm md:text-lg text-zinc-500">starting price</span>
            <span className="text-sm md:text-2xl font-bold text-zinc-800">
              {startingPrice} EGP
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-lg leading-normal text-zinc-500">
              Lot starts in
            </div>
            <div className="flex gap-4 items-start">
                <CountdownTimer value={daysLeft} unit="days" />
                <CountdownTimer value={hoursLeft} unit="hours" />
                <CountdownTimer value={minutesLeft} unit="minutes" />
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-10 h-10">
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-3xl">
            <div>
              <Image
                src={heart}
                alt=""  
                width={0}
                height={0}
                // className="w-10 h-10 rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[8%] md:bottom-[5%] left-[9%] md:left-[5%]">
          <div className="flex justify-center items-center  text-[8px]  md:text-xs leading-normal text-center text-white bg-pink-700 h-[37px] rounded-[33.804px_0px] w-[64px] md:w-[114px]">
            Live auction
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItem;