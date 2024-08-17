import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [userID, setUserID] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userID, setUserID }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
