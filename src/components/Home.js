
import React, { useMemo } from 'react';
import { getPortrait } from '../helpers/getPortrait';
// import '../index.css';
import './Home.css';

export const Home = () => {

  const portraits = useMemo(() => getPortrait('portada',13), []);
  

  console.log(portraits);

  return (
      <>

        <div className="portrait">
          
          {
            portraits.map( p => (
              <img key={p} src={process.env.PUBLIC_URL + `./assets/${p}.jpg`} className="homePhoto" alt={`${p}`}/>
            ) )
          }
          
        </div>
      
      </>        
  )
}
// style={{width:100,height:100}}