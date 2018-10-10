import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas :[
      {name: "ben", age: 25, belt: "black", id:1},
      {name: "lala", age: 24, belt: "blue", id: 2},
      {name: "wood", age: 29, belt: "red", id: 3},
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    // Carbon copy of array above in order to add new ninja
    // Copy array using spread operator
    // Adding new element 'ninja' 
    let ninjas = [...this.state.ninjas, ninja];
    // Now set the state // The new ninjas property is not equal to the new ninjas array we created
    this.setState({
      ninjas: ninjas
    })
    console.log(ninja);
  }
  
  render() { 
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;
