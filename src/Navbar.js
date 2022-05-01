
import React from 'react';
import { NavLink } from 'react-router-dom';

// import './index.css';
import './Navbar.css';

export const Navbar = () => {

  return (

    <>
      
        <div className="navbar">

          <div>
            <img className="logofridarte" src="./assets/oficial_color.png" alt="logo-fridarte"/>
          </div>

          <div className="barra-btn">

                <NavLink className="navlink"  to="./home"  >Inicio</NavLink>
                <NavLink className="navlink"  to="./search" >Buscar</NavLink>
                <NavLink className="navlink"  to="./about" >Acerca</NavLink>  
                <NavLink className="navlink"  to="./interior" >Interiores</NavLink>
                <NavLink className="navlink"  to="./exterior" >Exteriores</NavLink>
                <NavLink className="navlink"  to="./contact" >Contactarnos</NavLink>    
          </div>

          <div className="logos">
            <ul >
                <i id="logos" className="bi bi-facebook"></i>
                <i id="logos" className="bi bi-instagram"></i>
                {/* <i id="logos" className="bi bi-twitter"></i> */}
                {/* <i id="logos" className="bi bi-pinterest"></i> */}
                <i id="logos" className="bi bi-whatsapp"></i>
            </ul>
          </div>

        </div >

    </>
    
    // style={{maxWidth:90,maxHeight:90}}

  )
}
