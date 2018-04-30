import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/Link'
import CheckboxWithLabel from './components/CheckboxWithLabel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link></Link>
        <CheckboxWithLabel></CheckboxWithLabel>
      </div>
    );
  }
}

export default App;
