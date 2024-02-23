import React, { useContext } from "react";
import { MyContext } from "../context/MainContext";

const DojoInfoComponent = ({ dojosByCity, city }) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  console.log(dojosByCity, "dojo info");
  console.log(city, "dojo info");

  const selectedCity = city || "Maracaibo";
  const dojos = dojosByCity[selectedCity];

  return (
    <div>
      {dojos && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {dojos.map((dojo, index) => (
            <div
              key={index}
              className={`card ${window.innerWidth <= 480 ? 'phone' : window.innerWidth <= 768 ? 'tablet' : ''}`}
            >
              <h2 style={{ color: "#FBF7EE", fontSize: "16px" }}>{dojo.name}</h2>
              <p style={{ fontSize: "12px" }}>
                <strong>{language === 'us' ? 'Instructor:' : 'Instructor:'}</strong> {dojo.instructor}
              </p>
              <p style={{ fontSize: "12px" }}>
                <strong>{language === 'us' ? 'Address:' : 'Dirección:'}</strong> {dojo.address}
              </p>
              <p style={{ fontSize: "12px" }}>
                <strong>{language === 'us' ? 'Phone:' : 'Teléfono:'}</strong> {dojo.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DojoInfoComponent;
