// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState({data: 1});

  return (
    <MyContext.Provider value={[myState, setMyState]}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
