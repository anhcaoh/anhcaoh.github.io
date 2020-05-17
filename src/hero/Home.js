import React, { Component } from 'react';
import Hero from './Hero';
import Projects from '../projects/Projects';
import Services from '../services/Services';
import Team from '../team/Team';
import Contact from '../contact/Contact';

class Home extends Component {
    render() {
        return (
            <section id="home">
            <Hero />
            <Projects />
            <Services />
            <Team />
            <Contact />
            </section>
        )
    }
}
export default Home