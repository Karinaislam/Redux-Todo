import React, { Component } from 'react';

import './App.css';

import AddTodo from './Compnents/AddTodo/AddTodo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Redux Relax todo </h1>
        <AddTodo></AddTodo>
      </div>
    );
  }
}

export default App;
