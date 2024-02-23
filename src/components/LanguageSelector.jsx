import React, { useState, useContext, useEffect } from "react";
import Flags from "react-flags-select";
import { MyContext } from "../context/MainContext"; // Asegúrate de proporcionar la ruta correcta al contexto

const LanguageSelector = () => {
  const [selected, setSelected] = useState("ES"); // Establece el estado inicial en "ES"
  const [myState, setMyState, language, setLanguage] = useContext(MyContext); // Utilizamos el contexto
  console.log(language, "contexto");

  useEffect(() => {
    // Cuando el componente se monta, actualizamos el idioma en el contexto
    setLanguage(selected.toLowerCase());
  }, [selected, setLanguage]);

  const handleSelect = (countryCode) => {
    setSelected(countryCode);
  };

  const customLabels = {
    US: "English",
    ES: "Español",
    // Agrega más códigos de países y sus nombres correspondientes según necesites
  };

  return (
    <Flags
      selected={selected}
      onSelect={handleSelect}
      countries={["US", "ES"]} // Puedes agregar más códigos de países según tus necesidades
      showSelectedLabel={false}
      showOptionLabel={false}
      customLabels={customLabels} // Agrega el objeto customLabels aquí
    />
  );
};

export default LanguageSelector;
