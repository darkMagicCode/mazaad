import React from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`gap-2.5 self-stretch  p-2 rounded-2xl border border-solid w-[108px] ${
        isActive
          ? 'font-bold text-amber-500 bg-orange-50 border-amber-500'
          : 'bg-white border-neutral-200 text-zinc-500'
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;