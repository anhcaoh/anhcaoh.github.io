import React, { Component } from 'react';
import './App.css';
import Navigations from './navigations/Navigations';
class App extends Component {
  render() {
    return (
      <main className="App">
        <Navigations />
        <footer className="text-center mt-4 mb-1">
          <small>Design and Develop by 3D Consulting @{ new Date().getFullYear() }.</small>
        </footer>
      </main>
    );
  }
}

export default App;
