import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
    render() {
        const skills = 'Angular, React, TypeScript, JavaScript, NodeJS, MongoDB';
        const styles = {
            border: 0,
            background: 'transparent',
        };
        return (
            <div className="hero d-table">
                <div className="d-table-cell align-middle">
                    <div className="badge-profile badge-profile-md 
                    badge-profile-anh-cao bg-light mt-4 ml-auto mr-auto">
                    </div>
                    <div className="card" 
                        style={ styles }>
                        <div className="card-body">
                        <h5 className="card-title">Anh Cao</h5>
                        <p className="card-text">
                            { skills }
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;