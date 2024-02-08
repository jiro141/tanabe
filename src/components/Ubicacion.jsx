import React, { useState } from "react";
import { MdTempleBuddhist } from "react-icons/md";
export const Ubicacion = (props) => {
  // Estado para almacenar la dirección y enlaces
  const [ubicacion, setUbicacion] = useState({
    direccion: [
      "Calle 67A con Av 11. Sector tierra Negra. Al lado de Banzai Sushi. Maracaibo Vzla.",
    ],
    redes: {
      facebook: "",
      twitter: "",
      instagram: "https://www.instagram.com/jktkofficial/",
      whatsapp: "",
    },
    img: "../img/zulia.jpg",
  });
  console.log(ubicacion.img);
  // Función para actualizar la ubicación según el botón presionado
  const actualizarUbicacion = (nuevaUbicacion) => {
    setUbicacion(nuevaUbicacion);
  };

  return (
    <div className="ubi">
      <nav>
        <button
          className="boton2"
          onClick={() =>
            actualizarUbicacion({
              direccion:
                "Calle 67A con Av 11. Sector tierra Negra. Al lado de Banzai Sushi. Maracaibo Vzla.",
              redes: {
                facebook: "",
                twitter: "",
                instagram: "https://www.instagram.com/jktkofficial/",
                whatsapp: "",
              },
              img: "../img/zulia.jpg",
            })
          }
        >
          Zulia
        </button>{" "}
        <br />
        <button
          className="boton2"
          onClick={() =>
            actualizarUbicacion({
              direccion: "Barrio Obrero, calle 11 entre carreras 17 y 18.",
              redes: {
                instagram: "https://www.instagram.com/dojohinomaru/",
              },
            })
          }
        >
          Tachira
        </button>{" "}
        <br />
        <button
          className="boton2"
          onClick={() =>
            actualizarUbicacion({
              direccion: "Nueva dirección para Monagas",
              redes: {
                /* Nuevos enlaces para Monagas */
              },
            })
          }
        >
          Monagas
        </button>{" "}
        <br />
        <button
          className="boton2"
          onClick={() =>
            actualizarUbicacion({
              direccion: "Nueva dirección para Trujillo",
              redes: {
                /* Nuevos enlaces para Trujillo */
              },
            })
          }
        >
          Trujillo
        </button>{" "}
        <br />
        <button
          className="boton2"
          onClick={() =>
            actualizarUbicacion({
              direccion: "Nueva dirección para Distrito Capital",
              redes: {
                /* Nuevos enlaces para Distrito Capital */
              },
            })
          }
        >
          Distrito Capital
        </button>{" "}
        <br />
      </nav>
      <div className="ubi-conteiner">
        <h4 className="titulo">Nos encontramos</h4>
        <div className="datos">
          <div>
            <ul className="lista">
              <MdTempleBuddhist size={20} style={{ marginRight: "5px" }} />{" "}
              {ubicacion.direccion}
            </ul>
            <div>
              <div className="redes">
                <p className="titulo2">Nuestras redes</p>
                <a target="_blank" href={ubicacion.redes.facebook}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a target="_blank" href={ubicacion.redes.twitter}>
                  <i className="fa fa-twitter"></i>
                </a>

                <a target="_blank" href={ubicacion.redes.instagram}>
                  <i className="fa fa-instagram"></i>
                </a>

                <a target="_blank" href={ubicacion.redes.whatsapp}>
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={ubicacion.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
