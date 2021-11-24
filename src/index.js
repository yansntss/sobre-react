import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ex4_useState from './exemplos/ex4_useState'
import Ex6_useEffect from './exemplos/ex6_useEffect'

ReactDOM.render(
  <React.StrictMode>
    <Ex6_useEffect />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
