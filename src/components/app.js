import React , { Component } from 'react';
import Button from './button';

export default class App extends React.Component{ //create class inheriten from react component
    constructor(props){  //<<<<< constructor เริ่มต้นทำงาน เมื่อ App ถูกสร้าง 
        super(props)    //<<< super <<< เรียกใช้ Constructor ของคลาสแม่
        this.state = { 
            counter : 0,
        };
    }
    //this.state.counter => ค่าจาก constructor 
    render(){
        return (
            <div>
                {this.state.counter}  
                <Button name={'Add 1'} clicked={() => this.setState({counter : this.state.counter + 1 })}/>
            </div>
        );
        //setState <<<
    }
}
