
import React, { useEffect ,useRef, useState} from 'react';

import { NavLinks } from './NavLinks';
import './Nav.css';

export const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    // const menu_btn = document.querySelector('.nav');

    // menu_btn.classList.toggle('is-active');
    const burgerIcon = <i class="bi bi-list" onClick={ () => setOpen(!open) }></i>
    const closerIcon = <i class="bi bi-x" onClick={ () => setOpen(!open) }></i>

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

    const container = useRef();
    const iconRef   = useRef();
    // let medidor = false;

    useEffect(() => {
       
      console.log('useEffect called!!!!');
      if (open === true) {
          document.addEventListener('click', (e) => {
            e.preventDefault();
            if ( !(container.current.contains(e.target)) && !(iconRef.current.contains(e.target))) {
              setOpen(false);
            }
            
          })
      }
    
      return () => {
        document.removeEventListener('click', () => {});
        // setOpen(false);
      }
    }, [container.current])
    
    

  return (
    <>
      <div className="three-icons">
            { (open === false) ? unList : '' }
      </div>
      {/* <div className="mobileNav" style={ open ? {backgroundColor:'black'} : {backgroundColor:'black'} } > */}
      <div className="icon" ref={iconRef}>
        { open ? closerIcon : burgerIcon }
      </div>
      <div className={`nav ${(open ? 'isactive' : '')}`} ref={container} >
          {/* { open && <NavLinks isMob={true} closeMobileMenu={closeMobileMenu} /> } */}
          <NavLinks isMob={true} closeMobileMenu={closeMobileMenu} />
      </div>
      {/* </div> */}
    </>
  )
}

