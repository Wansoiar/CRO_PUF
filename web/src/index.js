import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';

import './index.css';

ReactDOM.render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        /*<HashRouter>
          <App />
        </HashRouter>*/
    ),
    document.getElementById('root')
);
