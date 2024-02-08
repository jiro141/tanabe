import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import icono from "../img/temple.png";

const containerStyle = {
  width: "100%", // Usando porcentaje para que sea responsivo
  height: "400px",
  margin: "auto", // Centrar horizontalmente
};

const center = {
  lat: 7.7617623,
  lng: -72.2217608,
};

function Map({ city }) {
  console.log(city, "ciudad");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBqeJBisRSAqQQjsSLc8OBBlAAW8Jwsj5c",
  });

  const [map, setMap] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [pointsOfInterest, setPointsOfInterest] = useState([
    {
      id: 1,
      position: { lat: 8.7617623, lng: -72.2217608 },
      content: "HOla",
    },
    {
      id: 2,
      position: { lat: 7.7617623, lng: -72.2217608 },
      content: "Información del Punto de Interés 1",
    },
  ]);
  console.log(pointsOfInterest, "aqui cambia");
  const onLoad = React.useCallback(function callback(map) {
    // Ajusta el ajuste de límites según tus necesidades
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = (point) => {
    setSelectedPoint(point);
  };

  const handleInfoWindowClose = () => {
    setSelectedPoint(null);
  };

  const loadPointsOfInterest = () => {
    let newPointsOfInterest = [];
    if (city === "Cabimas") {
      newPointsOfInterest = [
        {
          id: 1,
          position: { lat: 10.399726554308074, lng: -71.46209676307903 },
          content: "Algun lado de cabimas",
        },
        {
          id: 2,
          position:  { lat: 10.40444070958076, lng: -71.44622593052605 },
          content: "otro lado de cabimas",
        },
      ];
    } else if (city === "New York City") {
      newPointsOfInterest = [
        {
          id: 1,
          position: { lat: 10.40444070958076, lng: -71.44622593052605 },
          content: "Point of Interest 1 in New York City",
        },
        {
          id: 2,
          position: { lat: 40.722776, lng: -74.005974 },
          content: "Point of Interest 2 in New York City",
        },
      ];
    }
    setPointsOfInterest(newPointsOfInterest);
  };
  useEffect(() => {
    loadPointsOfInterest();
  }, [city]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {pointsOfInterest.map((point) => (
        <Marker
          key={point.id}
          position={point.position}
          icon={{
            url: icono,
            scaledSize: new window.google.maps.Size(30, 30), // ajusta el tamaño aquí
          }}
          onClick={() => handleMarkerClick(point)}
        />
      ))}

      {selectedPoint && (
        <InfoWindow
          position={selectedPoint.position}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <p>{selectedPoint.content}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
