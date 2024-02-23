import React, { useContext } from "react";
import { MyContext } from "../context/MainContext";

export const About = (props) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  const handleButtonClick = (value) => {
    setMyState((prev) => ({ ...prev, data: value }));
  };

  const renderButtons = () => {
    if (language === "us") {
      return (
        <>
          <button onClick={() => handleButtonClick(1)} className="boton">
            Associated <br /> Dojos
          </button>
          <button onClick={() => handleButtonClick(2)} className="boton">
            Tanabe Kai <br /> Organization
          </button>
          <button onClick={() => handleButtonClick(3)} className="boton">
            Kancho <br /> Kunio Tanabe
          </button>
        </>
      );
    } else if (language === "es") {
      return (
        <>
          <button onClick={() => handleButtonClick(1)} className="boton">
            Dojos <br /> Asociados
          </button>
          <button onClick={() => handleButtonClick(2)} className="boton">
            Organización <br /> Tanabe Kai
          </button>
          <button onClick={() => handleButtonClick(3)} className="boton">
            Kancho <br /> Kunio Tanabe
          </button>
        </>
      );
    }
  };

  return (
    <div
      id="about"
      style={{
        background: "linear-gradient(to right, #922422 0%, #c60502 100%)",
      }}
    >
      <div className="container">
        <div className="botones">
          {renderButtons()}
        </div>
      </div>
    </div>
  );
};
