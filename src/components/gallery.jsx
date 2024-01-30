import { Image } from "./image";
import React from "react";
import Map from "./Map";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Donde estan nuestros dojos</h2>
        </div>

        <div className="text-center">
          <Map />
        </div>
      </div>
    </div>
  );
};
