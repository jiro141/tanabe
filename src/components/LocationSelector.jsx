import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MainContext";

const LocationSelector = ({ onChange, selectedCity, setSelectedCity }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  //   const [selectedCity, setSelectedCity] = useState("");
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  // Simulates loading country data
  useEffect(() => {
    // Here you could load countries from an API or any other data source
    // For now, let's simulate some countries
    const countriesData = language === "us" ? ["United States", "Venezuela"] : ["Estados Unidos", "Venezuela"];
    setCountries(countriesData);
  }, [language]);

  // Simulates loading states based on the selected country
  useEffect(() => {
    // Here you could load states based on the selected country
    // For now, let's simulate some states for the selected countries
    let statesData = [];
    if (selectedCountry === "United States") {
      statesData = language === "us" ? ["Miami", "New York", "Texas"] : ["Miami", "Nueva York", "Texas"];
    } else if (selectedCountry === "Venezuela") {
      statesData = language === "us" ? ["Zulia", "Táchira"] : ["Zulia", "Táchira"];
    }
    setStates(statesData);
    setSelectedState("");
  }, [selectedCountry, language]);

  // Simulates loading cities based on the selected state
  useEffect(() => {
    // Here you could load cities based on the selected state
    // For now, let's simulate some cities for the selected states
    let citiesData = [];
    if (selectedState === "Zulia") {
      citiesData = language === "us" ? ["Maracaibo", "Ciudad Ojeda", "Machiques de Perijá"] : ["Maracaibo", "Ciudad Ojeda", "Machiques de Perijá"];
    } else if (selectedState === "Táchira") {
      citiesData = language === "us" ? ["San Cristobal"] : ["San Cristóbal"];
    } 
    setCities(citiesData);
    setSelectedCity("");
  }, [selectedState, language]);

  // Calls the onChange function when a city is selected
  useEffect(() => {
    if (onChange && selectedCity) {
      onChange(selectedCity);
    }
  }, [selectedCity, onChange]);

  return (
    <div className="location-selector-container">
      <div className="selector">
        <label htmlFor="country" className="label">
          {language === "us" ? "Country:" : "País:"}
        </label>
        <select
          id="country"
          className="select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">{language === "us" ? "Select a country" : "Selecciona un país"}</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="selector">
        <label htmlFor="state" className="label">
          {language === "us" ? "State:" : "Estado:"}
        </label>
        <select
          id="state"
          className="select"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">{language === "us" ? "Select a state" : "Selecciona un estado"}</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="selector">
        <label htmlFor="city" className="label">
          {language === "us" ? "City:" : "Ciudad:"}
        </label>
        <select
          id="city"
          className="select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">{language === "us" ? "Select a city" : "Selecciona una ciudad"}</option>
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
