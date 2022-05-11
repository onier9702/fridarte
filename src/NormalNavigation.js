
import React from 'react';

import { NavLinks } from './NavLinks';
import './Nav.css';

export const NormalNavigation = () => {

  const handleTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }

  const btnToTop = <i class="bi bi-arrow-up-circle-fill" onClick={handleTop}></i>

  return (
    <nav className="normalNav">
      <NavLinks />
      {btnToTop}
    </nav>
    // <>
      
        /* <div className="navbar">

          <div>
            <img className="logofridarte" src={process.env.PUBLIC_URL + "/assets/oficial_color.png"} alt="logo-fridarte"/>
          </div>

          <div className="barra-btn">

                <NavLink className="navlink"  to="./home"  >Inicio</NavLink>
                <NavLink className="navlink"  to="./search" >Buscar</NavLink>
                <NavLink className="navlink"  to="./about" >Acerca</NavLink>  
                <NavLink className="navlink"  to="./interior" >Estudio</NavLink>
                <NavLink className="navlink"  to="./exterior" >Exteriores</NavLink>
                <NavLink className="navlink"  to="./contact" >Contactarnos</NavLink>    
          </div>

          <div className="logos">
            <ul >
                <i id="logos" className="bi bi-facebook"></i>
                <i id="logos" className="bi bi-instagram"></i>
                // {/* <i id="logos" className="bi bi-twitter"></i> */
                // {/* <i id="logos" className="bi bi-pinterest"></i> */}
                // <i id="logos" className="bi bi-whatsapp"></i>
            // </ul>
          // </div>

        // </div > */}

    // </>
    
    // style={{maxWidth:90,maxHeight:90}}

  )
}
