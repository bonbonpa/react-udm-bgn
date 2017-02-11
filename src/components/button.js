import React from 'react';

const Button = (props) => {
    console.log('props', props);
  return ( <button>{props.name}</button> );
};

export default Button