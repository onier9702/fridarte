
import React, { useEffect, useMemo } from 'react';
import { getPortrait } from '../helpers/getPortrait';
// import '../index.css';
import './Home.css';

export const Home = () => {

  const portraits = useMemo(() => getPortrait('portada',13), []);
  
  useEffect(() => {

    let intervalScroll;
    const startScroll = () => {
  
      intervalScroll = setInterval(() => {
          window.scrollBy(0,2);
          if ( window.innerHeight + window.scrollY === document.body.offsetHeight ){
              stopScroll();
          }
      }, 20); 

      return intervalScroll;
    
    }
    startScroll();

    const stopScroll = () => {
      clearInterval(intervalScroll);
    };

    window.addEventListener( 'click', (e) => {
      e.preventDefault();
      stopScroll();
    } );
    window.addEventListener( 'mousemove', (e) => {
      e.preventDefault();
      stopScroll();
    } );
    window.addEventListener( 'touchmove', (e) => {
      e.preventDefault();
      stopScroll();
    } );
    window.addEventListener( 'touchstart', (e) => {
      e.preventDefault();
      stopScroll();
    } );
  
    return () => {
      window.removeEventListener('click',stopScroll);
      window.removeEventListener('mousemove',stopScroll);
      window.removeEventListener('touchmove',stopScroll);
      window.removeEventListener('touchstart',stopScroll);
    }
  }, [])
  



  
  

  return (
      <>
        {/* <div className="probando"> */}
        <div className="logo">
          <img className="logofridarte" src={process.env.PUBLIC_URL + "/assets/oficial_color.png"} alt="logo-fridarte"/>
          <p className="parr1">Fridarte</p>
          <p className="parr2">Studio</p>
        </div>
        {/* </div> */}
        
        <div className="portrait"> 
          
          {
            portraits.map( p => (
              <div className="photo">
                <img key={p} src={process.env.PUBLIC_URL + `/assets/${p}.jpg`} className="homePhoto" alt={`${p}`}/>
              </div>
            ) )
          }
          
        </div>
      
      </>        
  )
}
// style={{width:100,height:100}}