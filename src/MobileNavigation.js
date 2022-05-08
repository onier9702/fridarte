
import React, {useState} from 'react';

import { NavLinks } from './NavLinks';
import './Nav.css';

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const burgerIcon = <i class="bi bi-list" onClick={ () => setOpen(!open) }></i>
    const closerIcon = <i class="bi bi-x" onClick={ () => setOpen(!open) }></i>

    const closeMobileMenu = () => setOpen(false);

  return (
       
    <div className="mobileNav" style={ open ? {backgroundColor:'black'} : {backgroundColor:'black'} } >
        <div className="icon">
            { open ? closerIcon : burgerIcon }
        </div>
        <div className="nav" >
            { open && <NavLinks isMob={true} closeMobileMenu={closeMobileMenu} /> }
        </div>
    </div>
  )
}

