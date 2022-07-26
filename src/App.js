
import React from 'react';
import { Provider } from 'react-redux';

import { WebRouter } from './routers/WebRouter';

import './index.css';
import store from './store/store';

console.log(process.env);

export const App = () => {
  return (

    <Provider store={store}>
        <div className="pr" >

          <WebRouter />

        </div>
    </Provider>
  )
}
