
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { WebRouter } from './routers/WebRouter';

import './index.css';


export const App = () => {
  return (
    <BrowserRouter>
      <div className="pr" >

        <WebRouter />

      </div>
        
    </BrowserRouter>
  )
}
