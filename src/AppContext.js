// AppContext.js
import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("John Doe"); // Default user value

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
