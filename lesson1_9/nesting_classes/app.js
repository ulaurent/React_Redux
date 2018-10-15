import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas :[
      {name: "ben", age: 25, belt: "black", id:1},
      {name: "lala", age: 24, belt: "blue", id: 2},
      {name: "wood", age: 29, belt: "red", id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
