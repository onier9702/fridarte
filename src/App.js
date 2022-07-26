
import React from 'react';
import { Provider } from 'react-redux';


import './index.css';
import store from './store/store';
import { WebRouter } from './routers/WebRouter';

export const App = () => {
  return (

    <Provider store={store}>
        <div className="pr" >

          <WebRouter />

        </div>
    </Provider>
  )
}
