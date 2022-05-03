
import React from 'react';
import { Link } from 'react-router-dom';

import './Contacto.css';
export const Contact = () => {

 
  return (

    <>
      <div>
          <h1 >Contactarnos</h1>
          <hr />

          <div className="contacto">
              <p><i id="ilocaticon" className="bi bi-geo-alt" ></i>  Cespedes 316 /Buena Vista y San Luis
                                                Sancti Spiritus Cuba
              </p>

              <p><i id="email" className="bi bi-envelope-fill"> </i>fridartestudiooficial@gmail.com</p>

              <p><i className="bi bi-facebook" id="faceb" ></i>@fridartestudio</p>

              <p><i className="bi bi-instagram" id="inst" ></i>@fridartestudio</p>

              <p><i className="bi bi-whatsapp"  id="whats"></i>+53 52615585</p>

              <div className="mapa">
                <img src={process.env.PUBLIC_URL + "/assets/location.jpg"} key="locat" id="loc" style={{maxWidth:190}} alt="location" />
                <Link to={`/single/location`} className="linkMap" >VerMap</Link>
              </div>
              
          </div>
    
      </div>
    </>
  )
}
 