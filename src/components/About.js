
import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className="about">
        <div className="encab">
          <h1 >Acerca</h1>
          <hr />
        </div>
        <div className="sectional-content" >
          <div className="header1">
            <div className="logo" >
              <img key="logo-frid" src={process.env.PUBLIC_URL + "/assets/oficial_color.png"} alt="logo-fridarte"/>
            </div>
            <div className="letters">
              <p >Mirarte como si fueras magia...</p>
            </div>

          </div>

          <p>
            FRIDARTE STUDIO es una empresa en el centro de Cuba que ofrece 
            servicios múltiples de publicidad, fotografía social, empresarial y de moda
            a todas las personas naturales o jurídicas que prefieren una nueva estética 
            visual y productos de mejor factura en todos los formatos. Está abierta a la 
            colaboración entre proyectos preferentemente de nuestra localidad.
          </p>

          <div className="types-photos" >
            <h5> Fotografías Para</h5>

            <div className="pregnant" >
              <img key="quinces" src={process.env.PUBLIC_URL + "/assets/amarillas6.jpg"} alt="ama6"/>
              <div className="text">
                <h6>Quinces</h6>
                <p>Por ser uno de los momentos más esperados por la familia, nos hemos especializado en la fotografía de 15, por lo que disponemos para ello de avanzada tecnología y capacitación profesional, además de una amplia variedad de trajes, vestuarios, accesorios y calzado. Contamos con varios estudios y sets naturales exclusivos, brindamos servicios de fotografía y video en exteriores así como en la fiesta de celebración.</p>
              </div>
            </div>

            <div className="pregnant" >
              <img key="models" src={process.env.PUBLIC_URL + "/assets/amarillas7.jpg"} alt="ama7"/>
              <div className="text">
                <h6>Modelos</h6>
                <p>La iluminación, el control absoluto de la puesta en escena, la creatividad y el carisma de nuestras modelos diferencian el trabajo de FRIDARTE MODEL. Con el equipamiento necesario podemos encargarnos de la fotografía de sus productos y su catálogo, ya sea físico o para webs. Nuestras fotografías mejoran la imagen de su marca por la calidad visual que ofertamos.</p>
              </div>
            </div>

            <div className="pregnant" >
              <img key="embarazadas" src={process.env.PUBLIC_URL + "/assets/amarillas4.jpg"} alt="ama4"/>
              <div className="text">
                <h6>Embarazadas</h6>
                <p>Conserva el momento único del embarazo en unos retratos familiares. Nuestras sesiones de fotos son elegantes y minimalistas, centrándonos en la belleza y la emoción de este momento único. Disponemos de vestuario especializado con más de una docena de vestidos para la ocasión.</p>
              </div>
            </div>

            <div className="pregnant" >
              <img key="kids" src={process.env.PUBLIC_URL + "/assets/amarillas5.jpg"} alt="ama5"/>
              <div className="text">
                <h6>Niños</h6>
                <p>Acompañamos a la familia en sus momentos más importantes, compartimos la alegría de la primera imagen del mes hasta su primer año de vida, los MINI 15, sus fiestas de cumpleaños y los mejores recuerdos de su infancia.</p>
              </div>
            </div>


            <div className="pregnant" >
              <img key="wedding" src={process.env.PUBLIC_URL + "/assets/amarillas8.jpg"} alt="ama8"/>
              <div className="text">
                <h6>Bodas</h6>
                <p>Bodas inolvidables con un estilo documental, natural y moderno, fotos llenas de luz y color con un toque divertido y romántico además de las acostumbradas fotografías de estudio y exteriores. Ofrecemos cobertura completa para la ceremonia sin descuidar ningún detalle, los preparativos, las emociones y el esplendor de la decoración.</p>
              </div>
            </div>
          

          </div>
        </div>

    </div>
  )
}
