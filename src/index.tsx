import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./style/style.scss";


ReactDOM.render(<App />, document.getElementById('root'));

//打包需改成register
serviceWorker.unregister();
