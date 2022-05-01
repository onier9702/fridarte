
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPortrait } from '../helpers/getPortrait';
import '../index.css';

export const Exterior = () => {

  const exteriors = useMemo(() => getPortrait('exterior',13), []);
  const navigate = useNavigate();
  const handleReturn = () => {

    // return <Navigate to="/home"/>
    navigate(-1);
    console.log('It was pressed');

  };
  
  return (
      <>
        <div >

          <i className="bi bi-arrow-left-short" id="back-logo" onClick={handleReturn} ></i>
          <h2>Exteriores</h2>
          <hr />
          <div className='interior'>
            
            {
              exteriors.map( p => {
                return (
                  <>
                    <div id="tarjeta">
                      <div id="cuadro">
                        <img id="photo" key={p} src={`/assets/${p}.jpg`} style={{maxWidth: 100}} alt=''/>
                      </div>
                      <Link to={`/single/${p}`} id="link" ><pre id="more">...</pre></Link>
                    </div>
                  </>
                )})
            }
          </div>
        </div>
      </>        
  )
}
