import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './clock';
const instance=(
  <div className="flexbox">
    <Clock title="Frankfurt" hourDiff={-3} minDiff={-30}/>
    <Clock title="Sydney" hourDiff={4} minDiff={30}/>
    <Clock title="Pacific Time" hourDiff={-12} minDiff={-30}/>

  </div>
);
ReactDOM.render(
  
    instance,
  
  document.getElementById('root')
);

