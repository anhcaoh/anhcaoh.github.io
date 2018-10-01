import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero';
import Services from './services/Services';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
class App extends Component {
  render() {
    return (
      <main className="App">
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <footer className="text-center m-3">
          <small>Design and Develop by Anh Cao @2018.</small>
        </footer>
      </main>
    );
  }
}

export default App;
