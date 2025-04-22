import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5001/playerstats")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
   
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data,setData }}>
      {children}
    </DataContext.Provider>
  );
};
