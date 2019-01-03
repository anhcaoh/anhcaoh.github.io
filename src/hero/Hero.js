import React, { Component } from 'react';
import './hero.css';
class Hero extends Component {
    render() {
        const headline = 'Design Focus.';
        // const title = 'Cao Design';
        const about = 'Finishing touch matters';
        // const message = 'We don\'t accept many projects at a time; so, we can focus on delivering true value to our clients.';
        // const styles = {
        //     border: 0,
        //     background: 'transparent',
        // };
        return (
            <section id="about" className="hero p-4">
                <div className="card-body mt-5 text-center">
                    <h5 className="card-title d-inline font-weight-bold">
                    { headline }
                    </h5>
                    <p className="card-text">{ about }</p>
                </div>
                <div style={{ position: 'relative', 'marginBottom': '-6rem'}}
                    className="badge-profile badge-profile-md ml-auto mr-auto mt-5 bg-grad-clouds d-table">
                    <span className="d-table-cell align-middle bg-grad bg-3d" 
                    style={{"fontSize": '4rem', 'fontWeight': 'bold'}}>
                    <span style={{marginRight: '-12px',
                    marginLeft: '-8px'}}>c</span>
                    <span style={{ marginRight: '-14px'}}>a</span>
                    <span style={{ marginRight: '-7px'}}>o</span></span>
                    <span className="bg-grad bg-3d" style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: 0,
                    right: 0,
                    margin: 'auto'}}>design</span>
                </div>
            </section>
        );
    }
}

export default Hero;