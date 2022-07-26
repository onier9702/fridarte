import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'dotenv/config';
import { HashRouter } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);


