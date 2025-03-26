import Image from 'next/image';
import React from 'react';
import docsGold from '@/public/icons/docsGold.svg';

interface InfoBoxProps {
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center px-4 py-5 mt-4 w-full text-xs text-center bg-orange-50 rounded-2xl text-zinc-800">
      <div className="flex gap-2 items-center">
        {/* <div className="" /> */}
        <Image
            src={docsGold}
            alt="docs" className="flex shrink-0 self-stretch my-auto w-6 h-6"
          />
        <div className="self-stretch my-auto text-ellipsis flex" >
       
          {text}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;