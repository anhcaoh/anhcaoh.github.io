import React, { Component } from 'react';
import './App.css';
import Hero from './hero/Hero';
import Services from './services/Services';
import Projects from './projects/Projects';
import Team from './team/Team';
import Contact from './contact/Contact';
class App extends Component {
  render() {
    return (
      <main className="App">
        <Hero />
        <Projects />
        <Services />
        <Team />
        <Contact />
        <footer className="text-center mt-4 mb-1">
          <small>Design and Develop by 3D Consulting @{ new Date().getFullYear() }.</small>
        </footer>
      </main>
    );
  }
}

export default App;
