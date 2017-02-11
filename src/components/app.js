import React , { Component } from 'react';
import Button from './button';

export default class App extends React.Component{ //create class inheriten from react component
    render(){
        return (
            <div>
                <Button name={'Add 1'} clicked={() => console.log("Clicked")}/>
            </div>
        );
    }
}
