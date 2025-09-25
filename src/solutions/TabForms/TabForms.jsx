import React from "react";
import Profile from "./Profile";
import Interset from "./Interset";
import Settings from "./Settings";

const TabForms = () => {
  const Tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interset,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  return (
    <div>
      <h1>Tab Forms </h1>
      {Tabs.map(t => <div>{t.name}</div>)}
      
    </div>
  );
};

export default TabForms;
