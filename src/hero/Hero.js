import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        const companyName = '3D Consulting';
        const title = 'Digital Design & Development';
        const about = 'Our consultants have many years experienced working for organizations ranging from startups to medium & large corporations. \
        We undestand and have what it takes to design, architect & implement successsful enterprise application software (EAS) projects.';
        const message = 'We don\'t accept many projects at a time; so, we can focus on delivering true value to our clients.';
        const styles = {
            border: 0,
            background: 'transparent',
        };
        return (
            <section className="hero pt-4">
                <div className="badge-profile badge-profile-md 
                badge-profile-anh-cao bg-light ml-auto mr-auto">
                </div>
                <div className="card mx-auto col-md-7" 
                    style={ styles }>
                    <div className="card-body">
                        <h5 className="card-title d-inline font-weight-bold" 
                        title={ title } tooltip={ title }>
                        { companyName }
                        </h5>
                        <p className="card-text">{ about }</p>
                        {/* <p className="card-text">{ message }</p> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;