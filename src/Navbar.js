
import React from 'react';
import { NavLink , Link} from 'react-router-dom';

// import './index.css';
import './Nav.css';

export const Navbar = () => {

  return (

    <nav className="navbar">

      <div className="div-nav">      

        <ul className="listof">
          <li>

              <NavLink 
                  className="enlace"
                  to="./home">Inicio</NavLink>
          </li>

          <li>
              <NavLink 
                  className="enlace"
                  to="./search">Buscar</NavLink>
          </li>

          <li>
              <NavLink 
                  className="enlace" 
                  to="./about">Acerca</NavLink>
          </li>

          <li>
              <NavLink 
                  className="enlace" 
                  to="./interior">Estudio</NavLink>
          </li>
          <li>
              <NavLink 
                  className="enlace" 
                  to="./exterior">Exteriores</NavLink>
          </li>

          <li>
              <NavLink  
                  className="enlace" 
                  to="./contact">Contactarnos</NavLink>
          </li>
              
        </ul>

      </div>
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
