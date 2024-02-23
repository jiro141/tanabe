import React, { useState, useContext } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import h1 from "../img/h1.jpg";
import h2 from "../img/h2.jpg";
import h3 from "../img/h3.jpg";
import h4 from "../img/h4.jpg";
import h5 from "../img/h5.jpg";
import h6 from "../img/h6.jpg";
import h7 from "../img/h7.jpg";
import h8 from "../img/h8.jpg";
import h9 from "../img/h9.jpg";
import h10 from "../img/h10.jpg";
import h11 from "../img/h11.jpg";
import { MyContext } from "../context/MainContext";
export const Historia = (props) => {
  const [pagina, setPagina] = useState(1); // Estado para controlar la página actual
  const [myState, setMyState, language, setLanguage] = useContext(MyContext);
  const handleNextPage = () => {
    setPagina((prevPagina) => (prevPagina === 8 ? 1 : prevPagina + 1));
  };

  const handlePrevPage = () => {
    setPagina((prevPagina) => (prevPagina === 1 ? 8 : prevPagina - 1));
  };

  console.log(pagina, "nuemor de pagina");

  return (
    <div>
      <div>
        <div>
          {pagina === 1 && (
            <div className="historia">
              <div>
                {language === "es" && (
                  <p>
                    En el año de 1970, un joven lleno de ilusiones y espíritu de
                    aventura sale de su Japón natal hacia Los Ángeles en busca
                    de nuevos horizontes. Soñaba con convertirse en un jugador
                    de las grandes ligas. Poco después, viaja a Venezuela en
                    busca de un futuro. En diciembre de 1971, el Sensei Kunio
                    Tanabe llega a Maracaibo para trabajar y ganarse el pan con
                    el sudor de su frente. Con el espíritu de un samurái,
                    enfrenta las dificultades del idioma y la cultura mientras
                    comparte los pormenores de la vida diaria con el pueblo. Con
                    coraje y temple, trabaja en la conocida firma comercial Casa
                    Miyazawa, donde se gana el aprecio de sus dueños, japoneses
                    que han residido en la ciudad durante varios años.
                    <br />
                    <br />
                    Desde principios de 1972, aprovechando sus conocimientos de
                    Judo y Karate-Do, visita una academia ubicada en 5 de Julio,
                    dirigida por el Sensei Luiggi Gallone, donde se destaca por
                    su técnica. Gallone lo presenta a su Sensei Ives Carrouget,
                    quien a su vez dirige el Maracaibo Karate Judo Club en la
                    Colonia Creole. Reconociendo inmediatamente su técnica y
                    destreza, un grupo de alumnos del Sensei Carrouget lo
                    contratan para hacerse cargo de un nuevo Club: American Zen
                    Academy, actividad que alterna con su trabajo en Casa
                    Miyazawa.
                  </p>
                )}

                {language === "us" && (
                  <p>
                    In the year 1970, a young man full of dreams and the spirit
                    of adventure leaves his native Japan for Los Angeles in
                    search of new horizons. He dreamed of becoming a Major
                    League Baseball player. Shortly after, he travels to
                    Venezuela in search of a future. In December 1971, Sensei
                    Kunio Tanabe arrives in Maracaibo to work and earn his
                    living with the sweat of his brow. With the spirit of a
                    samurai, he faces the difficulties of language and culture
                    while sharing the details of daily life with the people.
                    With courage and determination, he works at the well-known
                    commercial firm Casa Miyazawa, where he earns the
                    appreciation of its owners, Japanese residents in the city
                    for several years.
                    <br />
                    <br />
                    Since the beginning of 1972, leveraging his knowledge of
                    Judo and Karate-Do, he visits an academy located in 5 de
                    Julio, directed by Sensei Luiggi Gallone, where he stands
                    out for his technique. Gallone introduces him to his Sensei
                    Ives Carrouget, who in turn directs the Maracaibo Karate
                    Judo Club in Colonia Creole. Recognizing his technique and
                    skill immediately, a group of Carrouget's students hire him
                    to take charge of a new Club: American Zen Academy, an
                    activity he alternates with his work at Casa Miyazawa.
                  </p>
                )}
                <br />
                <br />
                <img src={h1} alt="" />
              </div>
              <div>
                <img src={h6} alt="dojo" />
                <br />
                <br />
                {language === "es" && (
                  <p>
                    A partir de ese momento, comienza una nueva era del
                    Karate-Do en el Estado Zulia. En agosto de ese mismo año,
                    junto con sus primeros alumnos de Maracaibo: Héctor Antunez,
                    Manuel Nava, Ricardo Adrianza, Jorge Cubbedu, entre otros,
                    comienza a dictar clases en Cabimas en la sede del Lago La
                    Salina Club, donde se destacan varios alumnos de la Costa
                    Oriental como: Armando Vegas, Rubén Mavarez y Giovanni
                    Montero. Con una selección de estos alumnos de Maracaibo y
                    Cabimas, reciben desde la capital del país a un equipo del
                    Shihan Shoko Sato con experiencia internacional para
                    realizar el primer intercambio entre Maracaibo y Caracas. A
                    pesar de ser principiantes, mostraron coraje y espíritu, y
                    es donde comienza una rivalidad deportiva que todavía
                    perdura. Debido a la destacada participación en ese
                    intercambio, a finales de 1972, los discípulos del Maestro
                    Tanabe fueron invitados al Primer Campeonato Shito Ryu
                    celebrado en Caracas. Si bien el grupo obtuvo el primer
                    lugar, quedó demostrado que en el Zulia había una escuela
                    liderada por el Maestro Tanabe que daría mucho de qué hablar
                    en el Karate-Do Venezolano.
                  </p>
                )}

                {language === "us" && (
                  <p>
                    From that moment on, a new era of Karate-Do begins in the
                    state of Zulia. In August of that same year, together with
                    his first students from Maracaibo: Héctor Antunez, Manuel
                    Nava, Ricardo Adrianza, Jorge Cubbedu, among others, he
                    begins to teach classes in Cabimas at the headquarters of
                    Lago La Salina Club, where several students from the Eastern
                    Coast stand out, such as: Armando Vegas, Rubén Mavarez, and
                    Giovanni Montero. With a selection of these students from
                    Maracaibo and Cabimas, they receive a team from the capital
                    of the country, led by Shihan Shoko Sato with international
                    experience, to carry out the first exchange between
                    Maracaibo and Caracas. Despite being beginners, they showed
                    courage and spirit, and that's where a sports rivalry begins
                    that still persists. Due to their outstanding participation
                    in that exchange, at the end of 1972, Master Tanabe's
                    disciples were invited to the First Shito Ryu Championship
                    held in Caracas. Although the group won first place, it was
                    demonstrated that in Zulia there was a school led by Master
                    Tanabe that would make a lot of noise in Venezuelan
                    Karate-Do.
                  </p>
                )}
              </div>
            </div>
          )}

          {pagina === 2 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      Iniciando el año 1973, el entusiasmo y la exigencia de sus
                      alumnos lo animan a dar clases particulares y,
                      posteriormente, a fundar su propio Dojo el 15 de agosto de
                      1973, con la ayuda del Sr. Constantino Hadis, Carlos
                      Pardi, Giuseppe Torres, Julián Viso, Ricardo Alcalá y de
                      sus primeros alumnos, Héctor Antunez, Ricardo Adrianza,
                      Manuel Nava, Orlando Ramírez, Javier Díaz y José
                      Montoglis, estos dos últimos venían del Dojo que había
                      visitado el Sensei Tanabe cuando llegó en 1971. En este
                      año se realizaron varios intercambios con el Club del
                      Sensei Ives Carrouget y el 22 de diciembre se realiza la
                      primera competencia del Dojo Tanabe en las instalaciones
                      del Colegio San Vicente de Paúl.
                      <br />
                      <br />
                      En 1974, son muchas las personas que se acercan al joven
                      japonés por su carisma y liderazgo, quien además exhibía
                      una técnica depurada y un profundo conocimiento de las
                      artes marciales.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      Starting in the year 1973, the enthusiasm and demand from
                      his students encouraged him to give private classes and
                      subsequently to found his own Dojo on August 15, 1973,
                      with the help of Mr. Constantino Hadis, Carlos Pardi,
                      Giuseppe Torres, Julián Viso, Ricardo Alcalá, and his
                      first students, Héctor Antunez, Ricardo Adrianza, Manuel
                      Nava, Orlando Ramírez, Javier Díaz, and José Montoglis,
                      the latter two coming from the Dojo that Sensei Tanabe had
                      visited when he arrived in 1971. In this year, several
                      exchanges were made with Sensei Ives Carrouget's Club, and
                      on December 22, the first competition of Dojo Tanabe was
                      held at the facilities of Colegio San Vicente de Paúl.
                      <br />
                      <br />
                      In 1974, many people approached the young Japanese man
                      because of his charisma and leadership, who also exhibited
                      refined technique and a deep knowledge of martial arts.
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h8} alt="" />
                </div>
                <div>
                  <img src={h7} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      Atraídos por los comentarios que circulaban en el ámbito
                      marcial, se incorpora otra camada de jóvenes entre los
                      cuales estaban: Alberto Ferrer, Fernando Díaz, Teobaldo
                      García, Tibaldo García, Harry López, Rolando Ramírez,
                      Alirio Maneiro, Pablo Duque, Enrique Lissi, Argenis García
                      entre otros. Ese año tienen numerosas exhibiciones y se
                      realiza un intercambio con un grupo liderado por el Sensei
                      José Rafael Mendoza en Valencia, Edo. Carabobo, que fue el
                      grupo raíz de la Organización Ryobukai de Venezuela. Este
                      año es particularmente relevante para la historia del
                      Karate-Do nacional, pues es el año de la fundación de la
                      Asociación Zuliana de Karate-Do, convirtiéndose en la
                      primera institución oficial de Karate-Do inscrita en el
                      Instituto Nacional de Deporte (IND), todo esto con el
                      apoyo de Carlos Pardi, Enrique Acosta, Ricardo Alcalá,
                      Ricardo Adrianza, Héctor Antunez, Manuel Nava, entre
                      otros.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      Attracted by the comments circulating in the martial arts
                      community, another group of young people joins, among them
                      were: Alberto Ferrer, Fernando Díaz, Teobaldo García,
                      Tibaldo García, Harry López, Rolando Ramírez, Alirio
                      Maneiro, Pablo Duque, Enrique Lissi, Argenis García, among
                      others. That year, they had numerous exhibitions and an
                      exchange was held with a group led by Sensei José Rafael
                      Mendoza in Valencia, Edo. Carabobo, which was the root
                      group of the Ryobukai Organization of Venezuela. This year
                      is particularly relevant to the history of national
                      Karate-Do, as it is the year of the founding of the Zulian
                      Karate-Do Association, becoming the first official
                      Karate-Do institution registered with the National
                      Institute of Sports (IND), all with the support of Carlos
                      Pardi, Enrique Acosta, Ricardo Alcalá, Ricardo Adrianza,
                      Héctor Antunez, Manuel Nava, among others.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 3 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      En los primeros años, el maestro Tanabe enseñó a sus
                      alumnos el estilo aprendido en Japón llamado shorinji-ryu,
                      cuyo fundador fue su maestro Kori Hisataka y su hijo
                      Massayuki Hisataka, un estilo poco conocido en occidente.
                      En 1975, tratando de hacer que sus alumnos avanzaran en el
                      Karate-Do, el maestro Tanabe amplió sus conocimientos al
                      profundizar en el estudio del estilo Shotokan. Sabiendo el
                      maestro Katsuya Ishiyama del liderazgo alcanzado por el
                      maestro Tanabe en el Zulia, propone establecer una
                      alianza, la cual es aceptada por Tanabe.
                      <br />
                      <br />
                      En consecuencia, Tanabe viaja a Caracas donde conoce a
                      Renny Ottolina, quien apoyaba a Ishiyama, y con este
                      inicia conversaciones para tratar de unir todas las
                      escuelas de Shotokan de Venezuela. Con esto se intentaba
                      hacer contrapeso al estilo Shiti-Ryu que lideraba el
                      maestro Shoko Sato y que gozaba de popularidad en el país.
                      La unificación de las escuelas Shotokan se concreta a
                      través de la constitución de la Asociación Venezolana de
                      Karate-do (ASVEKA).
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In the early years, Master Tanabe taught his students the
                      style learned in Japan called shorinji-ryu, founded by his
                      teacher Kori Hisataka and his son Massayuki Hisataka, a
                      style little known in the West. In 1975, trying to advance
                      his students in Karate-Do, Master Tanabe expanded his
                      knowledge by delving into the study of the Shotokan style.
                      Knowing that Master Katsuya Ishiyama was aware of the
                      leadership achieved by Master Tanabe in Zulia, he proposed
                      establishing an alliance, which was accepted by Tanabe.
                      <br />
                      <br />
                      Consequently, Tanabe travels to Caracas where he meets
                      Renny Ottolina, who supported Ishiyama, and with him
                      initiates conversations to try to unite all the Shotokan
                      schools in Venezuela. This was an attempt to
                      counterbalance the Shiti-Ryu style led by Master Shoko
                      Sato, which enjoyed popularity in the country. The
                      unification of the Shotokan schools is achieved through
                      the establishment of the Venezuelan Karate-do Association
                      (ASVEKA).
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h9} alt="" />
                </div>
                <div>
                  <img src={h3} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      En este año, los estados de Venezuela donde se practica el
                      Karate-Do comienzan a presionar por tener participación en
                      el Karate Venezolano. En los comienzos de 1975, se celebra
                      en Maracaibo el 1er. Campeonato Nacional Abierto de
                      Karate-Do con la participación de los maestros Katsuya
                      Ishiyama, YOhio Hama y Kasuo Wada, bajo la dirección
                      técnica del Sensei Kunio Tanabe y con la ayuda de sus
                      alumnos y el patrocinio del Sr. Carlos Pardi. Durante ese
                      año, el maestro Tanabe, capitán del equipo de Venezuela
                      con dos de sus alumnos más destacados, Héctor Antunez y
                      Armando Vargas, y los atletas Marcelo Boldrini y Sergio
                      Brazzoduro nos representan en el World Union Karate
                      Championship de la International Amateur Karate Federation
                      en Los Ángeles Memorial Sport Arena, California, Estados
                      Unidos.
                      <br />
                      <br />
                      El maestro Tanabe sabe que sus alumnos están ávidos de
                      conocimientos sobre las técnicas marciales y, a pesar de
                      que el Shotokan había sido aceptado por los alumnos,
                      invita a los maestros Katsumasa Ogura (10 dan) y Hiramatzu
                      Gizin (7 dan), expertos en Goyo ryu.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In this year, the states of Venezuela where Karate-Do is
                      practiced begin to press for participation in Venezuelan
                      Karate. In the early days of 1975, the 1st Open National
                      Karate-Do Championship is held in Maracaibo with the
                      participation of Masters Katsuya Ishiyama, YOhio Hama, and
                      Kasuo Wada, under the technical direction of Sensei Kunio
                      Tanabe and with the help of his students and the
                      sponsorship of Mr. Carlos Pardi. During that year, Master
                      Tanabe, captain of the Venezuelan team with two of his
                      most outstanding students, Héctor Antunez and Armando
                      Vargas, and athletes Marcelo Boldrini and Sergio
                      Brazzoduro, represented us at the World Union Karate
                      Championship of the International Amateur Karate
                      Federation at the Los Angeles Memorial Sport Arena,
                      California, United States.
                      <br />
                      <br />
                      Master Tanabe knows that his students are eager for
                      knowledge about martial arts techniques and, despite the
                      acceptance of Shotokan by the students, invites Masters
                      Katsumasa Ogura (10th dan) and Hiramatzu Gizin (7th dan),
                      experts in Goyo ryu.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 4 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      Con el apoyo del Sr. Carlos Pardi, Enrique Acosta, Héctor
                      Antunez, Ricardo Alcalá, Ricardo Adrianza y Manuel Nava,
                      preocupado por darle legalidad a una actividad que
                      comenzaba a tener auge en todo el país, el maestro Tanabe
                      registra la Asociación Zuliana de Karate-Do, el 17 de
                      agosto de 1976 ante la oficina subalterna del tercer
                      circuito de registro de Maracaibo, inscrita en el
                      Instituto Nacional Deporte (IND), con ello pasa a ser la
                      primera asociación de Venezuela registrada oficialmente en
                      el país.
                      <br />
                      <br />
                      En el año 1976, debido a los éxitos nacionales e
                      internacionales, entra en el Dojo Tanabe otro grupo de
                      jóvenes que es la generación que a la postre la daría las
                      mayores satisfacciones al maestro Tanabe, son estos: Henry
                      Lugo, Jorge Quintero, José Silvera, Carlos García, Gustavo
                      Serrano, Antonio Lugo, Henry Suárez, Manuel Viña, Leonor
                      Salazar, Igor Escobar entre otros.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      With the support of Mr. Carlos Pardi, Enrique Acosta,
                      Héctor Antunez, Ricardo Alcalá, Ricardo Adrianza, and
                      Manuel Nava, concerned with giving legality to an activity
                      that was beginning to gain momentum throughout the
                      country, Master Tanabe registers the Zulian Karate-Do
                      Association on August 17, 1976, before the subordinate
                      office of the third registration circuit of Maracaibo,
                      registered with the National Sports Institute (IND),
                      thereby becoming the first association officially
                      registered in the country.
                      <br />
                      <br />
                      In 1976, due to national and international successes,
                      another group of young people enters Dojo Tanabe, which is
                      the generation that would ultimately give the greatest
                      satisfactions to Master Tanabe, these are: Henry Lugo,
                      Jorge Quintero, José Silvera, Carlos García, Gustavo
                      Serrano, Antonio Lugo, Henry Suárez, Manuel Viña, Leonor
                      Salazar, Igor Escobar among others.
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h10} alt="" />
                </div>
                <div>
                  <img src={h3} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      En agosto de ese año, se realiza el II Campeonato Abierto
                      de Karate-Do con la participación de la élite Shoto-Kan
                      del país, lo cual lo convierte en un acontecimiento
                      nacional que deja asentado el prestigio del Shihan Kunio
                      Tanabe por lo cual es reconocido a nivel mundial. En el
                      mes de septiembre, el Maestro Tanabe como entrenador
                      representa a Venezuela en el Primer Campeonato Bolivariano
                      de Karate-Do de la International Amateur Karate Federation
                      y Japan Karate Association, celebrado en Lima, Perú.
                      Participan en este evento sus alumnos, Héctor Antunez,
                      Enrique Lissi, Fernando Díaz, y Teobaldo García.
                      <br />
                      <br />
                      Durante este año se trata de consolidar el grupo Shotokan
                      de Venezuela razón por la cual se invita al maestro
                      Katzuhiko Morita del estilo Shotokan y al maestro
                      Hiramatzu Gizin del estilo Shudokan, ambos provenientes de
                      México.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In August of that year, the II Open Karate-Do Championship
                      is held with the participation of the Shoto-Kan elite of
                      the country, which makes it a national event that
                      establishes the prestige of Shihan Kunio Tanabe, making
                      him recognized worldwide. In the month of September,
                      Master Tanabe as a coach represents Venezuela in the First
                      Bolivarian Karate-Do Championship of the International
                      Amateur Karate Federation and Japan Karate Association,
                      held in Lima, Peru. His students, Héctor Antunez, Enrique
                      Lissi, Fernando Díaz, and Teobaldo García, participate in
                      this event.
                      <br />
                      <br />
                      During this year, efforts are made to consolidate the
                      Shotokan group in Venezuela, which is why Master Katzuhiko
                      Morita from the Shotokan style and Master Hiramatzu Gizin
                      from the Shudokan style, both from Mexico, are invited.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 5 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      En el mes de junio de este mismo año se celebra en nuestra
                      ciudad el III Campeonato Abierto de Karate-Do (A.Z.K y
                      A.S.V.E.K.A). De este campeonato se constituiría la
                      selección Venezolana que luego participaría en el World
                      Karate-Do Championship de la International Amateur
                      Karate-Do Federation (IAKF) y la Japan Karate-Do
                      Association (JKA), eventos en el cual el maestro Tanabe
                      fungió como miembro de la delegación Venezolana.
                      <br />
                      <br />
                      En julio de 1978 se realiza en Maracaibo el IV Campeonato
                      Nacional Abierto, los integrantes por el estado Zulia
                      fueron los siguientes: Héctor Antunez, Ricardo Adrianza,
                      Manuel Nava, Teobaldo García, Tibaldo García, Rubén
                      Mavarez, Frenando Díaz, Ángel Urribarri, José Silvera,
                      Alberto Ferrer y Gustavo Serrano. En el siguiente año se
                      realizó el mismo evento y sirvió de base para empezar a
                      concretar las primeras selecciones de Venezuela.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In June of this same year, the III Open Karate-Do
                      Championship (A.Z.K and A.S.V.E.K.A) is held in our city.
                      From this championship, the Venezuelan team would be
                      formed, which would later participate in the World
                      Karate-Do Championship of the International Amateur
                      Karate-Do Federation (IAKF) and the Japan Karate-Do
                      Association (JKA), events in which Master Tanabe served as
                      a member of the Venezuelan delegation.
                      <br />
                      <br />
                      In July 1978, the IV Open National Championship was held
                      in Maracaibo, the members for the Zulia state were: Héctor
                      Antunez, Ricardo Adrianza, Manuel Nava, Teobaldo García,
                      Tibaldo García, Rubén Mavarez, Fernando Díaz, Ángel
                      Urribarri, José Silvera, Alberto Ferrer, and Gustavo
                      Serrano. The following year, the same event was held and
                      served as a basis to begin concretizing Venezuela's first
                      selections.
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h2} alt="" />
                </div>
                <div>
                  <img src={h4} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      A pesar de los esfuerzos emprendidos desde el año 1975
                      junto al maestro Ishiyama, la unificación de las escuelas
                      Shotokan existentes en Venezuela no había podido
                      concretarse, conocedores de la creciente reputación que
                      ostentaba para entonces el maestro Tanabe, varios
                      instructores del Dojos ubicados en distintas regiones del
                      País se acercan para manifestarle su interés para aprender
                      con él. Es en ese momento cuando en Tanabe surge la idea
                      de crear una Organización de carácter Nacional bajo su
                      tutela.
                      <br />
                      <br />
                      Teniendo en cuenta, por un lado, que el maestro Shoko Sato
                      y su Organización tenían estrechos nexos con la World
                      Union Karate Organization (WUKO) y otras organizaciones
                      encargadas de eventos Internacionales de carácter
                      federado, y por otro lado, conociendo la calidad técnica
                      de sus alumnos, Tanabe decide propiciar un acercamiento
                      hacia la Organización Shito Ryu con la firme intención de
                      que sus alumnos pudieran participar en los chequeos
                      oficiales destinados a constituir a la selección
                      venezolana que representaría al país en eventos futuros.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      Despite the efforts undertaken since 1975 alongside Master
                      Ishiyama, the unification of existing Shotokan schools in
                      Venezuela had not been achieved. Aware of the growing
                      reputation that Master Tanabe held by then, several
                      instructors from dojos located in different regions of the
                      country approached him to express their interest in
                      learning from him. It is at that moment when the idea
                      arises in Tanabe to create a National Organization under
                      his tutelage.
                      <br />
                      <br />
                      Taking into account, on the one hand, that Master Shoko
                      Sato and his Organization had close ties with the World
                      Union Karate Organization (WUKO) and other organizations
                      responsible for International events of a federated
                      nature, and on the other hand, knowing the technical
                      quality of his students, Tanabe decides to foster an
                      approach towards the Shito Ryu Organization with the firm
                      intention that his students could participate in the
                      official checks aimed at constituting the Venezuelan team
                      that would represent the country in future events.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 6 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      En el año de 1979 otro grupo de atletas se unen al Dojo
                      Tanabe, entre los cuales se destacan: Alberto Flaviani,
                      William Vanegas, Cesar Romero, Paúl Phillips, Herman
                      Pirela, Paúl quintero, Oswaldo Carrillo, Jorge Martínez y
                      José Colina representándonos en diferentes campeonatos
                      Nacionales e Internacionales.
                      <br />
                      <br />
                      En 1980, se realiza en Maracaibo el V Campeonato Nacional
                      Abierto de Karate-DO. Fue un año de intensa actividad;
                      luego de tres chequeos nacionales, entre las
                      organizaciones Shito Ryu y Tanabe de Venezuela se conformó
                      la selección que posteriormente participó en el V
                      Campeonato Mundial de la World Union Karate Organization
                      (WUKO), en Madrid, España. Por primera vez, discípulos del
                      maestro Tanabe entraban a formar filas en una selección
                      nacional de karatekas de diferentes estilos. Los
                      seleccionados por el estado Zulia fueron: José Silvera,
                      Teobaldo García, Carlos García, Alberto Ferrer, Gustavo
                      Serrano, Enrique Lissi, Héctor Antunez y Leonor Salazar.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In 1979, another group of athletes joined Dojo Tanabe,
                      among whom stand out: Alberto Flaviani, William Vanegas,
                      Cesar Romero, Paúl Phillips, Herman Pirela, Paúl Quintero,
                      Oswaldo Carrillo, Jorge Martínez, and José Colina,
                      representing us in different National and International
                      championships.
                      <br />
                      <br />
                      In 1980, the V Open National Karate-DO Championship was
                      held in Maracaibo. It was a year of intense activity;
                      after three national checkups, between the Shito Ryu and
                      Tanabe organizations of Venezuela, the selection was
                      formed that later participated in the V World Karate-Do
                      Championship of the World Union Karate Organization
                      (WUKO), in Madrid, Spain. For the first time, disciples of
                      Master Tanabe joined a national team of karatekas of
                      different styles. The selected ones for the Zulia state
                      were: José Silvera, Teobaldo García, Carlos García,
                      Alberto Ferrer, Gustavo Serrano, Enrique Lissi, Héctor
                      Antunez, and Leonor Salazar.
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h4} alt="" />
                </div>
                <div>
                  <img src={h7} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      La relevancia de esta situación es mayor si se considera
                      que si bien en Venezuela no había una federación avalada
                      por el IND, el evento WUKO reunía a más de 100 países
                      debidamente federados. Al aceptar la participación del la
                      delegación venezolana, los atletas venezolanos tuvieron la
                      oportunidad de medirse con atletas de alta competencia
                      provenientes de otras latitudes. Otro logro importante en
                      el marco del mismo evento fue el hecho de que el maestro
                      Tanabe logró superar los exámenes de rigor, fue
                      clasificado como árbitro centro WUKO y además se
                      constituyó en el referee Categoría “A” más joven para la
                      fecha.
                      <br />
                      <br />
                      Tras haber alcanzado reconocimiento internacional en 1982,
                      el maestro Tanabe viaja a Japón para un acercamiento a sus
                      raíces y un reencuentro con su maestro Kori Hisataka y
                      Masayiki Hisataka, a cargo de la corriente Kenkokan del
                      estilo Shorinjiryu. En este viaje lo acompañan sus alumnos
                      Alberto Ferrer, José Silvera, Jorge Quintero, Dilia Díaz,
                      Ángel Urribarri, Tirso Morales y Epifanio Cuevas, quienes
                      participaron en el International Koshiki Championship. Al
                      percatarse Hisataka de los logros obtenidos por su humilde
                      discípulo, le confiere el grado de 5to Dan el 18 de
                      noviembre de 1982 y los danes correspondientes a sus más
                      destacados alumnos.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      The relevance of this situation is greater when
                      considering that while in Venezuela there was no
                      federation endorsed by the IND, the WUKO event brought
                      together more than 100 duly federated countries. By
                      accepting the participation of the Venezuelan delegation,
                      Venezuelan athletes had the opportunity to compete with
                      high-level athletes from other latitudes. Another
                      important achievement in the framework of the same event
                      was the fact that Master Tanabe managed to pass the
                      rigorous exams, was classified as a WUKO center referee,
                      and also became the youngest Category "A" referee to date.
                      <br />
                      <br />
                      After achieving international recognition in 1982, Master
                      Tanabe travels to Japan for an approach to his roots and a
                      reunion with his teacher Kori Hisataka and Masayiki
                      Hisataka, in charge of the Kenkokan current of the
                      Shorinjiryu style. On this trip, he is accompanied by his
                      students Alberto Ferrer, José Silvera, Jorge Quintero,
                      Dilia Díaz, Ángel Urribarri, Tirso Morales, and Epifanio
                      Cuevas, who participated in the International Koshiki
                      Championship. Upon realizing Hisataka of the achievements
                      obtained by his humble disciple, he confers the 5th Dan
                      degree on November 18, 1982, and the corresponding degrees
                      to his most outstanding students.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 7 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      Los atletas zulianos demostraron dominio de las técnicas
                      como resultado de un arduo período de entrenamiento. Una
                      de las mayores satisfacciones y alegrías para el maestro
                      Tanabe fue el desempeño de sus alumnos frente a los
                      atletas nipones de la Kenkokan Karate-Do del Shorinjiryu,
                      lo que le permitió obtener los primeros lugares en el
                      evento.
                      <br />
                      <br />
                      En 1983 se celebra en Maracaibo el Internacional Koshiki
                      Championship, con la asistencia de Canadá, Holanda, Japón,
                      Estados Unidos y Venezuela, ocupando nuestro país el
                      Primer lugar, los atletas más destacados por Venezuela
                      fueron: Carlos García (1er lugar categoría liviano),
                      Franklin Escobar (1er lugar de la categoría mediana),
                      Héctor Antunez (1er lugar en la categoría pesada) y Leonor
                      Salazar (1er lugar en Kata Femenino).
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      The athletes from Zulia demonstrated mastery of the
                      techniques as a result of an arduous training period. One
                      of the greatest satisfactions and joys for Master Tanabe
                      was the performance of his students against the Japanese
                      athletes of the Kenkokan Karate-Do of Shorinjiryu, which
                      allowed him to obtain the top positions in the event.
                      <br />
                      <br />
                      In 1983, the International Koshiki Championship was held
                      in Maracaibo, with the attendance of Canada, the
                      Netherlands, Japan, the United States, and Venezuela, with
                      our country taking the first place. The most outstanding
                      athletes for Venezuela were: Carlos García (1st place
                      lightweight category), Franklin Escobar (1st place in the
                      middleweight category), Héctor Antunez (1st place in the
                      heavyweight category), and Leonor Salazar (1st place in
                      Female Kata).
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h2} alt="" />
                </div>
                <div>
                  <img src={h11} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      En el año 1984, nuestro estado es representado en el
                      equipo venezolano que participó en el séptimo Campeonato
                      Mundial, en la ciudad de Maastricht, Holanda, por el
                      maestro Tanabe quien actualiza su licencia de árbitro
                      Mundial y como atletas a José Silvera y Gustavo Serrano
                      por el estado Zulia, así como atletas de otros estados
                      pertenecientes a las organizaciones Ryobukai y Shitiryu,
                      entre ellos: José Di Masse, José Guerrero, Carlos
                      Henriquez, Claudia Sequera, Roraima Solórzano, Carlos
                      Quintero, Eduardo Velásquez, Francisco Dávila.
                      <br />
                      <br />
                      El 14 de Junio de 1986 se realiza en la ciudad de
                      Maracaibo, el Noveno Campeonato de Karate-Do Copa
                      Gobernador del estado Zulia, Dr. Omar Barboza, donde por
                      primera vez se le exige a las selecciones participantes la
                      providencia administrativa como asociación avalada por el
                      IND de cada estado, esto se hizo con la finalidad de que
                      las asociaciones asistentes pudieran luego constituir
                      legalmente la Federación Venezolana de Karate-Do puesto
                      que el comité pro-federación había propiciado una
                      situación poco deseable en el Mundial de Holanda.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      In 1984, our state is represented in the Venezuelan team
                      that participated in the seventh World Championship, in
                      the city of Maastricht, Netherlands, by Master Tanabe who
                      updates his World referee license and as athletes José
                      Silvera and Gustavo Serrano for the state of Zulia, as
                      well as athletes from other states belonging to the
                      Ryobukai and Shitiryu organizations, among them: José Di
                      Masse, José Guerrero, Carlos Henriquez, Claudia Sequera,
                      Roraima Solórzano, Carlos Quintero, Eduardo Velásquez,
                      Francisco Dávila.
                      <br />
                      <br />
                      On June 14, 1986, the Ninth Karate-Do Championship
                      Governor's Cup of Zulia State, Dr. Omar Barboza, is held
                      in the city of Maracaibo, where for the first time the
                      participating selections are required to provide
                      administrative providence as an association endorsed by
                      the IND of each state. This was done with the purpose that
                      the attending associations could later legally constitute
                      the Venezuelan Karate-Do Federation, since the
                      pro-federation committee had fostered an undesirable
                      situation in the World Championship in the Netherlands.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}

          {pagina === 8 && (
            <>
              <div className="historia">
                <div>
                  {language === "es" && (
                    <p>
                      Este evento fue organizado por Adrián Cottin, Luís López,
                      Elio Ugar, Ramón López, Manuel Nava. Los atletas
                      participantes fueron entre otros: Carlos García, Cipriano
                      Valdez, Ángel Urribarri, Alberto Ferre, José Castro, José
                      Silvera, Vladimir Añez, Gustavo Serrano, e Iván Carrillo.
                      Es de mencionar que a este Campeonato asistieron 12
                      asociaciones de la Organización Tanabe de Venezuela y
                      Ryubukai de Venezuela, legalmente registradas y que hubo 5
                      asociaciones de Shitoryu que se retiraron del evento por
                      temor a que pudiese concretarse la constitución de la
                      Federación.
                      <br />
                      <br />
                      En enero de 1989, se efectúa en Maracaibo el I Campeonato
                      Bolivariano de Karate-Do siendo los participantes por
                      nuestro estado: Ingrid Dugarte, Carlos García, José
                      Silvera, José Reyes y Ángel Urribarri.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      This event was organized by Adrián Cottin, Luís López,
                      Elio Ugar, Ramón López, and Manuel Nava. The participating
                      athletes included, among others: Carlos García, Cipriano
                      Valdez, Ángel Urribarri, Alberto Ferre, José Castro, José
                      Silvera, Vladimir Añez, Gustavo Serrano, and Iván
                      Carrillo. It is worth mentioning that 12 associations from
                      the Tanabe Organization of Venezuela and Ryubukai of
                      Venezuela, legally registered, attended this Championship,
                      and there were 5 Shitoryu associations that withdrew from
                      the event for fear that the Federation might be
                      established.
                      <br />
                      <br />
                      In January 1989, the I Bolivarian Karate-Do Championship
                      was held in Maracaibo, with participants from our state
                      including: Ingrid Dugarte, Carlos García, José Silvera,
                      José Reyes, and Ángel Urribarri.
                    </p>
                  )}
                  <br />
                  <br />
                  <img src={h1} alt="" />
                </div>
                <div>
                  <img src={h5} alt="dojo" />
                  <br />
                  <br />
                  {language === "es" && (
                    <p>
                      En el marco de este evento, por iniciativa de la AZK y la
                      FVKD, se impulsó la inclusión del Karate-Do a nivel
                      oficial en los Juegos Bolivarianos por intermedio del
                      maestro Takagi (secretario General de la WUKO). En
                      septiembre del mismo año se realizó en Maracaibo el I
                      Campeonato Panamericano de Karate-Do, con participantes
                      por el estado Zulia como: Carlos García, José Silvera,
                      José Reyes y Ángel Urribarri.
                      <br />
                      <br />
                      In 1990, Venezuela attended the X Karate-Do World
                      Championship in Mexico City, with Master Tanabe as the
                      coach of the Zulia team and participants from the state of
                      Zulia including: José Silvera, Carlos García, Ángel
                      Urribarri, José Reyes, Ingrid Dugarte, and José Briceño.
                      <br />
                      <br />
                      In December 1991, for the first time in the history of
                      Venezuela, Karate-Do was included as an Exhibition Sport
                      in the Youth National Games.
                    </p>
                  )}

                  {language === "us" && (
                    <p>
                      Within the framework of this event, at the initiative of
                      the AZK and the FVKD, the inclusion of Karate-Do at an
                      official level in the Bolivarian Games was promoted
                      through Master Takagi (General Secretary of the WUKO). In
                      September of the same year, the I Pan American Karate-Do
                      Championship was held in Maracaibo, with participants from
                      the state of Zulia such as: Carlos García, José Silvera,
                      José Reyes, and Ángel Urribarri.
                      <br />
                      <br />
                      In 1990, Venezuela attended the X Karate-Do World
                      Championship in Mexico City, with Master Tanabe as the
                      coach of the Zulia team and participants from the state of
                      Zulia including: José Silvera, Carlos García, Ángel
                      Urribarri, José Reyes, Ingrid Dugarte, and José Briceño.
                      <br />
                      <br />
                      In December 1991, for the first time in the history of
                      Venezuela, Karate-Do was included as an Exhibition Sport
                      in the Youth National Games.
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="navegacion">
        <button
          className="botones-flecha"
          onClick={handlePrevPage}
          disabled={pagina === 1}
        >
          <MdChevronLeft />
        </button>
        <button
          className="botones-flecha"
          onClick={handleNextPage}
          disabled={pagina === 8}
        >
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};
