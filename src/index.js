import React from 'react';
import ReactDOM from 'react-dom';

import App ,{ AppDecription } from './components/app'; //{} is Destructuring

console.log(AppDecription);

ReactDOM.render(<App/> , document.querySelector('.container'));

//Destructuring is key store value