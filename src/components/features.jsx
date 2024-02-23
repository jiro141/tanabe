import logo from "../img/logo.png";
import LanguageSelector from "./LanguageSelector";
import { MyContext } from "../context/MainContext";
import { useContext } from "react";
export const Features = (props) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  const getFeatureText = (feature) => {
    if (language === "es") {
      return feature.spanish;
    } else {
      return feature.english;
    }
  };

  return (
    <div
      id="features"
      className="text-center"
      style={{ background: "#fbf7ee" }}
    >
      <img className="imagen" src={logo} alt="logo" />
      <div className="container" style={{ marginTop: "-5%" }}>
        <div
          className="row justify-content-end responsive-styles"
          style={{
            display: "flex",
            marginTop: "-3%",
            marginBottom: "3%",
          }}
        >
          <div className="col-md-1">
            <LanguageSelector />
          </div>
        </div>

        <div className="row justify-content-evenly">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-4"
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "auto",
                    }}
                  >
                    <i className={getFeatureText(d).icon}></i>
                    <h3 style={{ color: "#c60502", fontWeight: "bold" }}>
                      {getFeatureText(d).title}
                    </h3>
                    <p
                      style={{
                        fontWeight: "normal",
                        color: "#000",
                        maxWidth: "330px",
                        fontSize: "18px",
                        fontFamily: "Montserrat, sans-serif ",
                      }}
                    >
                      {getFeatureText(d).text}
                    </p>
                  </button>
                </div>
              ))
            : "Loading..."}
          <div className="col-md-10 col-md-offset-1 section-title">
            {/* <h2>Features</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};
