import { Image } from "./image";
import React, { useContext, useState } from "react";
import Map from "./Map";
import { MyContext } from "../context/MainContext";
import { Ubicacion } from "./Ubicacion";
import { Historia } from "./Historia";
import { Asociacion } from "./Asociacion";
import LocationSelector from "./LocationSelector";
export const Gallery = (props) => {
  const [myState, setMyState] = useContext(MyContext);
  console.log(myState, "datos");
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            {myState.data === 1
              ? "DONDE ESTAN NUESTROS DOJOS"
              : myState.data === 2
              ? "HISTORIA"
              : "Kunio Tanabe"}
          </h2>
        </div>

        <div className="text-center">
          {myState.data === 1 ? (
            <>
              <LocationSelector selectedCity={selectedCity} setSelectedCity={setSelectedCity}  />
              <Map city={selectedCity} />
            </>
          ) : myState.data === 2 ? (
            <Asociacion />
          ) : (
            <Historia />
          )}
        </div>
      </div>
    </div>
  );
};
