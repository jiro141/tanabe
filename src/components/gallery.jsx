import { Image } from "./image";
import React, { useContext, useState } from "react";
import Map from "./Map";
import { MyContext } from "../context/MainContext";
import { Ubicacion } from "./Ubicacion";
import { Historia } from "./Historia";
import { Asociacion } from "./Asociacion";
import LocationSelector from "./LocationSelector";
import MapComponent from "./MapComponent";
import MapWithPointsOfInterest from "./MapWithPointsOfInterest";
import DojoInfoComponent from "./DojoInfoComponent ";
import Prueba from "./Prueba";
import { dojos } from "./Dojos";
export const Gallery = (props) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);
  const renderHeaderText = () => {
    switch (myState.data) {
      case 1:
        return language === "us"
          ? "WHERE ARE OUR DOJOS"
          : "DÓNDE ESTÁN NUESTROS DOJOS";
      case 2:
        return language === "us"
          ? "BRIEF HISTORICAL REVIEW"
          : "BREVE RESEÑA HISTÓRICA";
      default:
        return "Kunio Tanabe";
    }
  };

  const dojosByCity = {};

  dojos.forEach((dojo) => {
    const { city } = dojo;
    if (!dojosByCity[city]) {
      dojosByCity[city] = [];
    }
    dojosByCity[city].push(dojo);
  });

  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            {renderHeaderText()}
          </h2>
        </div>

        <div className="text-center">
          {myState.data === 1 ? (
            <>
              <LocationSelector
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
              />
              <DojoInfoComponent
                dojosByCity={dojosByCity}
                city={selectedCity}
              />
              <MapComponent city={selectedCity} />
              {/* <Map city={selectedCity} /> */}
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
