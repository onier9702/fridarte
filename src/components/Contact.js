
import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css';

export const Contact = () => {

 
  return (

    <>
      <div>
          <h1 >Contactarnos</h1>
          <hr />

          <div id="contacto">
            <div id="address">
              <p id="location"><i id="locaticon" className="bi bi-geo-alt" ></i>  Cespedes 316 /Buena Vista y San Luis
                                                Sancti Spiritus Cuba
              </p>
              <div id="map">
                <img src="../assets/location.jpg" key="location" id="loc" alt="location" />
                <Link to={`/single/location`} id="linkMap" >VerMap</Link>
              </div>

              <p id="location"><i id="email" className="bi bi-envelope-fill"> </i>fridartestudiooficial@gmail.com</p>

            </div>
            <ul >

              <li>
                <i className="bi bi-facebook" id="faceb" ></i>
                <p>@fridartestudio</p>
              </li>

              <li>
                <i className="bi bi-instagram" id="inst" ></i>
                <p>@fridartestudio</p>
              </li>

              <li>
                <i className="bi bi-pinterest" id="pint" ></i>
                <p>makeaccount</p>
              </li>

              <li>
                <i className="bi bi-whatsapp"  id="whats"></i>
                <p>+53 52615585</p>
              </li>

            </ul>
          </div>
    
      </div>
    </>
  )
}
 