import React, { useState, useEffect } from "react";

const LocationSelector = ({ onChange, selectedCity, setSelectedCity }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");

  // Simula la carga de datos de países
  useEffect(() => {
    // Aquí puedes cargar los países desde una API o cualquier otra fuente de datos
    // Por ahora, solo simularé algunos países
    const countriesData = ["Venezuela", "USA", "Japon"];
    setCountries(countriesData);
  }, []);

  // Simula la carga de estados basados en el país seleccionado
  useEffect(() => {
    // Aquí puedes cargar los estados basados en el país seleccionado
    // Por ahora, solo simularé algunos estados para los países seleccionados
    let statesData = [];
    if (selectedCountry === "USA") {
      statesData = ["Miami", "New York", "Texas"];
    } else if (selectedCountry === "Venezuela") {
      statesData = ["Zulia", "Tachira", "Distrito Capital","Anzoategui"];
    } else if (selectedCountry === "Japon") {
      statesData = ["Tokio", "Kioto", "No se dime tu alfredo"];
    }
    setStates(statesData);
    setSelectedState("");
  }, [selectedCountry]);

  // Simula la carga de ciudades basadas en el estado seleccionado
  useEffect(() => {
    // Aquí puedes cargar las ciudades basadas en el estado seleccionado
    // Por ahora, solo simularé algunas ciudades para los estados seleccionados
    let citiesData = [];
    if (selectedState === "Zulia") {
      citiesData = ["Maracaibo", "Cabimas", "Ciudad Ojeda","Kilome 13"];
    } else if (selectedState === "Tachira") {
      citiesData = ["San Cristobal", "Tariba", "Cordero"];
    } else if (selectedState === "Distrito Capital") {
      citiesData = ["Caracas", "Chacao", "Monte y culebra"];
    }
    setCities(citiesData);
    setSelectedCity("");
  }, [selectedState]);

  // Llama a la función onChange cuando se selecciona una ciudad
  useEffect(() => {
    if (onChange && selectedCity) {
      onChange(selectedCity);
    }
  }, [selectedCity, onChange]);

  return (
    <div className="location-selector-container">
      <div className="selector">
        <label htmlFor="country" className="label">
          País:
        </label>
        <select
          id="country"
          className="select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Selecciona un país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="selector">
        <label htmlFor="state" className="label">
          Estado:
        </label>
        <select
          id="state"
          className="select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">Selecciona un estado</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="selector">
        <label htmlFor="city" className="label">
          Ciudad:
        </label>
        <select
          id="city"
          className="select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Selecciona una ciudad</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
