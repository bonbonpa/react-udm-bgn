import React from 'react';
import ReactDOM from 'react-dom';

import App ,{ AppDecription } from './components/app'; //{} is Destructuring

const randomObject = { Maha : '10'  , Art : '20'};
const { Maha }  = randomObject; //access to Object value 
//out 10

console.log(AppDecription);
console.log(Maha);

ReactDOM.render(<App/> , document.querySelector('.container'));

//Destructuring is key store value