
import React, {useState} from 'react';

import { NavLinks } from './NavLinks';
import './Nav.css';

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const burgerIcon = <i class="bi bi-list" onClick={ () => setOpen(!open) }></i>
    const closerIcon = <i class="bi bi-x" onClick={ () => setOpen(!open) }></i>
    // const inst       = <i className="bi bi-instagram" style={{fontSize:5, opacity:0.8}} ></i>
    // const what       = <i className="bi bi-whatsapp" style={{fontSize:5, opacity:0.8}}></i>
    // const face       = <i className="bi bi-facebook" style={{fontSize:5, opacity:0.8}}></i>

    const unList = <ul>
                      <li>
                      <i className="bi bi-instagram" style={{fontSize:15, opacity:0.5}} ></i>
                      </li>
                      <li>
                      <i className="bi bi-whatsapp" style={{fontSize:15, opacity:0.5}} ></i>
                      </li>
                      <li>
                      <i className="bi bi-facebook" style={{fontSize:15, opacity:0.5}} ></i>
                      </li>
                   </ul>

    const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div className="three-icons">
            { (open === false) ? unList : '' }
      </div>
      <div className="mobileNav" style={ open ? {backgroundColor:'black'} : {backgroundColor:'black'} } >
          <div className="icon">
            { open ? closerIcon : burgerIcon }
          </div>
          <div className="nav" >
              { open && <NavLinks isMob={true} closeMobileMenu={closeMobileMenu} /> }
          </div>
      </div>
    </>
  )
}

