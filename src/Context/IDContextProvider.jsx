import React, { useState,createContext } from "react";



export const DistributorIDUpdateContext = createContext();
export const DistributorIDContext = createContext();
export const IDContextProvider = ({ children }) => {
  const [distID, setDistID] = useState(null);

  const updateDistributorID=(data)=>{
    setDistID(data)
  }
  return (
    <DistributorIDContext.Provider value={distID}>
      <DistributorIDUpdateContext.Provider value={updateDistributorID}>
          {children}
      </DistributorIDUpdateContext.Provider>
    </DistributorIDContext.Provider>
    
  );
};
