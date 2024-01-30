import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top " style={{ background: "#fbf7ee" }}>
      <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            {/* <span className="sr-only">Toggle navigation</span>{" "} */}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "} */}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href=" " className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Quienes somos
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Ubicación
              </a>
            </li>
            <li>
              <a href="#Contact" className="page-scroll">
                Contacto
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
