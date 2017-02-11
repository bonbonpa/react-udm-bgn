import React from 'react';

function printToConsole(){
    console.log("Button Click");
}

//() => fat arrow function set up by es6 , function(){}
const App = () => ( 
  <div>
    <button onClick={printToConsole}>Click Me!</button>
  </div>
);

//console.log( <App/>)
export const AppDecription = "App says Hii";
export default App;