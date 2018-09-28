import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Projects />
        <Contact />
        <footer className="text-center mt-3 mb-1">
          <small>Design and Develop by Anh Cao @2018.</small>
        </footer>
      </div>
    );
  }
}

export default App;
