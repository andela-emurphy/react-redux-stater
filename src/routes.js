import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './js/components/home/HomePage';
import Dashboard from './js/components/dashboard/Dashboard' ;
import Resource from './js/components/resource/Resource' ;

import App from './js/app';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={HomePage} />
    <Route path='dashboard' component={Dashboard} />
    <Route path='resource' component={Resource} />
  </Route>
);

