import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',  // Usando porcentaje para que sea responsivo
  height: '400px',
  margin: 'auto',  // Centrar horizontalmente
};

const center = {
  lat: 7.7617623, lng: -72.2217608
};

const pointsOfInterest = [
  {
    id: 1,
    position: { lat: 7.7617623, lng: -72.2217608 },
    content: 'Información del Punto de Interés 1'
  },
  // Agrega más puntos de interés según sea necesario
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBqeJBisRSAqQQjsSLc8OBBlAAW8Jwsj5c"
  });

  const [map, setMap] = React.useState(null);
  const [selectedPoint, setSelectedPoint] = React.useState(null);

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
