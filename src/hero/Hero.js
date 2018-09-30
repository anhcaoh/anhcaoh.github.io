import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        const title = 'Digital Design & Development';
        const message = 'We don\'t accept many projects at a time, so we can focus on delivering true value to our clients.';
        const styles = {
            border: 0,
            background: 'transparent',
        };
        return (
            <section className="hero pt-4">
                <div className="badge-profile badge-profile-md 
                badge-profile-anh-cao bg-light ml-auto mr-auto">
                </div>
                <div className="card mx-auto col-md-5" 
                    style={ styles }>
                    <div className="card-body">
                        <h5 className="card-title d-inline" 
                        title={ title } tooltip={ title }>3D Consulting
                        </h5>
                        <p className="card-text">{ message }</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;