import React from 'react';
import InfoBox from '../molecules/InfoBox';
import Image from 'next/image';
import eye from '@/public/icons/eye.svg';
import share from '@/public/icons/share.svg';
import docs from '@/public/icons/docs.svg';

interface QRCodeComponentProps {
  title: string;
  infoText: string;
  qrCodeSrc: any;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ title, infoText, qrCodeSrc }) => {
  return (
    <div className="flex flex-col rounded-none max-w-[407px]">
      <div className="flex flex-col p-6 w-full bg-white rounded-3xl">
        <div className='flex'>

        <h2 className="self-start text-2xl font-bold leading-none capitalize text-zinc-800">
          {title}
        </h2>
        <div className='flex gap-2 ml-auto'>
          <Image
            src={eye}
            alt="eye" className="w-6 h-6"
          />
          <Image
            src={share}
            alt="share" className="w-6 h-6"
          />  
          <Image
            src={docs}
            alt="docs" className="w-6 h-6"
          />
        </div>
        </div>
        <InfoBox text={infoText} />
        <Image
          // loading="lazy"
          src={qrCodeSrc}
          alt="QR Code"
          className="object-contain mt-4 w-full rounded-none aspect-[1.14]"
        />
      </div>
    </div>
  );
};

export default QRCodeComponent;