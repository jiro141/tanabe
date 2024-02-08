import React, { useContext } from "react";
import { MyContext } from "../context/MainContext";

export const About = (props) => {
  const [myState, setMyState] = useContext(MyContext);

  const handleButtonClick = (value) => {
    setMyState((prev) => ({ ...prev, data: value }));
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
          <button onClick={() => handleButtonClick(1)} className="boton">
            Dojos <br /> asociados
          </button>
          <button onClick={() => handleButtonClick(2)} className="boton">
            Asociacion <br /> Tanabe Kai
          </button>
          <button onClick={() => handleButtonClick(3)} className="boton">
            Maestro <br /> Kunio Tanabe
          </button>
        </div>
      </div>
    </div>
  );
};
