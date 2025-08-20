import { useState } from 'react';
import type { ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col h-[600px] bg-transparent">
      <div className="flex border-b mb-4 shrink-0">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-4 py-2 font-medium focus:outline-none ${
              active === idx
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActive(idx)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">{tabs[active].content}</div>
    </div>
  );
}

export default Tabs;
