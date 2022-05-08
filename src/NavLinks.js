
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const NavLinks = ({isMob, closeMobileMenu}) => {
  return (

        <ul>

            {/* <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink 
                    className="enlace"
                    to="./home">Inicio</NavLink>
            </li> */}
            <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink 
                    className="enlace"
                    to="./search">Buscar</NavLink>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink 
                    className="enlace" 
                    to="./about">Acerca</NavLink>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink 
                    className="enlace" 
                    to="./interior">Estudio</NavLink>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink 
                    className="enlace" 
                    to="./exterior">Exteriores</NavLink>
            </li>
            <li onClick={ () => isMob && closeMobileMenu() } >
                <NavLink  
                    className="enlace" 
                    to="./contact">Contactarnos</NavLink>
            </li>
                
        </ul>
  )
}
