
import React from 'react';
import { Link } from 'react-router-dom';

import './Contacto.css';
import { Carousel2 } from './Carousel2';


export const Contact = () => {


  return (
    
        <div>
          <h1 >Contactarnos</h1>
          <hr />

          <div className="contacto">

              <Carousel2 />
            
              <p><i id="ilocaticon" className="bi bi-geo-alt" ></i>  Cespedes 316 /Buena Vista y San Luis
                                                Sancti Spiritus Cuba
              </p>
              <div className="mapa">
                <img src={process.env.PUBLIC_URL + "/assets/location.jpg"} key="locat" id="loc" style={{maxWidth:190}} alt="location" />
                <Link to={`/single/location`} className="linkMap" >VerMap</Link>
              </div>


              <div className="socialMedia">
                <p className="mb-3">Visítenos en nuestras Redes Sociales</p>
                <ul >
                 <li>
                    <a  href="https://www.instagram.com/fridartestudio"
                        target="_blank"
                        rel="noreferrer"
                    ><i className="bi bi-instagram" id="inst" ></i></a>
                  </li>

                  <li>
                      <a href="https://www.facebook.com/fridarteestudio"
                      target="_blank"
                      rel="noreferrer"
                    
                    ><i className="bi bi-facebook" id="faceb" ></i></a>
                  </li >
                    
                  <li >
                    <a  href="http://wa.me/5354336432"
                        target="_blank"
                        rel="noreferrer"
                    ><i className="bi bi-whatsapp" id="whats" ></i></a>
                  </li>           
                </ul>
                <div className="number">
                  <p >+53 54336432</p>
                </div>  
              </div>
          
          </div>
    
        </div>
  )
}
 