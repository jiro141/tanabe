// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState({ data: 1 });
  const [language, setLanguage] = useState("es");
  console.log(language);
  
  return (
    <MyContext.Provider value={[myState, setMyState, language, setLanguage]}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
