import React, { createContext, useContext, useState } from "react";
import playerData from "./server/playerstats.json";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(playerData); // Initialize state with the seeded data

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
