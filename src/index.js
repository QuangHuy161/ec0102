import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './custom.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ad_login from "./component/function/fn_a_login";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {ad_login()};

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
