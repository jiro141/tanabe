import React, { useContext } from "react";
import { MyContext } from "../context/MainContext";

export const Header = (props) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  const getHeaderText = () => {
    if (language === "es") {
      return props?.data?.spanish.title; // Accessing Spanish title
    } else {
      return props.data.english.title; // Accessing English title
    }
  };

  return (
    <>
      <header id="header">
        <div className="vertical-h1">
          <h1>以心伝心</h1>
        </div>
        <div className="vertical-h1">
          <h1>有難う</h1>
        </div>
        <div className="horizontal-h2">
          <h2>"{getHeaderText()}"</h2>
        </div>
        <h2 className="horizontal-h2">Kunio Tanabe Takizawa</h2>
        <div className="intro"></div>
      </header>
    </>
  );
};
