import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Items(props){
  return <div className="items">
    <b>Name:</b>{props.name} 
    <b>Price:</b> {props.price}
  </div>
}

const cheese=<Items name="Cheese" price="GHC 15.50"/>;
const bread=<Items name="Bread" price="GHC 10.00"/>

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  cheese,
  bread,
  document.getElementById('testing')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
