import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UserGitStorage = ({ children }) => {
  const [userGit, setUserGit] = useState(null)
  return (
    <GlobalContext.Provider value={{ userGit, setUserGit }}>
      {children}
    </GlobalContext.Provider>
  )
};
