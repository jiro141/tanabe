import React, { useState } from "react";
import { MdTempleBuddhist } from "react-icons/md";
import h1 from "../img/h1.jpg"
import h2 from "../img/h2.jpg"
export const Historia = (props) => {
  return (
    <div className="historia">
      <div>
        <p>
          El maestro Kunio Tanabe llegó a Venezuela en 1971 con el sueño de
          convertirse en un pelotero de grandes ligas. Sin embargo, su destino
          lo llevó a convertirse en un pionero del karate en el país.
          <br /> <br />
          Tanabe llegó a Maracaibo sin hablar español y respaldado por sus
          conocimientos de Karate y Judo. Sin embargo, su técnica y dedicación
          pronto lo llevaron a destacarse como instructor. <br /> <br /> En 1973, fundó
          su propio dojo en Maracaibo, el cual rápidamente se convirtió en un
          centro de referencia para los amantes del Karate Do en Venezuela.
          Tanabe enseñó a sus alumnos los estilos Shorinji-ryu y Shotokan, y
          pronto sus alumnos comenzaron a cosechar éxitos en campeonatos
          nacionales e internacionales.
        </p>
        <br />
        <br />
        <img src={h1} alt="" />
      </div>
      <div>
        <img src={h2} alt="dojo" />
        <br />
        <br />
        <p>
          En 1980, Tanabe fue seleccionado como árbitro para el Campeonato
          Mundial de Karate de la World Union Karate Organization (WUKO). Esto
          representó un reconocimiento a su trayectoria y un impulso para el
          karate venezolano. <br /> <br /> En los años siguientes, el Maestro Tanabe
          continuó trabajando incansablemente para promover el Karate Do. En
          1986, organizó el primer campeonato de Karate de Venezuela que contó
          con la participación de representantes de todo el país. <br /> <br /> En
          1989, Tanabe fue el entrenador de la selección venezolana que
          participó en el primer Campeonato Bolivariano de Karate. Venezuela
          obtuvo el primer lugar en este evento, lo cual representó un hito para
          el karate venezolano.
        </p>
      </div>
    </div>
  );
};
