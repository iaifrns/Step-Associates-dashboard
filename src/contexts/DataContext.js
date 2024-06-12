import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [estimates, setEstimates] = useState([]);
  const [selectedEstimate, setSelectedEstimate] = useState({});

  const addEstimate = (newEstimate) => {
    const newArray = [...estimates, newEstimate];
    setEstimates(newArray);
  };

  const deleteEstimate = (id) => {
    let newArray = [];
    estimates.map((item) => {
      if (item.id != id) {
        newArray.push(item);
      }
    });
    setEstimates(newArray);
  };

  return (
    <DataContext.Provider value={{ estimates, addEstimate, deleteEstimate, selectedEstimate, setSelectedEstimate }}>
      {children}
    </DataContext.Provider>
  );
};
