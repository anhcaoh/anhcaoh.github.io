import React, { Component } from 'react';
import './App.css';
import Navigations from './navigations/Navigations';
class App extends Component {
  render() {
    return (
      <main className="App">
        <Navigations />
        <footer className="text-center mt-3 mb-3">
          <small>Design with &hearts; by Cao Design Agency @ { new Date().getFullYear() }.</small>
        </footer>
      </main>
    );
  }
}

export default App;
