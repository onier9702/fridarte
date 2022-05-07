
import React, { useMemo } from 'react';
import { getPortrait } from '../helpers/getPortrait';
// import '../index.css';
import './Home.css';

export const Home = () => {

  const portraits = useMemo(() => getPortrait('portada',13), []);
  

  console.log(portraits);

  return (
      <>
        {/* <div className="probando"> */}
        <div className="logo">
          <img className="logofridarte" src={process.env.PUBLIC_URL + "/assets/oficial_color.png"} alt="logo-fridarte"/>
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