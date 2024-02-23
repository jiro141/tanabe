import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import templo from "../img/temple.png";
const Prueba = () => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-72.2217608, 7.7617623]),
        zoom: 13,
      }),
    });

    const popupOverlay = new Overlay({
      element: popupRef.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    map.addOverlay(popupOverlay);

    // Ejemplo de marcador que muestra el popup
    const marker = new Overlay({
      position: [-72.223, 7.763],
      positioning: 'center-center',
      element: document.getElementById('marker'),
    });
    map.addOverlay(marker);
    marker.getElement().style.cursor = 'pointer';
    // Mostrar el popup cuando se hace clic en el marcador
    marker.getElement().addEventListener('click', () => {
      popupOverlay.setPosition(marker.getPosition());
    });

    // Ocultar el popup cuando se hace clic fuera de él
    map.on('click', () => {
      popupOverlay.setPosition(undefined);
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div>
      <div ref={mapRef} className="map" />
      <div ref={popupRef} id="popup" className="ol-popup">
        <a href="#" id="popup-closer" className="ol-popup-closer"></a>
        <div id="popup-content">
          Información adicional aquí
        </div>
      </div>
      <div id="marker" style={{ width: '20px', height: '20px', background: 'red' }} />
    </div>
  );
};

export default Prueba;
