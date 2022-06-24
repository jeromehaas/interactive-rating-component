import { productionBrowserSourceMaps } from "next.config";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [ rating, setRating ] = useState(null);
  const [ error, setError ] = useState(null);

  return (
    <AppContext.Provider value={{
      rating, setRating,
      error, setError
    }}> { children }</AppContext.Provider>
  );

};