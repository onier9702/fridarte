
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { WebRouter } from './routers/WebRouter';

import './index.css';


export const App = () => {
  return (
    <HashRouter>
      <div className="pr" >

        <WebRouter />

      </div>
        
    </HashRouter>
  )
}
