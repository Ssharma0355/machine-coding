import React, { useState } from "react";
import Profile from "./Profile";
import Interset from "./Interset";
import Settings from "./Settings";

const TabForms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name:"",
    age:"",
    email:"",
    interset:["coding", "DSA"],
    theme:""
  })
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
        {
      name: "Settings",
      component: Settings,
    },
        {
      name: "Settings",
      component: Settings,
    },
     {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveComponent = Tabs[activeTab].component;

  return (
    <div>
      <h1>Tab Forms </h1>
      <div className="heading-container">
          {Tabs.map((t, index) => <div key={index} onClick={()=> setActiveTab(index)} className="headings">{t.name}</div>)}
      </div>

      <div className="tab-container"><ActiveComponent data={data} setData={setData} /></div>
      
    </div>
  );
};

export default TabForms;
