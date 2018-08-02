import React from 'react';
import ReactDOM from 'react-dom';
import './resources/public/css/index.css';
import App from './resources/public/js/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
