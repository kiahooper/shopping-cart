

import {BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Content from './Content'

import './globalStyles/app.scss';

const App = () => {

  return (
    <div className="app">
      <Router>
        <Content/>
    </Router>
    </div>

  );
}

export default App;
