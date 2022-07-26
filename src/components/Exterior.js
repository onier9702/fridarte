
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPortrait } from '../helpers/getPortrait';

import './Interior.css';

export const Exterior = () => {

  const exteriors = useMemo(() => getPortrait('exterior',12), []);
  const navigate = useNavigate();
  const handleReturn = () => {

    // return <Navigate to="/home"/>
    navigate(-1);

  };
  
  return (
      <>
        <div >

          <i className="bi bi-arrow-left-short" id="back-logo" onClick={handleReturn} ></i>
          <h2>Exteriores</h2>
          <hr />
          <div className='interior'>
            
            {
              exteriors.map( (p, index) => {
                return ( 
                  <>
                    <div key={index} className="tarjeta">
                      <div className="cuadro">
                        <img  src={process.env.PUBLIC_URL + `/assets/${p}.jpg`} className="photo" key={p[8]} style={{maxWidth: 100}} alt='prov' />
                      </div>
                      <Link to={`/single/${p}`} className="link" ><pre className="more">...</pre></Link>
                    </div>
                  </>
                )})
            }
          </div>
        </div>
      </>        
  )
}
