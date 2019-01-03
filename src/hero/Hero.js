import React, { Component } from 'react';
import './hero.css';
class Hero extends Component {
    render() {
        const headline = 'Design Focus.';
        const title = 'Cao Design';
        const about = 'Finishing touch matters';
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
                        {/* <span className="d-table-cell align-middle bg-grad bg-3d"
                        style={{ fontSize: '4rem',
                        letterSpacing: '-6px'}}>cao</span> */}
                        <span class="d-table-cell align-middle bg-grad bg-3d" 
                        style="font-size: 4rem;font-weight: bold;">
                        <span style="
                        margin-right: -12px;">c</span>
                        <span 
                        style="
                        margin-right: -14px;
                        transform: rotateX(8deg);">a</span>
                        <span style="
                        padding-right: m;
                        margin-right: -7px;">o</span></span>
                    </div>
                    <span className="bg-grad bg-3d" style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        left: 0,
                        right: 0,
                        margin: 'auto'}}>design</span>
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
                        {/* <span className="d-table-cell align-middle bg-grad bg-3d text-center"
                        style={{ fontSize: '4rem',
                        letterSpacing: '-6px'}}>cao</span> */}
                        <span class="d-table-cell align-middle bg-grad bg-3d" 
                        style="font-size: 4rem;font-weight: bold;">
                        <span style="
                        margin-right: -12px;">c</span>
                        <span 
                        style="
                        margin-right: -14px;
                        transform: rotateX(8deg);">a</span>
                        <span style="
                        padding-right: m;
                        margin-right: -7px;">o</span></span>
                    </div>
                    <span className="bg-grad bg-3d" style={{
                        position: 'absolute',
                        bottom: '1.5rem',
                        left: 0,
                        right: 0,
                        margin: 'auto'}}>design</span>
                </div>
                </div>
            </section>
        );
    }
}

export default Hero;