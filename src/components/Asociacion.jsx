import React, { useContext } from "react";
import { MyContext } from "../context/MainContext";
import { MdTempleBuddhist } from "react-icons/md";
import tanabeKaiLogo from "../img/h11.jpg";
import tanabeKaiDojo from "../img/h4.jpg";

export const Asociacion = (props) => {
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);

  return (
    <div className="historia">
      <div>
        <p>
          {language === "us" ? (
            <>
              The Tanabe Organization of Venezuela and International (OTV/ITK), founded by Master Kunio Tanabe Takizawa (RIP) in 1972, has a trajectory of over 50 years in spreading and teaching the principles and techniques of Shotokan Karate-Do in various states of Venezuela and also has international presence through its schools in the USA, Costa Rica, Argentina, France, Chile, Spain, and Colombia. <br />
              <br /> Master Tanabe was one of the pioneers in martial arts training in the Zulia region and was the founder of the Zulian Karate Association (AZK) and a founding member of the Venezuelan Karate-Do Federation (FVKD). Since then, with great constancy and discipline centered on fundamental principles of respect, humility, honesty, and perseverance, we have dedicated ourselves to the task of forming not only excellent martial artists but also good citizens.
            </>
          ) : (
            <>
              La Organización Tanabe de Venezuela e Internacional (OTV/ITK), Fundada por el maestro Kunio Tanabe Takizawa (QEPD) en el año 1.972, tiene una trayectoria de más de 50 años en la difusión y enseñanza de los principios y técnicas del Karate-Do estilo Shotokan en varios estados de Venezuela y además cuenta con presencia internacional, a través de sus escuelas en EEUU, Costa Rica, Argentina, Francia, Chile, España y Colombia. <br />
              <br /> El maestro Tanabe fue uno de los pioneros en la formación de artistas marciales de la región Zuliana y fue el fundador de la Asociación Zuliana de Karate (AZK) y miembro fundador de la Federación Venezolana de Karate-Do (FVKD). Desde entonces, con mucha constancia y disciplina centrada en los principios fundamentales del respeto, la humildad, honestidad y perseverancia nos hemos dedicado a la tarea de formar no solo excelentes artistas marciales, sino también buenos ciudadanos.
            </>
          )}
        </p>
        <br />
        <br />
        <img src={tanabeKaiLogo} alt="Tanabe Kai Logo" />
      </div>
      <div>
        <img src={tanabeKaiDojo} alt="Tanabe Kai Dojo" />
        <br />
        <br />
        <p>
          <span>
            {language === "us" ? "50 years of Master Tanabe's legacy" : "50 años de legado del Maestro Tanabe"}
          </span>
          <br />
          <br />
          {language === "us" ? (
            <>
              The Tanabe Organization of Venezuela and International (OTV/ITK) celebrates 50 years of dedicated work in spreading and teaching Shotokan Karate-Do in Venezuela and abroad. Founded in 1972 by Master Kunio Tanabe Takizawa (RIP), the OTV/ITK has become a reference in this martial art, characterized by its comprehensive training based on values such as respect, humility, honesty, and perseverance.
            </>
          ) : (
            <>
              La Organización Tanabe de Venezuela e Internacional (OTV/ITK) celebra 50 años de dedicada labor en la difusión y enseñanza del Karate-Do estilo Shotokan en Venezuela y el extranjero. Fundada en 1972 por el Maestro Kunio Tanabe Takizawa (QEPD), la OTV/ITK se ha convertido en un referente de este arte marcial, caracterizándose por su formación integral basada en valores como el respeto, la humildad, la honestidad y la perseverancia.
            </>
          )}
          <br />
          <br />
          <br />
          <span>{language === "us" ? "More than a martial art, a comprehensive education" : "Más que un arte marcial, una formación integral:"}</span>
          <br />
          <br />
          {language === "us" ? (
            <>
              The OTV/ITK goes beyond teaching Shotokan Karate-Do techniques. Its focus is on the comprehensive training of individuals, promoting values such as respect, discipline, humility, honesty, and perseverance. The organization aims for its students to become responsible citizens, with a strong spirit of self-improvement and a commitment to society.
            </>
          ) : (
            <>
              La OTV/ITK va más allá de la enseñanza de las técnicas del Karate-Do Shotokan. Su enfoque se basa en la formación integral de personas, promoviendo valores como el respeto, la disciplina, la humildad, la honestidad y la perseverancia. La organización busca que sus estudiantes se conviertan en ciudadanos responsables, con un fuerte espíritu de superación y un compromiso con la sociedad.
            </>
          )}
          <br />
          <br />
          <span>{language === "us" ? "A legacy of discipline and values" : "Un legado de disciplina y valores:"}</span>
          <br />
          <br />
          {language === "us" ? (
            <>
              Master Tanabe, one of the pioneers of Shotokan Karate-Do in Venezuela, left an indelible mark on the Zulia region. His passion for this martial art led him to found the Zulian Karate Association (AZK) and to be a founding member of the Venezuelan Karate-Do Federation (FVKD). Throughout his career, Master Tanabe trained countless martial artists, instilling in them not only the techniques of Karate-Do but also fundamental values for life.
            </>
          ) : (
            <>
              El Maestro Tanabe, uno de los pioneros del Karate-Do Shotokan en Venezuela, dejó una huella imborrable en la región Zuliana. Su pasión por este arte marcial lo llevó a fundar la Asociación Zuliana de Karate (AZK) y ser miembro fundador de la Federación Venezolana de Karate-Do (FVKD). A lo largo de su trayectoria, el Maestro Tanabe formó a un sinfín de artistas marciales, inculcándoles no solo las técnicas del Karate-Do, sino también valores fundamentales para la vida.
            </>
          )}
        </p>
      </div>
    </div>
  );
};
