import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store.js';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    ReactGA.initialize('UA-125039397-1'),
    document.getElementById('root')
);
registerServiceWorker();