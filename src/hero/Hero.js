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
        return (
            <section id="about" className="hero p-4">
                <div className="card text-left offset-md-1 col-md-6"
                    style={ styles }>
                    <div className="card-body">
                        <h5 className="card-title d-inline font-weight-bold" 
                        title={ title } tooltip={ title }>
                        { companyName }
                        </h5>
                        <p className="card-text pb-3">{ about }</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;