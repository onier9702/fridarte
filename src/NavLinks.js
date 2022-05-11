
import React from 'react';
// import { NavLink as a } from 'react-router-dom';
import './Nav.css';

export const NavLinks = ({isMob, closeMobileMenu}) => {
  return (

        <ul>

            <li onClick={ () => isMob && closeMobileMenu() } >
                <a 
                    className="enlace"
                    href="#/home">Inicio</a>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <a 
                    className="enlace"
                    href="#/search">Buscar</a>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <a 
                    className="enlace" 
                    href="#/about">Acerca</a>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <a 
                    className="enlace" 
                    href="#/interior">Estudio</a>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <a 
                    className="enlace" 
                    href="#/exterior">Exteriores</a>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <a  
                    className="enlace" 
                    href="#/contact">Contactarnos</a>
            </li>
                
        </ul>
  )
}
