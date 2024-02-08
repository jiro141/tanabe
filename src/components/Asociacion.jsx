import React, { useState } from "react";
import { MdTempleBuddhist } from "react-icons/md";
import tanabeKaiLogo from "../img/a1.jpg";
import tanabeKaiDojo from "../img/a2.jpg";

export const Asociacion = (props) => {
  return (
    <div className="historia">
      <div>
        <p>
          La Asociación de Karate Tanabe Kai tiene sus raíces en la llegada del
          maestro Kunio Tanabe a Venezuela en 1971 con el sueño de convertirse
          en un pelotero de grandes ligas. Sin embargo, el destino le tenía
          reservado el papel de pionero del karate en el país.
          <br /> <br />
          Tanabe llegó a Maracaibo sin hablar español, respaldado por sus
          conocimientos de Karate y Judo. Su técnica y dedicación pronto lo
          destacaron como instructor. <br /> <br /> En 1973, fundó el dojo de la
          Tanabe Kai en Maracaibo, que rápidamente se convirtió en un centro de
          referencia para los amantes del Karate Do en Venezuela. Tanabe enseñó
          los estilos Shorinji-ryu y Shotokan, y sus alumnos comenzaron a
          cosechar éxitos en campeonatos nacionales e internacionales.
        </p>
        <br />
        <br />
        <img src={tanabeKaiLogo} alt="Logo de Tanabe Kai" />
      </div>
      <div>
        <img src={tanabeKaiDojo} alt="Dojo de Tanabe Kai" />
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
