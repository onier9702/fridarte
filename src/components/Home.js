
import React, { useMemo } from 'react';
import { getPortrait } from '../helpers/getPortrait';
import '../index.css';

export const Home = () => {

  const portraits = useMemo(() => getPortrait('portada',13), []);
  

  console.log(portraits);

  return (
      <>

        <div className='portrait'>
          
          {
            portraits.map( p => (
              <img key={p} src={`./assets/${p}.jpg`} style={{width:183,height:183}} alt=''/>
            ) )
          }
          
        </div>
      
      </>        
  )
}
