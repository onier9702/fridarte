
import React from 'react';
import '../index.css';

export const About = () => {
  return (
    <div>
        <h1 >About</h1>
        <hr />
        <div id="Mision">
            <h4 ><i id="flecha" className="bi bi-check-lg"></i>  Misión</h4>
            <p> Brindar un servicio fotográfico exclusivo a toda persona 
                natural o jurídica que lo solicite, utilizando una tecnología y 
                capacitación profesional. Marcando un antes y un después en la 
                provincia de Sancti Spíritus.
            </p>

          </div>

          <div id="Mision">
            <h4 ><i id="flecha" className="bi bi-check-lg"></i>  Visión</h4>
            <p>
              FRIDARTE STUDIO es un emprendimiento en el centro de Cuba que ofrece 
              servicios múltiples de publicidad, fotografía social, empresarial y de moda
              a todas las personas naturales o jurídicas que prefieren una nueva estética 
              visual, productos de mejor factura en todos los formatos y le interesa la 
              colaboración entre proyectos preferentemente de nuestra localidad.
            </p>

          </div>
    </div>
  )
}
