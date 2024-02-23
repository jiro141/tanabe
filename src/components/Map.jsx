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



function Map({ city }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBqeJBisRSAqQQjsSLc8OBBlAAW8Jwsj5c",
  });
  const [center, setCenter] = useState({
    lat: 7.7617623,
    lng: -72.2217608,
  });
  console.log(center,'centro');
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
    if (city === "Maracaibo") {
      newPointsOfInterest = [
        {
          id: 1,
          position: { lat: 10.676713346727587, lng: -71.61577689815809 },
          content:
            "Dojo hombu Tanabe, Instructor: Hanshi Angel Urribarri, Dirrección:Calle 67A con Av 11. Sector tierra Negra. Al lado de Banzai Sushi, Telefono: +58-414-6160450",
        },
        {
          id: 2,
          position: { lat: 10.574483705455178, lng: -71.63951813583556 },
          content:
            "Dojo San Francisco,Instructor: Sensei Roxana,Dirrección:Palacio de Combate San Felipe, Avenida 1, Avenida 10, Maracaibo, Zulia,Telefon:04246165925 / 04246247264",
        },
        {
          id: 3,
          position: { lat: 10.709305189335732, lng: -71.64881873973916 },
          content:
            "Dojo Nozomi,Instructor: Shihan Joel Millano,Dirrección:urbanización la Esperanza parroquia idelfonso Vasquez preescolar la esperanza, Zulia,Telefono:+58-424-6753049",
        },
        {
          id: 4,
          position: { lat: 10.553322133718035, lng: -71.63300289038072 },
          content:
            "Dojo Bushiwaza,Instructor: Sensei Merly Urdaneta,Dirrección:Av 16 entre calles 21 y 22, sector San Ramón, parroquia y municipio San Francisco, al lado del hospital Materno infantil de San Francisco.,Telefono:+58-424-6511614",
        },
        {
          id: 5,
          position: { lat: 10.58864461029343, lng: -71.63001110922126 },
          content:
            "Dojo Zenkokan,Instructor: Sensei Lenning Medina,Dirrección:Av. 19, calle 10-B Cancha de usos múltiples María Jung Al lado del Colegio 19 de Abril. Sierra Maestra,Telefono:+58-424-7452211",
        },
        {
          id: 6,
          position: { lat: 10.675495421540218, lng: -71.65808248875435 },
          content:
            "Dojo Ken Zen Karate Do,Instructor: Sensei Edwin J. Urdaneta,Dirrección:Urb. Los Aceituneros. Av. La Limpia altura 911 una cuadra detrás de la Estación de Servicio Los Aceitunos. Av 69A con Calle 79D.,Telefono: +58-424-6124833",
        },
        {
          id: 7,
          position: { lat: 10.64446819627546, lng: -71.61586745594508 },
          content:
            "Dojo Impdeprec,Instructor: Shihan-dai Pedro Valera,Dirrección:Av Padilla, Torres del Saladillo detrás de la Torre Cumana /  Av Padilla Plaza Urdaneta en el piso pulido que esta frente a la fuente de agua,Telefon:+58-414-6399805",
        },
      ];
      setCenter({ lat: 10.64328299700237, lng: -71.61987370903822 });
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
      zoom={10}
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
