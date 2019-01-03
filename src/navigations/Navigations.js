import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Links from './Links';
import Home from '../hero/Home';
import Projects from '../projects/Projects';
import Services from '../services/Services';
import Team from '../team/Team';
import Contact from '../contact/Contact';

class Navigations extends Component {
    render() {  
        return(
        <BrowserRouter>
            <section id="main-navigation">
                <Links />
                <div style={{ 'marginTop' : 38 }}>
                <Switch>
                    <Route path="/services" component={ Services } />          
                    <Route path="/projects" component={ Projects } />
                    <Route path="/team" component={ Team } />
                    <Route path="/contact" component={ Contact }/>
                    <Route exact component={ Home }/>
                </Switch>
                </div>
            </section>
        </BrowserRouter>
        )
    }
}
export default Navigations