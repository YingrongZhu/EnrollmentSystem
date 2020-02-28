import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Tick() {
//     return (
//         <div>
//             <h1>hello,world!</h1>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// function Hello() {
//     return (
//         <h1> hello </h1>
//     )
// }


// var element = React.createElement('h1',{ classname: 'greeting'}, 'hello world!');
// ReactDOM.render(< Tick />, document.getElementById('root'));

// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
