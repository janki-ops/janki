import React, { Component } from 'react'

export default class ClassExample extends Component {
    constructor(){
        super()
        this.state={
            name:"test",
            age:25,
            salary:25000
        }
        

        this.handleclick=()=>{
            this.setState({name:"Abcd"})
           
        }
         this.handleage=()=>{
            this.setState({age:50})
           
        }
         this.handlesal=()=>{
            this.setState({salary:50000})
           
        }
    }
  render() {
    return (
      <div>
            <h3>Name is---{this.state.name}</h3>
            <h3>Age is---{this.state.age}</h3>
            <h3>Salary is---{this.state.salary}</h3>
            <button onClick={this.handleclick}>Set new Name</button>
            <button onClick={this.handleage}>Set new Age</button>
            <button onClick={this.handlesal}>Set new Salary</button>
            
      </div>
    )
  }
}
