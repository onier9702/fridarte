
import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

export const Navbar = () => {

  return (

    <>
        <div className="navbar">

          <div>
            <img id="logofridarte" src="./assets/oficial_color.png" style={{width:130,height:130}} alt="logo-fridarte"/>
          </div>

          <div id="barra-btn">

                <NavLink className="red" id="navlink" to="./home"  >Inicio</NavLink>
                <NavLink className="red" id="navlink" to="./search" >Buscar</NavLink>
                <NavLink className="red" id="navlink" to="./about" >Acerca</NavLink>  
                <NavLink className="red" id="navlink" to="./interior" >Interiores</NavLink>
                <NavLink className="red" id="navlink" to="./exterior" >Exteriores</NavLink>
                <NavLink className="red" id="navlink" to="./contact" >Contactarnos</NavLink>    
          </div>
        </div >

        <div>
          <ul className="div-logos" >
              <i id="logos" className="bi bi-facebook"></i>
              <i id="logos" className="bi bi-instagram"></i>
              <i id="logos" className="bi bi-twitter"></i>
              <i id="logos" className="bi bi-pinterest"></i>
              <i id="logos" className="bi bi-whatsapp"></i>
          </ul>
        </div>
    </>
    


  )
}
