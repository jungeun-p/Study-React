import React, { useState } from "react";
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    // allTabs가 없거나, allTabs가 배열이 아닐 때!
    return;
  } else {
    return {
      currentTab: allTabs[currentIndex],
      changeItem: setCurrentIndex,
      allTabs: allTabs,
    };
  }
};

export default useTabs;
