import React, { useEffect, useRef, useState } from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Home', isActive: true },
    { label: 'Blog', isActive: false },
    { label: 'Gifts', isActive: false },
  ];

  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const activeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, []);

  return (
    <nav className=" relative flex gap-10 items-start my-auto text-lg leading-none whitespace-nowrap text-zinc-500">
      {navItems.map((item, index) => (
        <div
          key={index}
          ref={item.isActive ? activeRef : null}
          className={`relative ${item.isActive ? 'font-bold text-pink-700' : ''}`}
        >
          {item.label}
        </div>
      ))}
      <div
        className="absolute bottom-[-120%] h-1.5 bg-pink-700 rounded-lg transition-all duration-300"
        style={{ left: underlineStyle.left, width: underlineStyle.width }}
      />
    </nav>
  );
};

export default Navigation;
