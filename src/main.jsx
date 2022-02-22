import React from 'react';
import ReactDOM from 'react-dom';
import { RootRouter } from './components/routers/RootRouter';
import 'normalize.css'
import 'animate.css'
import 'boxicons'
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);
