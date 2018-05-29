import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Me from './me'

ReactDOM.render(<Me />, document.getElementById('root'));
registerServiceWorker();
