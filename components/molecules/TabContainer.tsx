import React, { useState } from 'react';
import TabButton from '../atoms/TabButton';

const tabs = [
  { id: 'products', label: 'Products' },
  { id: 'articles', label: 'Articles' },
  { id: 'reviews', label: 'Reviews' },
];

const TabContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="flex gap-2.5 h-[35px] items-start text-sm text-center capitalize whitespace-nowrap">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default TabContainer;