
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Exterior } from '../components/Exterior';
import { Interior } from '../components/Interior';
import { IntExtRouter } from './IntExtRouter';
import { SingleImage } from '../components/SingleImage';

import '../index.css';

export const WebRouter = () => {

  return (

      <div id="ppal">

        <Routes>
            <Route path="#/interior"   element={ <Interior /> } />
            <Route path="#/exterior"   element={ <Exterior /> } />
            <Route path="#/single/:id" element={<SingleImage />}/>
            <Route path="*"           element={ <IntExtRouter /> } />
        </Routes>

      </div>
  )
}
