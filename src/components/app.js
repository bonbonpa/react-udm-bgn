import React from 'react';
import Button from './button';

//() => fat arrow function set up by es6 , function(){}
const App = () => ( 
  <div>
    <Button name={55} clicked={() => console.log('Clicked')}/>
    <Button name={'Search'} />
  </div>
);

export default App;