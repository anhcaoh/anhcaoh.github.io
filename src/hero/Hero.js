import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        const companyName = '3D Consulting';
        const title = 'Digital Design & Development';
        const about = 'Our consultants have many years experienced working for organizations ranging from startups to medium & large corporations. \
        We undestand and have what it takes to design, architect and implement successful enterprise application software (EAS) projects.';
        // const message = 'We don\'t accept many projects at a time; so, we can focus on delivering true value to our clients.';
        const styles = {
            border: 0,
            background: 'transparent',
        };
        const navs = [
            {name:'Projects',
            href:'#projects'},
            {name:'Services',
            href:'#services'},
            {name:'Our Team',
            href:'#team'},
            {name:'Contact',
            href:'#contact'}
        ];
        return (
            <section id="about" className="hero p-4 row">
                <div className="card text-left offset-md-1 col-md-6 mt-5" 
                    style={ styles }>
                    <div className="card-body">
                        <h5 className="card-title d-inline font-weight-bold" 
                        title={ title } tooltip={ title }>
                        { companyName }
                        </h5>
                        <p className="card-text pb-3">{ about }</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <nav className="navbar">
                    { navs.map( ( nav ) => 
                        <a key={ nav.name.toLowerCase() } name={nav.name.toLowerCase()}
                        className="text-light"
                        href={nav.href}>{ nav.name }</a>
                    )}
                    </nav>
                    <div className="card-img-top badge-profile badge-profile-md badge-profile-anh-cao mt-5 mb-3 ml-auto mr-auto"></div>
                </div>
            </section>
        );
    }
}

export default Hero;