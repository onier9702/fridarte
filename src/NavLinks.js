
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const NavLinks = ({isMob, closeMobileMenu}) => {
  return (

        <ul>

            <li onClick={ () => isMob && closeMobileMenu() } >
                <Link 
                    className="enlace"
                    to="/home">Inicio</Link>
            </li>
            {/* <li onClick={ () => isMob && closeMobileMenu() } >
                <Link 
                    className="enlace"
                    to="/search">Buscar</Link>
            </li> */}
            <li onClick={ () => isMob && closeMobileMenu() } >
                <Link 
                    className="enlace" 
                    to="/about">Acerca</Link>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <Link 
                    className="enlace" 
                    to="/interior">Estudio</Link>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <Link 
                    className="enlace" 
                    to="/exterior">Exteriores</Link>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <Link  
                    className="enlace" 
                    to="/contact">Contactarnos</Link>
            </li>
                
        </ul>
  )
}
