// components/ResizableTabs.js
import React, { useState } from "react";

const ResizableTabs = () => {
  const [tabs, setTabs] = useState(["Tab 1", "Tab 2", "Tab 3"]);

  const addTab = () => {
    const newTab = `Tab ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
  };

  return (
    <div className="tabContainer">
      {tabs.map((tab, index) => (
        <div key={index} className="tab">
          {tab}
        </div>
      ))}
      <div className="addTab" onClick={addTab}>
        +
      </div>
    </div>
  );
};

export default ResizableTabs;
