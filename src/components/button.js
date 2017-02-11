import React, { PropTypes } from 'react';

const Button = (props) => { 
   // console.log('props',props);
   return (
    <button>{props.name}</button> //props for access 
   );   
};

Button.PropTypes = {
    name : PropTypes.string,
};  

export default Button