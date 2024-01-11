import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PrintPattern from './components/printPattern';
//import StarPattern from './starPattern';

//const rows=window.prompt("enter number of row: ");
//const rows=<div id="number"><input type='text' name='Rows'/></div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div> 
    <PrintPattern />
  </div>
  
  //<StarPattern rows={rows} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
