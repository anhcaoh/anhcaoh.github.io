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
                <div className="row">
                <div className="col-md-5 m-auto d-block d-sm-none">
                <div className="badge-profile badge-profile-md m-auto bg-grad-clouds d-table">
                    <span className="d-table-cell align-middle bg-grad bg-grad-electric-violet"
                    style={{ fontSize: '3.5rem',
                    letterSpacing: '-6px'}}>3D</span>
                </div>
                </div>
                <div className="card text-left offset-md-2 col-md-5"
                    style={ styles }>
                    <div className="card-body pl-0 pr-0">
                        <h5 className="card-title d-inline font-weight-bold" 
                        title={ title } tooltip={ title }>
                        { companyName }
                        </h5>
                        <p className="card-text">{ about }</p>
                    </div>
                </div>
                <div className="col-md-5 m-auto d-none d-sm-block">
                <div className="badge-profile badge-profile-md m-auto bg-grad-clouds d-table">
                    <span className="d-table-cell align-middle bg-grad bg-grad-electric-violet"
                    style={{ fontSize: '3.5rem',
                    letterSpacing: '-6px'}}>3D</span>
                </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Hero;