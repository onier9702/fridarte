
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPortrait } from '../helpers/getPortrait';
// import '../index.css';
// import { SingleImage } from './SingleImage';

import './Interior.css';

export const Interior = () => {

  const interiors = useMemo(() => getPortrait('interior',12), []);
  
  const navigate = useNavigate();
  const handleReturn = () => {

    // return <Navigate to="/home"/>
    navigate(-1);
    console.log('It was pressed');

  };
  
  return (
      <>
        <div className="base">

          <i className="bi bi-arrow-left-short" id="back-logo" onClick={handleReturn} ></i>
          <h2>Estudio</h2>
          <hr />
          <div className="interior">
            {
              interiors.map( p => {
                return (
                  
                    <div className="tarjeta">
                      <div className="cuadro">
                        <img key={p[8]} src={process.env.PUBLIC_URL + `/assets/${p}.jpg`} style={{maxWidth: 100, maxHeight: 110}} className="photo" alt='int'/>
                      </div>
                      <Link to={`/single/${p}`} className="link" ><pre className="more">...</pre></Link>
                    </div>
                  
                  )
              } )
            }
          </div>
        </div>
        
      </>        
  )
}
