import React, { Component } from 'react';
import './hero.css';
class Hero extends Component {
    render() {
        const headline = 'Value Delivered.';
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
                <div className="row p-4">
                <div className="col-md-5 m-auto d-block d-sm-none" title={ title } tooltip={ title }>
                    <div className="badge-profile badge-profile-md m-auto bg-grad-clouds d-table">
                        <span className="d-table-cell align-middle bg-grad bg-3d"
                        style={{ fontSize: '4.5rem',
                        letterSpacing: '-6px'}}>3D</span>
                    </div>
                    <small className="bg-grad bg-3d" style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        margin: 'auto',
                        marginLeft: '-1.9rem'}}>Consulting</small>
                </div>
                <div className="card text-left offset-md-2 col-md-5"
                    style={ styles }>
                    <div className="card-body pl-0 pr-0">
                        <h5 className="card-title d-inline font-weight-bold">
                        { headline }
                        </h5>
                        <p className="card-text">{ about }</p>
                    </div>
                </div>
                <div className="col-md-5 m-auto d-none d-sm-block" title={ title } tooltip={ title }>
                    <div className="badge-profile badge-profile-md m-auto bg-grad-clouds d-table relative">
                        <span className="d-table-cell align-middle bg-grad bg-3d text-center"
                        style={{ fontSize: '4.5rem',
                        letterSpacing: '-6px'}}>3D</span>
                    </div>
                    <small className="bg-grad bg-3d" style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        margin: 'auto',
                        marginLeft: '-1.9rem'}}>Consulting</small>
                </div>
                </div>
            </section>
        );
    }
}

export default Hero;