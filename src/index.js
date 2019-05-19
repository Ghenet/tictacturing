import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import Routes from './routes/index.js'

ReactDOM.render(
<Router 
 history={browserHistory}
 routes={Routes}
 />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

