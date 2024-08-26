import React from "react";
import { useContext, useState } from "react";

const Context = React.createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <Context.Provider value={{ activeTab, setActiveTab }}>{children}</Context.Provider>
  );
};

export const useTab = () => {
  return useContext(Context);
};

export default Context;
