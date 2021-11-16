import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//all imports go here

ReactDOM.render(//this renders app using the virtual dom
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//adds to html in index.html as a single div!
);


