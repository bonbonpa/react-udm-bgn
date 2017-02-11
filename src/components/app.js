import React from 'react';


//() => fat arrow function set up by es6 , function(){}
const App = () => ( 
  <div>
    <button onClick={() => console.log("Button Click")}>Click Me!</button>
  </div>
);

export default App;