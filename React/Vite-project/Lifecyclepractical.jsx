import React, { Component } from 'react'

export default class Lifecycleclass extends Component {
 
 constructor(props){
  super(props);
  this.state={
    count:0,
    name:this.props.myname,
  };
  console.log("constructor called...")

 }
 componentDidMount(){
  console.log("componentDidmount called..");
  setTimeout(()=>{
    this.setState({

      name:"ABCD",
    });
  },3000);
 }
 static getDerivedstateFromProps(props,state){
  console.log('shouldCmoponentUpdate called');
  return true
 }

 getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('getSnapshotBeforeUpdate called')
  console.log('previous state');
  console.log(prevState);
  return null

 }

 componentDidUpdate(){
  console.log('Finally component updated...');

 }
 
 render() 
  {
    console.log("render called");
    return (
      <div>
          <h3>Lifecycle</h3>
          <h4>Name is----{this.state.name}</h4>
          <h4>Count is---{this.state.count}</h4>

      </div>
    );
  }
}
