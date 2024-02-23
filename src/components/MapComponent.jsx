import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import Overlay from "ol/Overlay";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import templo from "../img/temple.png";

// Definir las coordenadas y nombres de los lugares de interés
const dojos = [
  {
    name: "Dojo hombu Tanabe",
    lon: -71.61577689815809,
    lat: 10.676713346727587,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Hanshi Angel Urribarri",
    address:
      "Calle 67A con Av 11. Sector tierra Negra. Al lado de Banzai Sushi",
    phone: "5804146160450",
  },
  {
    name: "Dojo San Francisco",
    lon: -71.63951813583556,
    lat: 10.574483705455178,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Sensei Roxana",
    address: "Palacio de Combate San Felipe, Avenida 1, Avenida 10",
    phone: "04246165925 / 04246247264",
  },
  {
    name: "Dojo Nozomi",
    lon: -71.64881873973916,
    lat: 10.709305189335732,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Shihan Joel Millano",
    address:
      "urbanización la Esperanza parroquia idelfonso Vasquez preescolar la esperanza",
    phone: "584246753049",
  },
  {
    name: "Dojo Maki Gadema",
    lon: -72.54089805862397,
    lat: 10.060994408631938,
    country: "Venezuela",
    state: "Zulia",
    city: "Machiques de Perijá",
    instructor: "Sensei Jesús Augusto Romero",
    address: "Av. Arimpia. Club GADEMA",
    phone: "584126885910",
  },
  {
    name: "Dojo Bushiwaza",
    lon: -71.63300289038072,
    lat: 10.553322133718035,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Sensei Merly Urdaneta",
    address:
      "Av 16 entre calles 21 y 22, sector San Ramón, parroquia y municipio San Francisco, al lado del hospital Materno infantil de San Francisco",
    phone: "584246511614",
  },
  {
    name: "Dojo Zenkokan",
    lon: -71.63001110922126,
    lat: 10.58864461029343,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Sensei Lenning Medina",
    address:
      "Av. 19, calle 10-B Cancha de usos múltiples 'María Jung' Al lado del Colegio 19 de Abril. Sierra Maestra",
    phone: "584247452211",
  },
  {
    name: "Dojo TOK'O",
    lon: -71.30058656644147,
    lat: 10.1941174117979,
    country: "Venezuela",
    state: "Zulia",
    city: "Ciudad Ojeda",
    instructor: "Shihan Willian Izzarra",
    address:
      "Av. La ' N', edificio Bari, frenta a la librería San Agustín, ciudad Ojeda - Edo Zulia",
    phone: "5804246418225",
  },
  {
    name: "DOJO KEN ZEN KARATE DO",
    lon: -71.30059593886482,
    lat: 10.194160078323986,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Sensei Edwin J. Urdaneta",
    address:
      "Urb. Los Aceituneros. Av. La Limpia altura 911 una cuadra detrás de la Estación de Servicio Los Aceitunos. Av 69A con Calle 79D.",
    phone: "584246124833",
  },
  {
    name: "Dojo Impdeprec",
    lon: -71.61586745594508,
    lat: 10.64446819627546,
    country: "Venezuela",
    state: "Zulia",
    city: "Maracaibo",
    instructor: "Shihan-dai Pedro Valera",
    address:
      "Av Padilla, Torres del Saladillo detrás de la Torre Cumana / Av Padilla Plaza Urdaneta en el piso pulido que esta frente a la fuente de agua",
    phone: "584146399805",
  },
  {
    name: "Dojo Hinomaru",
    lon: -72.22273808785175,
    lat: 7.770404870888434,
    country: "Venezuela",
    state: "Tachira",
    city: "San Cristobal",
    instructor: "Sensei Nelson Rosales",
    address:
      "Barrio Obrero, calle 11 entre carreras 17 y 18. Sobre Servi system",
    phone: "584147558583",
  },
];


const MyMapComponent = (selectedCity) => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const closerRef = useRef(null);
  const mapInstance = useRef(null);
  console.log(selectedCity, "ciudad");
  let cityCoordinates;
  switch (selectedCity.city) {
    case "":
      cityCoordinates = [-71.64056, 10.63167];
      break;
    case "Maracaibo":
      cityCoordinates = [-71.64056, 10.63167];
      break;
    case "San Cristobal":
      cityCoordinates = [-72.2217608, 7.7617623];
      break;
    case "Ciudad Ojeda":
      cityCoordinates = [-71.31227031283751, 10.22173243870633];
      break;
    case "Machiques de Perijá":
      cityCoordinates = [-72.54963425152678, 10.060725835659602];
      break;
    default:
      break;
  }

  useEffect(() => {
    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
      view: new View({
        center: fromLonLat(cityCoordinates),
        zoom: 11,
      }),
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    mapInstance.current.addLayer(vectorLayer);

    const popup = new Overlay({
      element: popupRef.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    mapInstance.current.addOverlay(popup);

    dojos.forEach((place) => {
      const { lon, lat, name, info } = place;
      const coords = fromLonLat([lon, lat]);

      const iconStyle = new Style({
        image: new Icon({
          src: templo,
          scale: 0.05,
        }),
      });

      const point = new Point(coords);
      const feature = new Feature({
        geometry: point,
        name: name,
        info: info,
      });
      feature.setStyle(iconStyle);

      vectorSource.addFeature(feature);

      const markerElement = document.createElement("div");
      markerElement.className = "marker";
      markerElement.addEventListener("click", () => {
        popup.setPosition(coords);
      });
      markerElement.addEventListener("mouseover", () => {
        markerElement.style.cursor = "pointer";
      });
      markerElement.addEventListener("mouseout", () => {
        markerElement.style.cursor = "auto";
      });

      const marker = new Overlay({
        position: coords,
        positioning: "center-center",
        element: markerElement,
      });
      mapInstance.current.addOverlay(marker);
    });

    const mapClickHandler = () => {
      popup.setPosition(undefined);
    };
    mapInstance.current.on("click", mapClickHandler);

    return () => {
      mapInstance.current.un("click", mapClickHandler);
      mapInstance.current.setTarget(undefined);
    };
  }, [cityCoordinates]);

  return (
    <>
      <div>
        <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
        <div ref={popupRef} id="popup" className="ol-popup">
          <a href="#" ref={closerRef} className="ol-popup-closer"></a>
          <div id="popup-content">Información adicional aquí</div>
        </div>
      </div>
    </>
  );
};

export default MyMapComponent;
