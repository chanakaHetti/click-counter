import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // const [count, setCount] = React.useState(0);

  render () {
    return (
      // <div data-test="component-app" className="App">
      //   <h1 data-test="counter-display">
      //     The counter is currently&nbsp; 
      //     <span data-test="count">{count}</span>
      //   </h1>
      //   <button
      //     data-test="increment-button"
      //     onClick={() => setCount(count + 1)}
      //   >
      //     Increment counter
      //   </button>
      // </div>
      <div data-test="component-app">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
