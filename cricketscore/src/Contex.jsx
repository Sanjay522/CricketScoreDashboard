// DataContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const[dataTeams,setDataTeams] = useState([])
  // const{}

  useEffect(() => {
    fetch("http://localhost:5001/playerstats")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setFilter(fetchedData);
        // setDataTeams(fetchedData.teams)
        // console.log(fetchedData.series);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, filter, dataTeams , setFilter,setData,setDataTeams }}>
      {children}
    </DataContext.Provider>
  );
};
