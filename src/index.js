import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { Router, browserHistory } from 'react-router';  

import "../src/css/style.scss";;
import routes from './routes';
import storeConfig from './js/store/StoreConfig';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store} >
      <Router history={browserHistory} routes={routes}  />
  </Provider>,
  document.getElementById('app')
);