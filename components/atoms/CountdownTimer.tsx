import React from 'react';

interface CountdownTimerProps {
  value: number;
  unit: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ value, unit }) => {
  return (
    <div className="relative h-10 w-[105px]">
      <div className="absolute inset-0 bg-orange-50 rounded-3xl" />
      <div className="flex absolute inset-0 justify-center items-center">
        <span className="font-bold text-amber-500">
          <span className="text-xl">{value}</span>
          <span className="text-sm">{unit}</span>
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;